import {createMainContainer, createMainWrapper, createNumWrapper, setTimer, createPopUp, openClosePopup,setPopupDates} from './test-index.js'
import './styles/style.css'
createMainContainer()
createMainWrapper()
createNumWrapper()
createPopUp()
openClosePopup()
setTimer(new Date(2023, 0, 31, 20, 0, 0, 0))
setPopupDates()
