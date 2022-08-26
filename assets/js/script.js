$(document).ready(function() {

  /*======Header-menu (dropdown)=============*/
  $(".header__drop").hover( function(event) {
    event.preventDefault();
    if ($(window).width() >= 1141){
      $(this).toggleClass("dropdown");
      $(this).find(".header__dropdown").fadeToggle(222);   
    }
  });
  $(".header__drop").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 1140){
      $(this).toggleClass("dropdown");
      $(this).find(".header__dropdown").slideToggle();   
      $(".header__drop").not(this).find(".header__dropdown").slideUp();   
      $(".header__drop").not(this).removeClass('dropdown');   
    }
  });
  /*==========/header-menu (dropdown)=========*/

  /*========Header-search (dropdown)=========*/
  $(".header__btn-search").on("click", function(event) {
    event.preventDefault();
      $(".header-search").toggleClass('show');   
  });

  $(".header-search__close").on("click", function() {
      $(".header-search").removeClass('show');   
  });
  /*========/header-search (dropdown)=========*/


  /*========Header__menu-mobile=========*/
  $(".burger").on("click", function(event) {
    event.preventDefault();
      $(".header__menu-mobile").toggleClass('show'); 
      $('body').addClass('hidden'); 
  });

  $(".header__menu-mobile__close").on("click", function() {
      $(".header__menu-mobile").removeClass('show');
      $('body').removeClass('hidden');   
  });
  /*========/header__menu-mobile=========*/

  /*=========Calendar===========*/
  $(".calendar-box__day.available").on("click", function() {
      $(this).addClass('checked');
      $(".calendar-box__day").not(this).removeClass('checked');
  });

    $('.calendar-box__day.available').on("click", function() {
      $(this).addClass('checked');
      $(".calendar-box__day").not(this).removeClass('checked');
      $('.calendar-time__wrapper').hide();
      $('.calendar-time__wrapper').hide().removeClass('checked');
      $('.calendar-time__wrapper.'+$(this).attr('data-day')).fadeIn(222);
    });

  /*=========/calendar===========*/


    /*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

  /*============Sliders============*/
  $('.calendar-box__inner').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.calendar-box__arrow_prev'),
    nextArrow: $('.calendar-box__arrow_next'),
  });
  /*============/sliders============*/

});
 