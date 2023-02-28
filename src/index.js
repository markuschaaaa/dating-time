import {createMainContainer, createMainWrapper, createNumWrapper, setTimer, createPopUp, openClosePopup, setPopUpTimer} from './test-index.js'
import './styles/style.css'
createMainContainer()
createMainWrapper()
createNumWrapper()
createPopUp()
openClosePopup()
setTimer(new Date(2023, 0, 31, 20, 0, 0, 0))
setPopUpTimer(new Date(2024, 0, 31, 20, 0, 0, 0))