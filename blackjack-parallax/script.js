$(window).scroll(function(e){
  parallax();
});

//PARALLAX FUNCTION
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.3)+'px');
}

//NOT THE MOST EFFICIENT PARALLAX, BUT SIMPLE
