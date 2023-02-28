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
// POPUP
function createPopUp(){
   const popUpWrapper = document.createElement('div');
   const popUpContainer = document.createElement('div');
   const popUpOverlay = document.createElement('div');
   const popUpButtonWrap = document.createElement('div');
   const popUpButtonInhalt = `
      <ul class="popup__list">
         <li class="popup__list-item">Month</li>
         <li class="popup__list-item">Year</li>
         <li class="popup__list-item">B-Date-1(100d)</li>
         <li class="popup__list-item">B-Date-2(200d)</li>
         <li class="popup__list-item">B-Date-3(1000d)</li>
         <li class="popup__list-item">The End</li>
      </ul>
   `

   popUpWrapper.classList.add('popup-wrapper')
   popUpContainer.classList.add('popup-container')
   popUpOverlay.classList.add('popup-overlay')
   popUpButtonWrap.classList.add('popup-button-wrap')
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
   popUpButtonWrap.innerHTML = popUpButtonInhalt
   popUpContainer.append(popUpButtonWrap)
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


// TIMER ON MAIN PAGE
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
//   POPUP TIMER
let deadline ;
function setPopUpTimer(){
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
}

// SET POPUP DATES
function setPopupDates() {
   const listItem = document.querySelectorAll('.popup__list-item')
   listItem.forEach((e, index)=>{
      e.addEventListener('click', ()=>{
         setPopUpTimer(new Date(2023, 1, 31, 20, 0, 0, 0))
         if(index === 0){
            deadline = new Date(2023, 1, 31, 20, 0, 0, 0)
         }else if(index === 1){
            deadline = new Date(2024, 0, 31, 20, 0, 0, 0)
         }else if(index === 2){
            deadline = new Date(2023, 4, 11, 20, 0, 0, 0)
         }else if(index === 3){
            deadline = new Date(2023, 7, 19, 20, 0, 0, 0)
         }else if(index === 4){
            deadline = new Date(2025, 9, 27, 20, 0, 0, 0)
         }else if(index === 5){
            alert('не будет зи энда никакого')
         }
      });
   })
}
export {createMainContainer, createMainWrapper, createNumWrapper, setTimer, createPopUp, openClosePopup, setPopupDates}