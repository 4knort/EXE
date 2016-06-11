
(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
  $('.slider-top__slide').hide().eq(0).show();

  var slideNum = 0;
  var slideTime;

  slideCount = $(".slider-top .slider-top__slide").size();


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


// (function() {
//   var hwTimeOut = 4000;  

//   document.addEventListener('DOMContentLoaded', function() {  
//     var slides = document.querySelectorAll('.slider-top__slide');
//     var slideBtns = document.querySelectorAll('.slider-top__controls-item');
//     var arrowNext = document.querySelector('.slider-top__arrow--right');
//     var arrowPrev = document.querySelector('.slider-top__arrow--left');
//     var sliderWrap = document.querySelector('.slider-top-wrap');
//     var pause = false;
 
//     for (var i = 1; i < slides.length; i++) {
//       slides[i].style.opacity = 0;
//     }

//     var slideNum = 0;
//     var slideTime;

//     var animSlide = function(arrow) {
//       clearTimeout(slideTime);

//       fadeOut(slides[slideNum]);

//       var activeSlideBtn = document.querySelector('.slider-top__controls-item--active');

//       if( arrow === 'next') {
//         if(slideNum === (slides.length - 1)) {
//           slideNum = 0;
//         } else {
//           slideNum++
//         } 
//       } else if ( arrow === 'prev') {
//         if (slideNum === 0) {
//           slideNum = slides.length - 1;
//         } else {
//           slideNum -= 1;
//         }
//       } else {
//         slideNum = arrow;
//       }

//       fadeIn(slides[slideNum]);
//       rotator();
//       activeSlideBtn.classList.remove('slider-top__controls-item--active');
//       slideBtns[slideNum].classList.add('slider-top__controls-item--active');
//     }


//     arrowNext.addEventListener('click', function() {
//         animSlide('next');
      
//     });

//     arrowPrev.addEventListener('click', function() {
//       animSlide('prev');
//     });

//     for (var i = 0; i < slideBtns.length; i++) {
//       slideBtns[i].addEventListener('click', function(event) {
//         var el = event.target;
//         el = parseInt(el.textContent); 
//         animSlide(el);
//       });     
//     }   

//     var rotator = function() {
//       if (!pause) {
//         slideTime = setTimeout(function() {
//           animSlide('next');
//         }, hwTimeOut)
//       }
//     }

//     sliderWrap.addEventListener('mouseover', function() {
//       clearTimeout(slideTime);
//       pause = true;
//     });
//     sliderWrap.addEventListener('mouseout', function() {
//       pause = false;
//       rotator();
//     });

//     rotator();
//   })

//   function fadeIn(tag) {

//     var opacity = 0;
//     var timer = setInterval( function() {
      
       
//       opacity += 50 / 1000;
//       tag.style.opacity = opacity;

//       if(opacity >= 1) {
//         clearInterval(timer);   
//       }
//     }, 50)
//   }

//   function fadeOut(tag) {


//     var opacity = 1;
 
//     var timer = setInterval( function() {
       
       
//       opacity -= 50 / 1000
//       tag.style.opacity = opacity;

//       if(opacity <= 0) {
//         clearInterval(timer);    
//       } 
//     }, 50)
//   }
// })();