const slider = document.getElementById('slider-row');
const sliderLeftBTN = document.getElementById('left-btn');
const sliderRightBTN = document.getElementById('right-btn');
const days = document.getElementById('cta-timer-days');
const hours = document.getElementById('cta-timer-hours');
const minutes = document.getElementById('cta-timer-minutes');
const seconds = document.getElementById('cta-timer-seconds');
const newYearTimeStamp = new Date(2025, 0, 1);

sliderLeftBTN.BTN_ON = false;
sliderRightBTN.BTN_ON = true;
let windowWidth = 1440;
let sliderStrokes = 3;
let sliderPosition = 0;
let sliderWidth = 1993;
let sliderPadding;
let sliderInvisibleWidth;
let giftsQTY = 36;

checkWinWidth();
showFourRandomGifts();
setInterval(ctaTimer, 1000);

window.addEventListener('resize', checkWinWidth)

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

function checkWinWidth () {
  windowWidth = window.innerWidth;
  // Adjust behavior depending on screen width
  if(windowWidth <= 768 && !burgerMNU_ON) {
    sliderStrokes = 6;
    burgerMNU.style.display = 'flex';
    burger.style.display = 'flex';
    burgerMNU_ON = true;
  } else if (windowWidth > 768 && burgerMNU_ON) {
    sliderStrokes = 3;
    toggleBackgroundLock();  
    burgerMNU.style.display = 'none';
    burger.style.display = 'none';
    burgerMNU_ON = false;
    burger.classList.remove('cross-btn');
    burgerMNU.classList.remove('burger-menu-drive-in');
  } 
  if (windowWidth <= 1290) {
    sliderPadding = 16;
  } else {
    sliderPadding = windowWidth - 1276;
  }
  sliderInvisibleWidth = sliderWidth - content.clientWidth + sliderPadding;
  toggleSliderBTN(sliderLeftBTN, 'disable');
  toggleSliderBTN(sliderRightBTN, 'enable');
  sliderPosition = 0;
  slider.style.transform = `translateX(0)`
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

function showFourRandomGifts() {
  let giftSet = [];
  do {
    const index = Math.floor(Math.random() * (giftsQTY));
    if(!giftSet.includes(index)) giftSet.push(index);
  } while(giftSet.length < 4)

  const cards = document.querySelectorAll('.best-gift-card');
  for(let i = 0; i < 4; i++) {
    let cardImage = cards[i].querySelector('img');
    let cardCategory = cards[i].querySelector('.best-gift-card-descr-caption');
    let cardName = cards[i].querySelector('.best-gift-card-descr-text');    
    switch(gifts[giftSet[i]].category) {
      case 'For Work':
        cardImage.src = './assets/img/gift-for-work.png';
        cardImage.setAttribute('alt', `${gifts[giftSet[i]].name} image`);
        cardCategory.innerText = 'for work';
        cardCategory.classList.add('txt-blue');
        cardName.innerText = gifts[giftSet[i]].name;
        break;
      case 'For Health':
        cardImage.src = './assets/img/gift-for-health.png';
        cardImage.setAttribute('alt', `${gifts[giftSet[i]].name} image`);
        cardCategory.innerText = 'for health';
        cardCategory.classList.add('txt-green');
        cardName.innerText = gifts[giftSet[i]].name;
        break;
      case 'For Harmony':
        cardImage.src = './assets/img/gift-for-harmony.png';
        cardImage.setAttribute('alt', `${gifts[giftSet[i]].name} image`);
        cardCategory.innerText = 'for harmony';
        cardCategory.classList.add('txt-purple');
        cardName.innerText = gifts[giftSet[i]].name;
        break;
    }
  }
}
