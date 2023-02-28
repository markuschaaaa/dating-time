/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test-index.js":
/*!***************************!*\
  !*** ./src/test-index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainContainer": () => (/* binding */ createMainContainer),
/* harmony export */   "createMainWrapper": () => (/* binding */ createMainWrapper),
/* harmony export */   "createNumWrapper": () => (/* binding */ createNumWrapper),
/* harmony export */   "createPopUp": () => (/* binding */ createPopUp),
/* harmony export */   "openClosePopup": () => (/* binding */ openClosePopup),
/* harmony export */   "setPopupDates": () => (/* binding */ setPopupDates),
/* harmony export */   "setTimer": () => (/* binding */ setTimer)
/* harmony export */ });
var stucture = "\n   <div class=\"timer\">\n      <div class=\"timer__items\">\n         <div class=\"timer__item timer__days\">00</div>\n         <div class=\"timer__item timer__hours\">00</div>\n         <div class=\"timer__item timer__minutes\">00</div>\n         <div class=\"timer__item timer__seconds\">00</div>\n      </div>\n      <div class=\"timer__titels\">\n         <div class=\"timer__titel\">Days</div>\n         <div class=\"timer__titel\">Hours</div>\n         <div class=\"timer__titel\">Minutes</div>\n         <div class=\"timer__titel\">Seconds</div>\n      </div>\n   </div>\n";
var body = document.querySelector('body');
function createMainContainer() {
  var title = document.createElement('div');
  var mainCont = document.createElement('div');
  var dates = document.createElement('div');
  title.classList.add('main-title');
  mainCont.classList.add('main-container');
  dates.classList.add('dates');
  title.innerHTML = "We've been dating for:";
  dates.innerHTML = "Click on me";
  body.append(title);
  body.append(mainCont);
  body.append(dates);
}
function createMainWrapper() {
  var mainCont = document.querySelector('.main-container');
  var mainWrapp = document.createElement('div');
  mainWrapp.classList.add('main-wrapper');
  mainCont.append(mainWrapp);
}
function createNumWrapper() {
  var mainCont = document.querySelector('.main-wrapper');
  mainCont.innerHTML = stucture;
}
// POPUP
function createPopUp() {
  var popUpWrapper = document.createElement('div');
  var popUpContainer = document.createElement('div');
  var popUpOverlay = document.createElement('div');
  var popUpButtonWrap = document.createElement('div');
  var popUpButtonInhalt = "\n      <ul class=\"popup__list\">\n         <li class=\"popup__list-item\">Month</li>\n         <li class=\"popup__list-item\">Year</li>\n         <li class=\"popup__list-item\">B-Date-1(100d)</li>\n         <li class=\"popup__list-item\">B-Date-2(200d)</li>\n         <li class=\"popup__list-item\">B-Date-3(1000d)</li>\n         <li class=\"popup__list-item\">The End</li>\n      </ul>\n   ";
  popUpWrapper.classList.add('popup-wrapper');
  popUpContainer.classList.add('popup-container');
  popUpOverlay.classList.add('popup-overlay');
  popUpButtonWrap.classList.add('popup-button-wrap');
  popUpContainer.innerHTML = "\n   <div class=\"timers\">\n      <div class=\"timers__items\">\n         <div class=\"timers__item timers__days\">00</div>\n         <div class=\"timers__item timers__hours\">00</div>\n         <div class=\"timers__item timers__minutes\">00</div>\n         <div class=\"timers__item timers__seconds\">00</div>\n      </div>\n      <div class=\"timers__titels\">\n         <div class=\"timers__titel\">Days</div>\n         <div class=\"timers__titel\">Hours</div>\n         <div class=\"timers__titel\">Minutes</div>\n         <div class=\"timers__titel\">Seconds</div>\n      </div>\n   </div>\n";
  popUpButtonWrap.innerHTML = popUpButtonInhalt;
  popUpContainer.append(popUpButtonWrap);
  body.append(popUpWrapper);
  popUpWrapper.append(popUpOverlay);
  popUpWrapper.append(popUpContainer);
}
function openClosePopup() {
  var popUpButton = document.querySelector('.dates');
  var popupWrapper = document.querySelector('.popup-wrapper');
  var popUpOverlay = document.querySelector('.popup-overlay');
  popUpButton.addEventListener('click', function () {
    popupWrapper.classList.add('popup-wrapper-open');
  });
  popUpOverlay.addEventListener('click', function () {
    popupWrapper.classList.remove('popup-wrapper-open');
  });
}

