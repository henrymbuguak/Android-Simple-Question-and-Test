/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// Скрипты шаблона 
$(function() {
	 $('ul.tabs_menu').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs_box').removeClass('active').eq($(this).index()).addClass('active');
  });

   $('.scroll').click(function(){
      var id = $(this).data('target');
      var destination = $("#"+id).offset().top - 80;
      console.log("wed"+id);
      $("body").animate({ scrollTop: destination}, 500 );
    });

   var url = $('.video_guide').find('iframe').attr('src');
   $('.mc_video').click(function(){
      $('.video_guide').find('iframe').attr('src',url);
      $('.video_guide, .dark_mask').fadeIn();
    });
   $('.dark_mask, .vg_close').click(function(){
      $('.video_guide, .dark_mask').fadeOut();
      $('.video_guide').find('iframe').attr('src','');
    });



	  /* ============= nav menu  ============= */
   var TriggerClick = 0;
  var width = $(window).width();
    $(".nav_icon").click(function () { 
      console.log(width);
      if(TriggerClick==0){
           TriggerClick=1;
           $(this).addClass("active");
           if (width >= '767') {
              $(".mm_panel").animate({'height':'400px'});   
           } else {
              $(".mm_panel").slideToggle();   
           }
           
        }else{
          TriggerClick=0;
          $(this).removeClass("active");
          if (width >= '767') {
              $(".mm_panel").animate({'height':'0px'});   
           } else {
              $(".mm_panel").slideToggle();   
           }         
        }      
    }); 
    
    $(".mm_p_c_title").click(function () { 
       if (width <= '769') {
        $(this).next('ul').slideToggle(); 
      }
    }); 
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 424) {
            $('.fp_info_panel').addClass('fixed');
        } else {
            $('.fp_info_panel').removeClass('fixed');
        }
    });
    $(".comment").each(function () {
      if ($(this).find('.ignore-select').hasClass('ratingplus')) {
          $(this).find('.avatar').addClass('good');
      }

      if ($(this).find('.ignore-select').hasClass('ratingminus')) {
         $(this).find('.avatar').addClass('bad');
      }
    });

    

    

    /* ============= login  ============= */

    $(".lp_av").click(function () { 
       $('.lp_panel_login').fadeToggle();
       $('.lp_panel_login').toggleClass('open');
       $('.hide_mask').fadeToggle();
    }); 
    $(".lb_last_com").click(function () { 
       var id_las_com = $('.lb_lc_panel_in').find('li').first().attr('id'); 
        var date = new Date();
      	date.setTime(date.getTime() + (32*60 * 60 * 1000));
       $.cookie("last_com_id", id_las_com, {expires: date});
       
       $('.lb_last_com').removeClass('activ');
       $('.lb_lc_panel').fadeToggle();
       $('.lb_lc_panel').toggleClass('open');
       $('.hide_mask').fadeToggle();
    }); 

    var cookie_id_las_com = $.cookie("last_com_id");
    var now_id_las_com = $('.lb_lc_panel_in').find('li').first().attr('id'); 

    console.log(cookie_id_las_com);

    if (cookie_id_las_com != now_id_las_com) {
    	$('.lb_last_com').addClass('activ');

    } 
    
    $('.hide_mask').click(function () { 
       $('.open').fadeOut();
       $('.open').removeClass('open');
       $('.hide_mask').hide();
    }); 
		
});