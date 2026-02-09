const Image = require("@11ty/eleventy-img");
const path = require("path");

// Image shortcode for optimized images
async function imageShortcode(src, alt, sizes = "100vw", widths = [400, 800, 1200], loading = "lazy", fetchpriority = null, className = null) {
  // Handle both absolute paths and relative paths
  let imagePath = src;
  if (src.startsWith("/")) {
    imagePath = path.join("src", src);
  }

  let metadata = await Image(imagePath, {
    widths: widths,
    formats: ["avif", "webp", "auto"], // auto = original format as fallback
    outputDir: "./_site/assets/images/optimized/",
    urlPath: "/assets/images/optimized/",
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    }
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: loading,
    decoding: "async",
  };

  // Add fetchpriority for LCP images
  if (fetchpriority) {
    imageAttributes.fetchpriority = fetchpriority;
  }

  // Add class if provided
  if (className) {
    imageAttributes.class = className;
  }

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Add image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Pass through static assets (excluding images that will be optimized)
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images"); // Keep originals as fallback
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Watch for changes in CSS
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Add current year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add filter to format dates
  eleventyConfig.addFilter("formatDate", (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Add filter to create URL-safe slugs
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  });

  // Add filter to get ordinal suffix (1st, 2nd, 3rd, etc.)
  eleventyConfig.addFilter("ordinal", (num) => {
    const s = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return num + (s[(v - 20) % 10] || s[v] || s[0]);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
