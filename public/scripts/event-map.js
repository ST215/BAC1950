(function () {
  function init() {
    if (typeof L === "undefined") return;
    var el = document.getElementById("event-map");
    if (!el) return;
    var lat = parseFloat(el.dataset.lat);
    var lng = parseFloat(el.dataset.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    var venue = el.dataset.venue || "Venue";
    var address = el.dataset.address || "";

    var map = L.map(el, { scrollWheelZoom: false, zoomControl: true }).setView([lat, lng], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markerIcon = L.divIcon({
      className: "event-map-marker",
      html: '<span class="event-map-marker-dot"></span><span class="event-map-marker-pulse"></span>',
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    var marker = L.marker([lat, lng], { icon: markerIcon, title: venue }).addTo(map);
    marker.bindPopup(
      '<strong>' + venue + '</strong><br>' + address,
      { closeButton: true }
    );

    el.addEventListener("click", function () {
      map.scrollWheelZoom.enable();
    });
    el.addEventListener("mouseleave", function () {
      map.scrollWheelZoom.disable();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
