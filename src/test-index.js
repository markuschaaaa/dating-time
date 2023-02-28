const stucture = `
   <div class="timer">
      <div class="timer__items">
         <div class="timer__item timer__days">00</div>
         <div class="timer__item timer__hours">00</div>
         <div class="timer__item timer__minutes">00</div>
         <div class="timer__item timer__seconds">00</div>
      </div>
      <div class="timer__titels">
         <div class="timer__titel">Days</div>
         <div class="timer__titel">Hours</div>
         <div class="timer__titel">Minutes</div>
         <div class="timer__titel">Seconds</div>
      </div>
   </div>
`
const body = document.querySelector('body');

function createMainContainer(){
   const title = document.createElement('div');
   const mainCont = document.createElement('div');
   const dates = document.createElement('div');
   title.classList.add('main-title')
   mainCont.classList.add('main-container')
   dates.classList.add('dates')
   title.innerHTML = `We've been dating for:`
   dates.innerHTML = `Click on me`
   body.append(title)
   body.append(mainCont)
   body.append(dates)
}

function createMainWrapper(){
   const mainCont = document.querySelector('.main-container');
   const mainWrapp = document.createElement('div');
   mainWrapp.classList.add('main-wrapper')
   mainCont.append(mainWrapp)
}

function createNumWrapper(){
   const mainCont = document.querySelector('.main-wrapper')
   mainCont.innerHTML = stucture
}

function createPopUp(){
   const popUpWrapper = document.createElement('div');
   const popUpContainer = document.createElement('div');
   const popUpOverlay = document.createElement('div');

   popUpWrapper.classList.add('popup-wrapper')
   popUpContainer.classList.add('popup-container')
   popUpOverlay.classList.add('popup-overlay')
   popUpContainer.innerHTML = `
   <div class="timers">
      <div class="timers__items">
         <div class="timers__item timers__days">00</div>
         <div class="timers__item timers__hours">00</div>
         <div class="timers__item timers__minutes">00</div>
         <div class="timers__item timers__seconds">00</div>
      </div>
      <div class="timers__titels">
         <div class="timers__titel">Days</div>
         <div class="timers__titel">Hours</div>
         <div class="timers__titel">Minutes</div>
         <div class="timers__titel">Seconds</div>
      </div>
   </div>
`
   body.append(popUpWrapper)
   popUpWrapper.append(popUpOverlay)
   popUpWrapper.append(popUpContainer)
}

function openClosePopup() {
   const popUpButton = document.querySelector('.dates');
   const popupWrapper = document.querySelector('.popup-wrapper')
   const popUpOverlay = document.querySelector('.popup-overlay')
   popUpButton.addEventListener('click', ()=>{
      popupWrapper.classList.add('popup-wrapper-open')
   })
   popUpOverlay.addEventListener('click', ()=>{
      popupWrapper.classList.remove('popup-wrapper-open')
   })
}

function setTimer(deadline){
  document.addEventListener('DOMContentLoaded', function() {
  
  let timerId = null;
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = new Date() - deadline;
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

}

function setPopUpTimer(deadline){
  document.addEventListener('DOMContentLoaded', function() {
  
  let timerId = null;
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timers__days');
  const $hours = document.querySelector('.timers__hours');
  const $minutes = document.querySelector('.timers__minutes');
  const $seconds = document.querySelector('.timers__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

}
export {createMainContainer, createMainWrapper, createNumWrapper, setTimer, createPopUp, openClosePopup, setPopUpTimer}