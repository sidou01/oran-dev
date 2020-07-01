/* deps: tailwindcss, typed */
/* header colors */

function changeColor(el) {
  let firstNode = el.childNodes[1];
  let secondNode = el.childNodes[3];

  firstNode.style.color = 'black';
  secondNode.style.color = '#18A0FB';
}

function resetColor(el) {
  let firstNode = el.childNodes[1];
  let secondNode = el.childNodes[3];

  firstNode.style.color = '#18A0FB';
  secondNode.style.color = 'black';
}

const options = {
  strings: [
    '<span class="cta-text-blue">Oran</span> <span class="cta-primary-header-color2"> Dev <span class="cta-primary-header-color3">Solutions</span>',
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
