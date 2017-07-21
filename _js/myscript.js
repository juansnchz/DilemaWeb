

$(function() {
  
  
  
  var topoffset = 50 //var para la altura del menú
  var slideqty = $('#home .item').length;
  var wheight = $(window).height();
  
   $('.fullheight').css('height', wheight); //set to window tallness  
  
   $('.carousel').carousel({
    pause: false
  });
  
  //Reemplazar las imágenes del carrusel volviéndolas background images
  $('#home .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //Ajustar la altura de los elementos con clase .fullheight cuando se cambia el viewport
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });
  
  
  
  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });
  
  
  // Tiempo en el que el carrusel cambia de foto
  $('.carousel').carousel({
    interval: 500
  });
  
  
 //Al hacer click en el navbar, se desliza hacia la sección correspondiente
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
 
  
  
//Generar los indicadores del carrusel
  
 for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#home" data-slide-to="' + i + '"></li>';
    $('#home ol').append(insertText);
  }


  
});

