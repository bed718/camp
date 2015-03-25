Drupal.behaviors.init = {
	attach: function (context, settings) {
		(function ($) {
 			
 			
			// MENU TWEAKS!!!
 			//===================================
 			$('.menu-toggle').click(function(){
				$('#header-container #menu').slideToggle(300);
				return false;
			});

			$("#menu a, .page-clients .item-list").append('<span class="line" />');

			var topTrigger = $('#back-to-top');

			topTrigger.click(function(){
			    $("html, body").animate({ scrollTop: 0 }, 800);
			    return false;
			});


			$(window).scroll(function(event) {
				var top = $(window).scrollTop();

				if(top > 200){
					topTrigger.addClass('active');
				}else{
					topTrigger.removeClass('active');
				}
			});

 			// MASONRY!!!
 			//===================================
			// var masonry_container = $('.node-image-gallery .field-name-field-other-images');
			
			// masonry_container.imagesLoaded(function(){
			// 	masonry_container.masonry({
			// 	  itemSelector: '.field-item'
			// 	});
			// });


			// SKROLR!!!
 			//===================================
			// if($(window).width() > 500){
	 		//		var s = skrollr.init({
	 		// 		forceHeight: false,
	 		// 	});
	 		// }


		}(jQuery));
	}	
}


