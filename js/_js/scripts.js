//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
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
	$(function () {
		var check = $('.check', this),
			email = $('.email', this),
			message = $('.alert_message', this),
			button = $('.button_mail', this);
		$(".form").on("submit", function () {
			var check = $('.check', this),
				message = $('.alert_message', this),
				reNone = /.+/,
				email = $('.email', this),
				button = $('.button_mail', this);
			if (!email.val().match(reNone)) {
				message.text('Введите email').slideDown(500);
				return false;
			}
			if (!check.prop("checked")) {
				check.next().css({
					'color': 'red',
					'transition': 'all .4s ease'
				});
				check.next().children().css({
					'color': 'red',
					'transition': 'all .4s ease'
				});
				message.text('Подтвердите соглашение').slideDown(500);
				return false;
			}
			if (email.val() && check) {
				// button.text('Отправляем...');
				button.text('Отправляем...');
				setTimeout(function () {
					button.text('Отправлено!');
				}, 500);
			}
		});
		email.click(function () {
			// email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
			message.slideUp(500);
		});
		check.click(function () {
			check.next().css({
				"color": "#eee",
				'transition': 'all .4s ease'
			});
			check.next().children().css({
				"color": "#eee",
				'transition': 'all .4s ease'
			});
			message.slideUp(500);
		});
	});

	$(function () {
		$("[data-fancybox]").fancybox({
			buttons: [
				'slideShow',
				'share',
				'zoom',
				'fullScreen',
				// 'download',
				'close'
			],
			speed: 330,
			loop: true,
			opacity: "auto",
			// autoScale: true,
			mouseWheel: true,
			transitionEffect: 'slide'
		});
	});
	$(function () {

		$(".video_wrapper img").click(function () {
			var a = $(this).parent().attr("data-youtube");
			$(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>')
		});
	});
	/*Конец документа*/
});