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

  /*========Info-box__dropdown=======*/
  $(".info-box__menu").on("click", function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).next().fadeIn();
  });

  $(document).mouseup(function (e) {
      var dropdown = $(".info-box__dropdown");
      if (dropdown.has(e.target).length === 0 ){
 
    
              dropdown.fadeOut(111);
          
          $(".info-box__menu").removeClass('active');
          $('.info-box').removeClass('sh');
      }    
 
  });
  
  
    $(".info-box__menu").on("click", function(event) {
      $(this).parent().addClass('sh');
      event.preventDefault();
      $(this).addClass('active');
      $(this).next().fadeIn(222);
  });
  /*========/info-box__dropdown=======*/

    /*=====Add-file=======*/
  var dropZone = $('.add-container');

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
  });

  dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
  });

  dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
  });

  $('#file-input').change(function() {
     let files = this.files;
     sendFiles(files);
  });

  function sendFiles(files) {
     let maxFileSize = 5242880;
     let Data = new FormData();
     $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
               Data.append('images[]', file);
          }
     });
};
  /*=====/add-file=======*/


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
 