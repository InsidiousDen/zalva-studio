$(document).ready(function(){
  $(window).on('scroll',function(){

    let link = $('.navbar a.dot');
    let top = $(window).scrollTop();

    $('.slide').each(function(){
      let id = $(this).attr('id');
      let height = $(this).height();
      let offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height){
        link.removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  });
});

$(document).ready(function () {
  let divs = $('.slide');
  let dir = 'up';
  let div = 0; 
  
  $(document.body).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        dir = 'down';
    } else {
        dir = 'up';
    }
    div = -1;
    divs.each(function(i){
        if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
            div = i;
        }
    });
    if (dir == 'up' && div > 0) {
        div--;
    }
    if (dir == 'down' && div < divs.length) {
        div++;
    }
      $('html,body').stop().animate({
        scrollTop: divs.eq(div).offset().top
    }, 200);
    return true; 
  });
  $(window).resize(function () {
      $('html,body').scrollTop(divs.eq(div).offset().top);
  });
});

