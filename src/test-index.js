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

function createMainContainer(){
   const body = document.querySelector('body');
   const title = document.createElement('div');
   const mainCont = document.createElement('div');
   title.classList.add('main-title')
   mainCont.classList.add('main-container')
   title.innerHTML = `We've been dating for:`
   body.append(title)
   body.append(mainCont)
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
function setTimer(){
  document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date(2023, 0, 31);
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
export {createMainContainer, createMainWrapper, createNumWrapper, setTimer}