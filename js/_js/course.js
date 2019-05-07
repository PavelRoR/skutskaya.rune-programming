//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend flipclock.min.js
$(document).ready(function () {
    $(function () {
        var isIE = false || !!document.documentMode;

        if (isIE) {
            var head  = document.getElementsByTagName("head")[0];
            var link  = document.createElement("link");
            link.rel  = "stylesheet";
            link.href = "css/ie.css";
            head.appendChild(link);
        }
    });

            /* Якорь */
            $(function () {
                $("a[href='#prices'], a[href='#tasks']").click(function (h) {
                    h.preventDefault();
                    var f = $(this).attr("href"),
                        g = $(f).offset().top;
                    $("body,html").animate({
                        scrollTop: g
                    }, 1500)
                });
            });

        /*План*/
    (function ($) {
        jQuery.fn.lightTabs = function (options) {
            var createTabs = function () {
                tabs = this;
                i = 0;
                showPage = function (i) {
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active")
                }
                showPage(0);
                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });
                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $(document).ready(function () {
        $(".plan_tabs").lightTabs();
    });

    $(function () {
     		/* Таймер */
		var clock;
		var futureDate = new Date("May 2, 2019 00:00 AM UTC+3");
		var currentDate = new Date();
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		function dayDiff(first, second) {
			return (second - first) / (1000 * 60 * 60 * 24);
		}
		if (dayDiff(currentDate, futureDate) < 100) {
			$('.clock').addClass('twoDayDigits');
		} else {
			$('.clock').addClass('threeDayDigits');
		}
		if (diff < 0) {
			diff = 0;
			$('.clock-stop').addClass("alert-danger");
            $('.clock-stop').html("Бонус уменьшился!");
            // $('#link_1').attr('href', '');
            // $('#link_2').attr('href', '');
            // $('#link_3').attr('href', '');
            // $('#prepayment_bonus').text('900р.');
            // $('#prepayment_credited').text('2 800р.');
            // $('#prepayment_link').attr('href', '');
		}
		clock = $('.clock').FlipClock(diff, {
			clockFace: 'HourlyCounter',
			countdown: true,
			language: 'ru',
			callbacks: {
				stop: function () {
					$('.clock-stop').addClass("alert-danger");
					("alert-danger");
                    $('.clock-stop').html("Бонус уменьшился!");
                    // $('#link_1').attr('href', '');
                    // $('#link_2').attr('href', '');
                    // $('#link_3').attr('href', '');
                    // $('#prepayment_bonus').text('900р.');
                    // $('#prepayment_credited').text('2 800р.');
                    // $('#prepayment_link').attr('href', '');
				}
			},
		});   
    });
    /*Записи*/
    (function ($) {
        jQuery.fn.lightTabs2 = function (options) {
            var createTabs2 = function () {
                tabs2 = this;
                i = 0;
                showPage2 = function (i) {
                    $(tabs2).children("div").children("div").hide();
                    $(tabs2).children("div").children("div").eq(i).show();
                    $(tabs2).children("ul").children("li").removeClass("active2");
                    $(tabs2).children("ul").children("li").eq(i).addClass("active2")
                }
                showPage2(0);
                $(tabs2).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page-2", i);
                    i++;
                });
                $(tabs2).children("ul").children("li").click(function () {
                    showPage2(parseInt($(this).attr("data-page-2")));
                });
            };
            return this.each(createTabs2);
        };
    })(jQuery);
    $(document).ready(function () {
        $(".days").lightTabs2();
    });
/*Конец документа*/
});