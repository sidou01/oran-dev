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

function burgerClicked() {
  const checkbox = document.querySelector('.toggler');
  const header = document.querySelector('.top-header');
  const body = document.querySelector('body');
  const navElements = document.getElementsByClassName('nav-link');
  const nav = document.getElementsByClassName('navigation');

  // if (checkbox.checked) {
  //   body.style.position = 'fixed';
  // } else {
  //   body.style.position = static;
  // }

  for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', () => {
      checkbox.checked = false;
    });
  }
  /* animation */
}

const options = {
  strings: [
    'Development Web',
    'Development Mobile',
    'Design and Prototyping',
    'An amazing experience with an amazing team',
  ],
  typeSpeed: 80,
  showCursor: false,
  startDelay: 1000,
};

var typed = new Typed('.cta-primary-header', options);
