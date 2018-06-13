$(document).ready(function () {

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 60
    }, 1500);

  });

  $(window).scroll(function () {
    return $('nav, .social-fixed').toggleClass("fixed", $(window).scrollTop() > $('.head').height());
  });

  $('.section_1').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    offset: '100%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
    repeat: true, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function (elem, action) {
      $('.section_2').removeClass('visible');
      $('.section_1').removeClass('fixbottom');
    }
  });
  $('.section_1 .container').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    offset: '0%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
    repeat: true, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function (elem, action) {
      $('.section_2').removeClass('visible');
      $('.section_1').removeClass('fixbottom');
    }
  });

  $('.section_2').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    offset: '100%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
    repeat: true, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function (elem, action) {
      $('.section_1').removeClass('visible');
      $('.section_1').addClass('fixbottom');
      $('.section_2').removeClass('fixbottom');
    }
  });

  $('.section_2 .container').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    offset: '0%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
    repeat: true, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function (elem, action) {
      $('.section_1').removeClass('visible');
      $('.section_1').addClass('fixbottom');
    }
  });


  $('.how_it_works').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    offset: '0%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
    repeat: true, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function (elem, action) {
      $('.section_2').removeClass('visible');
      $('.section_2').addClass('fixbottom');
    }
  });
  
      var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: '4334f407e89e4cafad556fd01034b1ab'
    });
    feed.run();
  

});