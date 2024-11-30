const burgerBTN = document.getElementById('burger-btn-container');
const burger = document.getElementById('burger-btn');
const burgerMNU = document.getElementById('burger-menu-container');
const burgerItems = document.getElementById('burger-menu');

const slider = document.getElementById('slider-row');
const sliderLeftBTN = document.getElementById('left-btn');
const sliderRightBTN = document.getElementById('right-btn');

const content = document.getElementById('content-wrapper');

let burgerMNU_ON = false;
let background_Locked = false;

sliderLeftBTN.BTN_ON = false;
sliderRightBTN.BTN_ON = true;
let sliderStrokes = 3;
let sliderPosition = 0;
let sliderWidth = 1993;
let sliderInvisibleWidth = sliderWidth - 1440 + 16;

checkWinWidth();

window.addEventListener('resize', checkWinWidth)
burgerBTN.addEventListener('click', toggleBurgerMNU);
burgerItems.addEventListener('click', toggleBurgerMNU);



sliderLeftBTN.addEventListener('click', () => {
  if(!sliderLeftBTN.BTN_ON) return;
  sliderPosition--;
  console.log('нажата левая кнопка', 'sliderPosition = ', sliderPosition, 'sliderStrokes = ', sliderStrokes);
  if(sliderPosition === 0) toggleSliderBTN(sliderLeftBTN, 'disable');
  if(sliderPosition === sliderStrokes - 1) toggleSliderBTN(sliderRightBTN, 'enable');
  slider.style.transform = `translateX(-${(sliderInvisibleWidth / (sliderStrokes)) * sliderPosition}px)`;
})

sliderRightBTN.addEventListener('click', () => {
  if(!sliderRightBTN.BTN_ON) return;
  sliderPosition++;
  console.log('нажата правая кнопка', 'sliderPosition = ', sliderPosition, 'sliderStrokes = ', sliderStrokes);
  if(sliderPosition === sliderStrokes) toggleSliderBTN(sliderRightBTN, 'disable');
  if(sliderPosition === 1) toggleSliderBTN(sliderLeftBTN, 'enable');
  slider.style.transform = `translateX(-${(sliderInvisibleWidth / (sliderStrokes)) * sliderPosition}px)`;  
})

function toggleBurgerMNU () {
  // Toggle state of burger/cross button and burger menu when clicked
  burger.classList.toggle('cross-btn');
  burgerMNU.classList.toggle('burger-menu-drive-in');
  toggleBackgroundLock();
}

function checkWinWidth () {
  sliderInvisibleWidth = sliderWidth - content.clientWidth + 16;
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
  toggleSliderBTN(sliderLeftBTN, 'disable');
  toggleSliderBTN(sliderRightBTN, 'enable');
  sliderPosition = 0;
  slider.style.transform = `translateX(0)`
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

function toggleSliderBTN(BTN, action) {
  console.log('toggleSliderBTN enacted');
  if(action === 'disable') {
    BTN.BTN_ON = false;
    BTN.classList.remove('slider-button-active');
  } else if (action === 'enable') {
    BTN.BTN_ON = true;
    BTN.classList.add('slider-button-active');
  }  
}