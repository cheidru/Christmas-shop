const burgerBTN = document.getElementById('burger-btn-container');
const burger = document.getElementById('burger-btn');
const burgerMNU = document.getElementById('burger-menu-container');
const burgerItems = document.getElementById('burger-menu');

const slider = document.getElementById('slider-row');
const sliderLeftBTN = document.querySelector('.left-button');
const sliderRightBTN = document.querySelector('.right-button');

let burgerMNU_ON = false;
let background_Locked = false;
let sliderLeftBTN_ON = false;
let sliderRightBTN_ON = true;
let sliderStrokes = 3;
let sliderPosition = 0;

checkWinWidth();

window.addEventListener('resize', checkWinWidth)
burgerBTN.addEventListener('click', toggleBurgerMNU);
burgerItems.addEventListener('click', toggleBurgerMNU);

sliderLeftBTN.addEventListener('click', () => {
  if(!sliderLeftBTN_ON) return;
})
sliderRightBTN.addEventListener('click', () => {
    if(!sliderRightBTN_ON) return;
})

function toggleBurgerMNU () {
  // Toggle state of burger/cross button and burger menu when clicked
  burger.classList.toggle('cross-btn');
  burgerMNU.classList.toggle('burger-menu-drive-in');
  toggleBackgroundLock();
}

function checkWinWidth () {
  // Adjust behavior depending on screen width
  if(window.innerWidth <= 768 && !burgerMNU_ON) {
    sliderStrokes = 6;
    burgerMNU.style.display = 'flex';
    burger.style.display = 'flex';
    burgerMNU_ON = true;
    console.log('window.innerWidth = ', window.innerWidth, 'checkWinWidth_foo burgerMNU_ON1 = ', burgerMNU_ON);
  } else if (window.innerWidth > 768 && burgerMNU_ON) {
    sliderStrokes = 3;
    toggleBackgroundLock();  
    burgerMNU.style.display = 'none';
    burger.style.display = 'none';
    burgerMNU_ON = false;
    burger.classList.remove('cross-btn');
    burgerMNU.classList.remove('burger-menu-drive-in');
    console.log('window.innerWidth = ', window.innerWidth, 'checkWinWidth_foo burgerMNU_ON2 = ', burgerMNU_ON);
  }
}

function toggleBackgroundLock() {
  // Lock/unlock modal window background
  if(!background_Locked) {
    document.body.style.overflow = 'hidden';
    background_Locked = true;
  } else {
    document.body.style.overflow = 'unset';
    background_Locked = false;
  }
}