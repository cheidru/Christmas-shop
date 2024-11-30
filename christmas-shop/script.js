const content = document.getElementById('content-wrapper');

const burgerBTN = document.getElementById('burger-btn-container');
const burger = document.getElementById('burger-btn');
const burgerMNU = document.getElementById('burger-menu-container');
const burgerItems = document.getElementById('burger-menu');

const slider = document.getElementById('slider-row');
const sliderLeftBTN = document.getElementById('left-btn');
const sliderRightBTN = document.getElementById('right-btn');

const days = document.getElementById('cta-timer-days');
const hours = document.getElementById('cta-timer-hours');
const minutes = document.getElementById('cta-timer-minutes');
const seconds = document.getElementById('cta-timer-seconds');

const newYearTimeStamp = new Date(2025, 0, 1);

let burgerMNU_ON = false;
let background_Locked = false;

sliderLeftBTN.BTN_ON = false;
sliderRightBTN.BTN_ON = true;
let sliderStrokes = 3;
let sliderPosition = 0;
let sliderWidth = 1993;
let sliderInvisibleWidth = sliderWidth - 1440 + 16;

checkWinWidth();
setInterval(ctaTimer, 1000);

window.addEventListener('resize', checkWinWidth)
burgerBTN.addEventListener('click', toggleBurgerMNU);
burgerItems.addEventListener('click', toggleBurgerMNU);



sliderLeftBTN.addEventListener('click', () => {
  if(!sliderLeftBTN.BTN_ON) return;
  sliderPosition--;
  if(sliderPosition === 0) toggleSliderBTN(sliderLeftBTN, 'disable');
  if(sliderPosition === sliderStrokes - 1) toggleSliderBTN(sliderRightBTN, 'enable');
  slider.style.transform = `translateX(-${(sliderInvisibleWidth / (sliderStrokes)) * sliderPosition}px)`;
})

sliderRightBTN.addEventListener('click', () => {
  if(!sliderRightBTN.BTN_ON) return;
  sliderPosition++;
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
  } else if (window.innerWidth > 768 && burgerMNU_ON) {
    sliderStrokes = 3;
    toggleBackgroundLock();  
    burgerMNU.style.display = 'none';
    burger.style.display = 'none';
    burgerMNU_ON = false;
    burger.classList.remove('cross-btn');
    burgerMNU.classList.remove('burger-menu-drive-in');
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
  if(action === 'disable') {
    BTN.BTN_ON = false;
    BTN.classList.remove('slider-button-active');
  } else if (action === 'enable') {
    BTN.BTN_ON = true;
    BTN.classList.add('slider-button-active');
  }  
}

function ctaTimer() {
  // new Date(year, month, date, hours, minutes, seconds, ms)
  const timeStampNow = new Date();
  const timeLeft = newYearTimeStamp - timeStampNow;
  const daysLeft = Math.floor(timeLeft / ( 60 * 60 * 24 * 1000));
  const hoursLeft = Math.floor((timeLeft % ( 60 * 60 * 24 * 1000)) / ( 60 * 60 * 1000));
  const minutesLeft = Math.floor((timeLeft % ( 60 * 60 * 1000)) / ( 60 * 1000));
  const secondsLeft = Math.floor((timeLeft % ( 60 * 1000)) / 1000);
  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  minutes.innerText = minutesLeft;
  seconds.innerText = secondsLeft;
}