$(document).ready(function () {

  $('.program-btn, .nav-button').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

  });

  $(window).scroll(function () {
    return $('nav, .social-fixed').toggleClass("fixed", $(window).scrollTop() > $('.head').height());
  });

  if ($(window).width() > 1200) {

    setTimeout(function () {
      $('.reviews-item').css({
        'max-height': $('.reviews-img').height(),
      })

    }, 1000)
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

  }

  $('.about-carousel').owlCarousel({
    center: true,
    nav: true,
    items: 4,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 4
      },
      1900: {
        items: 6
      },
    }
  });
  $('.reviews-carousel').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    margin: 5,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(400);
  });

  $('.order-btn').click(function () {
    $('#reg input[name="orderType"]').val('Nastya_Nass_' + $(this).parents('.programs-item').find('h4 span').text());
    $('#reg h4').text($(this).parents('.programs-item').find('h4').text());
  })



  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="page_url"]').val(window.location.hostname);

  $('input[name="ref"]').val(document.referrer);
  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city + ' | ' + response.region + ' | ' + response.country);
    $('input[name="country"]').val();
    $('input[name="region"]').val();
  }, "jsonp");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);

  /*db/registration.php*/

  /* form valid*/
  var alertImage = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('span').append('<div class="allert"><p>Enter your best e-mail</p>' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('span').append('<div class="allert"><p>Enter the phone number in the format +3809999999</p>' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
          }
        } else if ($(this).attr("name") == 'mess') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('span').append('<div class="allert"><p>Wright your questuion</p>' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
          }
        } else {
          $(this).addClass('error').parent('span').append('<div class="allert"><p>Fill in the field</p>' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
        }
        return;
      } else {
        error = 0;
        $(this).addClass('error').parent('span').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  /*end form valid*/


  $('form').on('submit', function (e) {
    e.preventDefault();
    $('.submit').addClass('inactive');
    $('.submit').prop('disabled', true);
    var $form = $(this);
    var $data = $form.find('input, textarea, select');
    $.ajax({
      type: 'POST',
      url: 'db/registration.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });



    setTimeout(function () {
      window.location.href = "success.html";
    }, 1000);

  });

});