$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 100) {
          $(".div-header").css('background-color', '#241A1A');
          $(".right-nav ul li a").css('color', '#ffffff');
      } else {
          $('.div-header').css('background-color', 'transparent');
          $(".right-nav ul li a").css('color', '#000000');
        }
      });
  });