// TIMER ON MAIN PAGE
function setTimer(deadline) {
  document.addEventListener('DOMContentLoaded', function () {
    var timerId = null;
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      var diff = new Date() - deadline;
      var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    // получаем элементы, содержащие компоненты даты
    var $days = document.querySelector('.timer__days');
    var $hours = document.querySelector('.timer__hours');
    var $minutes = document.querySelector('.timer__minutes');
    var $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
}
//   POPUP TIMER
var deadline;
function setPopUpTimer() {
  var timerId = null;
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    var diff = deadline - new Date();
    var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  // получаем элементы, содержащие компоненты даты
  var $days = document.querySelector('.timers__days');
  var $hours = document.querySelector('.timers__hours');
  var $minutes = document.querySelector('.timers__minutes');
  var $seconds = document.querySelector('.timers__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
}

// SET POPUP DATES
function setPopupDates() {
  var listItem = document.querySelectorAll('.popup__list-item');
  listItem.forEach(function (e, index) {
    e.addEventListener('click', function () {
      setPopUpTimer(new Date(2023, 1, 31, 20, 0, 0, 0));
      if (index === 0) {
        deadline = new Date(2023, 1, 31, 20, 0, 0, 0);
      } else if (index === 1) {
        deadline = new Date(2024, 0, 31, 20, 0, 0, 0);
      } else if (index === 2) {
        deadline = new Date(2023, 4, 11, 20, 0, 0, 0);
      } else if (index === 3) {
        deadline = new Date(2023, 7, 19, 20, 0, 0, 0);
      } else if (index === 4) {
        deadline = new Date(2025, 9, 27, 20, 0, 0, 0);
      } else if (index === 5) {
        alert('не будет зи энда никакого');
      }
    });
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n   font-family: 'Oswald', sans-serif;\r\n}\r\nbody{\r\n   background: rgb(255,204,0);\r\n   height: 100vh;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\n.main-container{\r\n   margin: 0px auto;\r\n}\r\n.main-wrapper{\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   margin: 0px auto;\r\n   width: 600px;\r\n   height: 400px;\r\n   background-color: rgb(255, 255, 255);\r\n   border-radius: 20px;\r\n}\r\n.timer{\r\n   width: 100%;\r\n   margin: 0px auto;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n.timer__items{\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.main-title{\r\n   font-weight: 700;\r\n   font-size: 36px;\r\n   margin-bottom: 20px;\r\n}\r\n.dates{\r\n   font-weight: 700;\r\n   font-size: 36px;\r\n   margin-top: 20px;\r\n   cursor: pointer;\r\n}\r\n.timer__titels{\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.timer__titel:nth-child(1){\r\n   padding-left: 13px;\r\n}\r\n.timer__titel:nth-child(2) {\r\n   padding-left: 20px;\r\n}\r\n.timer__titel:nth-child(3) {\r\n   padding-left: 13px;\r\n}\r\n.timer__item{\r\n   font-weight: 700;\r\n   font-size: 48px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n   body{\r\n      display: flex;\r\n   }\r\n   .main-wrapper{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 0px auto;\r\n      width: 300px;\r\n      height: 500px;\r\n      margin: 30px 40px 0px 40px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n      padding: 0px 20px;\r\n   }\r\n   .timer{\r\n      height: 100%;\r\n      margin: 0px auto;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: row;\r\n      align-items: center;                                       \r\n   }\r\n   .timer__items{\r\n      height: 100%;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: column;\r\n   }\r\n   .timer__titels{\r\n      height: 100%;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: column;\r\n   }\r\n   .timer__item {\r\n      font-weight: 700;\r\n      font-size: 36px;\r\n   }\r\n   .main-title {\r\n      padding-left: 50px;\r\n      font-weight: 700;\r\n      font-size: 36px;\r\n      margin-bottom: 20px;\r\n   }\r\n}\r\n\r\n@media (max-width: 480px){\r\n   .main-wrapper{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 0px auto;\r\n      width: 260px;\r\n      height: 400px;\r\n      margin: 30px 40px 0px 40px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n      padding: 0px 20px;\r\n   }\r\n}\r\n/* POPUP */\r\n.popup-wrapper{\r\n   visibility: hidden;\r\n   position: fixed;\r\n   display: flex;\r\n   align-items: center;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   \r\n}\r\n.popup-wrapper-open{\r\n   visibility: visible;\r\n}\r\n.popup-container{\r\n   position: relative;\r\n   display: flex;\r\n   justify-content: space-around;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   width: 600px;\r\n   height: 600px;\r\n   margin: 0px auto;\r\n   background: rgb(222, 219, 219);\r\n   border-radius: 30px;\r\n   z-index: 1;\r\n}\r\n.popup-overlay{\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 102%;\r\n   background: #000;\r\n   opacity: 0.7;\r\n   z-index: 0;\r\n}\r\n\r\n\r\n.timers {\r\n   width: 100%;\r\n   margin: 0px auto;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.timers__items {\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.timers__titels {\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n\r\n.timers__titel:nth-child(1) {\r\n   padding-left: 13px;\r\n}\r\n\r\n.timers__titel:nth-child(2) {\r\n   padding-left: 20px;\r\n}\r\n\r\n.timers__titel:nth-child(3) {\r\n   padding-left: 13px;\r\n}\r\n\r\n.timers__item {\r\n   font-weight: 700;\r\n   font-size: 48px;\r\n}\r\n\r\n/* POPUS BUTTON LIST */\r\n.popup-button-wrap {\r\n   width: 400px;\r\n   height: 200px;\r\n   background: rgb(255, 204, 0);\r\n   border-radius: 10px;\r\n}\r\n\r\n.popup__list-item{\r\n   cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;GACG,iCAAiC;AACpC;AACA;GACG,0BAA0B;GAC1B,aAAa;GACb,aAAa;GACb,sBAAsB;GACtB,uBAAuB;GACvB,mBAAmB;AACtB;AACA;GACG,gBAAgB;AACnB;AACA;GACG,aAAa;GACb,uBAAuB;GACvB,mBAAmB;GACnB,gBAAgB;GAChB,YAAY;GACZ,aAAa;GACb,oCAAoC;GACpC,mBAAmB;AACtB;AACA;GACG,WAAW;GACX,gBAAgB;GAChB,aAAa;GACb,sBAAsB;AACzB;AACA;GACG,aAAa;GACb,6BAA6B;AAChC;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,mBAAmB;AACtB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,gBAAgB;GAChB,eAAe;AAClB;AACA;GACG,aAAa;GACb,6BAA6B;AAChC;AACA;GACG,kBAAkB;AACrB;AACA;GACG,kBAAkB;AACrB;AACA;GACG,kBAAkB;AACrB;AACA;GACG,gBAAgB;GAChB,eAAe;AAClB;;AAEA;GACG;MACG,aAAa;GAChB;GACA;MACG,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,gBAAgB;MAChB,YAAY;MACZ,aAAa;MACb,0BAA0B;MAC1B,oCAAoC;MACpC,mBAAmB;MACnB,iBAAiB;GACpB;GACA;MACG,YAAY;MACZ,gBAAgB;MAChB,aAAa;MACb,6BAA6B;MAC7B,mBAAmB;MACnB,mBAAmB;GACtB;GACA;MACG,YAAY;MACZ,aAAa;MACb,6BAA6B;MAC7B,sBAAsB;GACzB;GACA;MACG,YAAY;MACZ,aAAa;MACb,6BAA6B;MAC7B,sBAAsB;GACzB;GACA;MACG,gBAAgB;MAChB,eAAe;GAClB;GACA;MACG,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,mBAAmB;GACtB;AACH;;AAEA;GACG;MACG,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,gBAAgB;MAChB,YAAY;MACZ,aAAa;MACb,0BAA0B;MAC1B,oCAAoC;MACpC,mBAAmB;MACnB,iBAAiB;GACpB;AACH;AACA,UAAU;AACV;GACG,kBAAkB;GAClB,eAAe;GACf,aAAa;GACb,mBAAmB;GACnB,MAAM;GACN,OAAO;GACP,WAAW;GACX,YAAY;;AAEf;AACA;GACG,mBAAmB;AACtB;AACA;GACG,kBAAkB;GAClB,aAAa;GACb,6BAA6B;GAC7B,sBAAsB;GACtB,mBAAmB;GACnB,YAAY;GACZ,aAAa;GACb,gBAAgB;GAChB,8BAA8B;GAC9B,mBAAmB;GACnB,UAAU;AACb;AACA;GACG,kBAAkB;GAClB,MAAM;GACN,OAAO;GACP,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,YAAY;GACZ,UAAU;AACb;;;AAGA;GACG,WAAW;GACX,gBAAgB;GAChB,aAAa;GACb,sBAAsB;AACzB;;AAEA;GACG,aAAa;GACb,6BAA6B;AAChC;AACA;GACG,aAAa;GACb,6BAA6B;AAChC;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,gBAAgB;GAChB,eAAe;AAClB;;AAEA,sBAAsB;AACtB;GACG,YAAY;GACZ,aAAa;GACb,4BAA4B;GAC5B,mBAAmB;AACtB;;AAEA;GACG,eAAe;AAClB","sourcesContent":["*{\r\n   font-family: 'Oswald', sans-serif;\r\n}\r\nbody{\r\n   background: rgb(255,204,0);\r\n   height: 100vh;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\n.main-container{\r\n   margin: 0px auto;\r\n}\r\n.main-wrapper{\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   margin: 0px auto;\r\n   width: 600px;\r\n   height: 400px;\r\n   background-color: rgb(255, 255, 255);\r\n   border-radius: 20px;\r\n}\r\n.timer{\r\n   width: 100%;\r\n   margin: 0px auto;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n.timer__items{\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.main-title{\r\n   font-weight: 700;\r\n   font-size: 36px;\r\n   margin-bottom: 20px;\r\n}\r\n.dates{\r\n   font-weight: 700;\r\n   font-size: 36px;\r\n   margin-top: 20px;\r\n   cursor: pointer;\r\n}\r\n.timer__titels{\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.timer__titel:nth-child(1){\r\n   padding-left: 13px;\r\n}\r\n.timer__titel:nth-child(2) {\r\n   padding-left: 20px;\r\n}\r\n.timer__titel:nth-child(3) {\r\n   padding-left: 13px;\r\n}\r\n.timer__item{\r\n   font-weight: 700;\r\n   font-size: 48px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n   body{\r\n      display: flex;\r\n   }\r\n   .main-wrapper{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 0px auto;\r\n      width: 300px;\r\n      height: 500px;\r\n      margin: 30px 40px 0px 40px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n      padding: 0px 20px;\r\n   }\r\n   .timer{\r\n      height: 100%;\r\n      margin: 0px auto;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: row;\r\n      align-items: center;                                       \r\n   }\r\n   .timer__items{\r\n      height: 100%;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: column;\r\n   }\r\n   .timer__titels{\r\n      height: 100%;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      flex-direction: column;\r\n   }\r\n   .timer__item {\r\n      font-weight: 700;\r\n      font-size: 36px;\r\n   }\r\n   .main-title {\r\n      padding-left: 50px;\r\n      font-weight: 700;\r\n      font-size: 36px;\r\n      margin-bottom: 20px;\r\n   }\r\n}\r\n\r\n@media (max-width: 480px){\r\n   .main-wrapper{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 0px auto;\r\n      width: 260px;\r\n      height: 400px;\r\n      margin: 30px 40px 0px 40px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n      padding: 0px 20px;\r\n   }\r\n}\r\n/* POPUP */\r\n.popup-wrapper{\r\n   visibility: hidden;\r\n   position: fixed;\r\n   display: flex;\r\n   align-items: center;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   \r\n}\r\n.popup-wrapper-open{\r\n   visibility: visible;\r\n}\r\n.popup-container{\r\n   position: relative;\r\n   display: flex;\r\n   justify-content: space-around;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   width: 600px;\r\n   height: 600px;\r\n   margin: 0px auto;\r\n   background: rgb(222, 219, 219);\r\n   border-radius: 30px;\r\n   z-index: 1;\r\n}\r\n.popup-overlay{\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 102%;\r\n   background: #000;\r\n   opacity: 0.7;\r\n   z-index: 0;\r\n}\r\n\r\n\r\n.timers {\r\n   width: 100%;\r\n   margin: 0px auto;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.timers__items {\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n.timers__titels {\r\n   display: flex;\r\n   justify-content: space-around;\r\n}\r\n\r\n.timers__titel:nth-child(1) {\r\n   padding-left: 13px;\r\n}\r\n\r\n.timers__titel:nth-child(2) {\r\n   padding-left: 20px;\r\n}\r\n\r\n.timers__titel:nth-child(3) {\r\n   padding-left: 13px;\r\n}\r\n\r\n.timers__item {\r\n   font-weight: 700;\r\n   font-size: 48px;\r\n}\r\n\r\n/* POPUS BUTTON LIST */\r\n.popup-button-wrap {\r\n   width: 400px;\r\n   height: 200px;\r\n   background: rgb(255, 204, 0);\r\n   border-radius: 10px;\r\n}\r\n\r\n.popup__list-item{\r\n   cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-index.js */ "./src/test-index.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");


(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)();
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.createMainWrapper)();
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.createNumWrapper)();
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.createPopUp)();
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.openClosePopup)();
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.setTimer)(new Date(2023, 0, 31, 20, 0, 0, 0));
(0,_test_index_js__WEBPACK_IMPORTED_MODULE_0__.setPopupDates)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map