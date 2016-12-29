(function($) {
	"use strict";
	/* Section Background */
	$('.parallax').each(function(){
		var image = $(this).attr('data-image');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
	});
	/*OWL Carousel in Our Story*/
	$(".classes .classes_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, 
 		rewindSpeed : 500, singleItem:true, autoHeight:true, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']	
	});
	/*OWL Carousel in Reviews*/
	$(".reviews .classes_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		items:1, autoHeight:true, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']	
	});
	/*OWL Carousel in Intro*/
	$(".intro_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200,
		paginationSpeed : 200, rewindSpeed : 500, singleItem:true, autoHeight:true, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});
	/*OWL Carousel in Classes*/
	$(".classes_inside_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200, paginationSpeed : 200,
		rewindSpeed : 500, singleItem:true, autoHeight:true, pagination:false, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']	
	});
	/*OWL Carousel in Products*/
	$(".products_inside_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200, paginationSpeed : 200,
		rewindSpeed : 500, singleItem:true, autoHeight:true, pagination:true, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']	
	});
	/*OWL Carousel in Coach*/
	$(".coach_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		items:3, autoHeight:true, itemsTablet: [768,1], itemsDesktopSmall : [1024,2], addClassActive : true,
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	/*OWL Carousel in Blog*/
	$(".blog_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		items:3, autoHeight:true, itemsMobile : [479,1], itemsTablet: [768,2], itemsDesktopSmall : [1024,2], addClassActive : true,
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	/*OWL Carousel in Gallery*/
	$(".gallery_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		items:3, itemsMobile : [479,1], itemsTablet: [768,2], itemsDesktopSmall : [1024,3], autoHeight:true, addClassActive : true,
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	/*OWL Carousel in Partners*/
	$(".partners_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		autoHeight:true, addClassActive : true, navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

	/*Demo Carousel*/
	$(".demo_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200, rewindSpeed : 500,
		autoHeight:true, addClassActive : true, items:2, itemsMobile : [479,1], itemsTablet: [768,1], itemsDesktopSmall : [1024,1], navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});


	

	
	/*Main Menu Button */
	$('.main_menu').on("click", function(e){
		$(this).parents('header').toggleClass('tm_active');
		e.preventDefault();
	});

	/*Search*/
	$('.se_bl').on({
		mouseenter:function(){
			$(this).find('.form-control').toggleClass('active');
		},mouseleave:function(){
			$(this).find('.form-control').toggleClass('active');
		}
	});

	/*Coach Zoom*/
	$('.coach_item').on({
		mouseenter:function(){
			$(this).addClass('active');
		},mouseleave:function(){
			$(this).removeClass('active');
		}
	});


	/*Statistics Counters*/
	$('.stat').waypoint(function(){
		var counter = 0;
		$('.stat_numbers em').each(function(){
			var el = this;
			counter++;
			var y = parseInt($(el).prev('.numb').html());
				setTimeout(function(){
				$({someValue: 0}).animate({someValue: y}, {
				  duration: 2000, easing:'swing', 
				  step: function() { 
					$(el).html(Math.round(this.someValue));
				  },
				  complete:function(){
					$(el).html(y);
				  }				  
				});
			},500 * counter);
		})
	}, {
		offset : '100%'
	});
	
	
	/*Scroll Effect*/
	$('.intro_down, .go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

	/*basket Menu*/
	$('.basket_icon').on("click", function(e){
		$(this).next('.basket_menu').fadeToggle();
		e.preventDefault();
	});

	/* Top Menu Click to Section */
	$('.sub_menu').find('a').on("click", function(e){
		$('.sub_menu').find('a').removeClass('active');
		$(this).addClass('active');
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		$("header").removeClass('tm_active');
	});
	
	
	/*RSVP Form*/
	$(".submit_block_1").on("click", function(){
		send_form('block_1');
		return false;
	});
	
	function send_form(type){
	
	var name = $("input#name_"+type).val();
	if (name == "") {
		$("input#name_"+type).css({border:"2px solid red"});
		$("input#name_"+type).focus();
		return false;
	}
	var email = $("input#email_"+type).val();
	if (email == "") {
		$("input#email_"+type).css({border:"2px solid red"});
		$("input#email_"+type).focus();
		return false;
	}
	var phone = $("input#phone_"+type).val();
	if (phone == "") {
		$("input#phone_"+type).css({border:"2px solid red"});
		$("input#phone_"+type).focus();
		return false;
	}
	var txt = $("textarea#txt"+type).val();
	
	var dataString = '&name=' + name + '&email=' + email + '&phone=' + phone + '&txt=' + txt;
	var form = $(this);
	var str = form.serialize(); 
	$.ajax({
		method: "POST",
		url: "http://formspree.io/your@mail.com",
		data: dataString,
		dataType: "json",
		success: function() {
		$('#div_'+type).html("<div id='form_send_message'>Thank you for your request, we will contact you as soon as possible.</div>", 1500);	
	}
	});

	}


	/*Up Arrow*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.up_arrow, .bask_bl').fadeIn();
		}
		else {
			$('.up_arrow, .bask_bl').fadeOut();
		}
	});

	/*Tooltips*/
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/*Header Styles*/
	if ($(window).width() > 1024) {
		if ($(window).scrollTop() > 100) {
			$('header').removeClass('tm');
		}
		else {
			$('header').addClass('tm');
		}
	}
	if ($(window).width() > 1024) {
		$(window).scroll(function(){
			if ($(window).scrollTop() > 100) {
				$('header').addClass('open');
				$('header').removeClass('tm');
				$('.open_menu').fadeOut();
			}
			else {
				$('header').removeClass('open');
				$('header').addClass('tm');
				$('.open_menu').fadeIn();
			}
		});
	}

	/*Gallery Lightbox*/
	$('.lightbox').magnificPopup({ 
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

	/*Color Settings*/
	$('.open_settings').on("click", function(e){
		$(this).parents('.settings').toggleClass('open');
		e.preventDefault();
	});
	$('.f_color').on("click", function(e){
		var color = $(this).attr('data-color');
		$('body').removeClass('red').removeClass('blue').removeClass('orange').removeClass('yellow');
		$('body').addClass(color);
		$(this).parents('.settings_cont').find('a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.s_color').on("click", function(e){
		var color = $(this).attr('data-color');
		$('body').removeClass('gray').removeClass('black').removeClass('lgray');
		$('body').addClass(color);
		$(this).parents('.settings_cont').find('a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	

	/*OWL Carousel in Intro Reinit*/
	$(window).resize(function() {
	  $('.intro_wrapper').data('owlCarousel').reinit();
	});

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});

	/*Product AutoHeight*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				var currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
					{
					tallestcolumn = currentHeight;
					}
			}
		);
	columns.height(tallestcolumn);
	}
	if ($(window).width() > 1024) {
		setEqualHeight($(".product_item"));
	}
	/*ScroolR Init*/
	if ($(window).width() > 1024) {
		var s = skrollr.init({
			forceHeight: false,
		});
		s.refresh($(".coach_wrapper, .classes_wrapper, .reviews_wrapper, .intro_wrapper, .gallery_wrapper"));
	}

	/*Price Filter*/
	$('#price-filter').slider({
        range: true,
        min: 0,
        max: 999,
        values: [100, 700],
        slide: function(event, ui)
        {
            $('#price-filter-value-1').text(ui.values[0]);
            $('#price-filter-value-2').text(ui.values[1]);
            var min = ui.values[0] / 999 * 90;
            var max = ui.values[1] / 999 * 90;
            $('.min-filter').css('left', min + '%');
            $('.max-filter').css('left', max + '%');
        }
    });
	
})(jQuery);