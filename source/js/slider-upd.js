
(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
  $('.slider-top__slide').hide().eq(0).show();

  var slideNum = 0;
  var slideTime;

  slideCount = $("slider-top .slider-top__slide").size();


  var animSlide = function(arrow){
    clearTimeout(slideTime);

    $('.slider-top__slide').eq(slideNum).fadeOut(hwSlideSpeed);

    if(arrow === "next"){
      if(slideNum === (slideCount-1)) {
        slideNum=0;
      }
      else{
        slideNum++;
      }
    }
    else if(arrow === "prev") {

      if(slideNum === 0){
        slideNum=slideCount-1;
      }
      else{
        slideNum-=1
      }
    }
    else{ 
      slideNum = arrow;
      }

    $('.slider-top__slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
    $(".slider-top__controls-item--active").removeClass("slider-top__controls-item--active");
    $('.slider-top__controls-item').eq(slideNum).addClass('slider-top__controls-item--active');
  }


  $('.slider-top__arrow--right').click(function(){
    animSlide("next");
    })
  $('.slider-top__arrow--left').click(function(){
    animSlide("prev");
    })


  $('.slider-top__controls-item').click(function(){
  var goToNum = parseFloat($(this).text()) -1;
  animSlide(goToNum);
  });

  var pause = false;

  var rotator = function(){
    if(!pause){
      slideTime = setTimeout(function(){
        animSlide('next')
      }, hwTimeOut);
    }
  }
  
  $('.slider-top-wrap').hover(  
    function(){
      clearTimeout(slideTime); 
      pause = true;
    },
    function(){
      pause = false; 
      rotator();
    });
  
  rotator();
});
})(jQuery);