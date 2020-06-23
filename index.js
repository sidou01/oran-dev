/* deps: tailwindcss, typed, jquery */

$(document).ready(function() {
  $('.services-main-header').hover(
    function() {
      $('.text-blue').css('color', 'black');
    },
    function() {
      $('.text-blue').css('color', '#18A0FB');
    },
  );
  $('.services-main-header').hover(
    function() {
      $('.services-header-blue-hover').css('color', '#18A0FB');
    },
    function() {
      $('.services-header-blue-hover').css('color', 'black');
    },
  );
});

const options = {
  strings: [
    '<span class="cta-text-blue">Oran</span> <span class="cta-primary-header-color2">Dev <span class="cta-primary-header-color3">Solutions</span>',
    'Development <span class="cta-text-blue">Web</span>',
    'Developement <span class="cta-primary-header-color2">Mobile</span>',
    'Design et <span class="cta-primary-header-color3">Prototyping</span>',
    '<span class="cta-text-blue">Oran</span> <span class="cta-primary-header-color2">Dev <span class="cta-primary-header-color3">Solutions</span>',
  ],
  typeSpeed: 80,
  showCursor: false,
  startDelay: 1000,
};

var typed = new Typed('.cta-primary-header', options);
