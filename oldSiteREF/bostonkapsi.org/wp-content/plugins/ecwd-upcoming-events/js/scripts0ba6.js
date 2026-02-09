/**
 * Created by lusinda on 6/15/15.
 */
(function ($) {
    'use strict';
    var upcominterval = setInterval(function () {
        if (typeof $.fn.ecwd_popup == 'function') {
            $('.single_event_popup').ecwd_popup({
                button: $('.ecwd_open_event_popup'),
                body_class: "ecwd-excluded-events ecwd_popup_body_scroll",
                title: "Event Details",
                get_ajax_data: function (el) {
                    var data = {
                        action: 'ecwd_event_popup_ajax',
                        id: el.attr('class').split('event')[2]
                    };
                    return data;
                }
            });
            clearInterval(upcominterval);
        }
    }, 100);
}(jQuery));