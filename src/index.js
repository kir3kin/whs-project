// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'
import Tabs from './assets/modules/tabs'
import Navigation from './assets/modules/navigation'
import ModalSlider from './assets/modules/modal-slider'

/********* new Slider($1, $2, $3)
$1 [string] - slider block
$2 [number] - active slide
$3 [number][ms] - switch's speed
init() [func] - to active slider
*********/
new Slider('#main-slider', 2, 2000).init()
new Slider('#text-slider', 3, 1000).init()

/********* new Tabs($1, $2)
$1 [string] - tab block
$2 [number] - active tab
init() [func] - to active tab switcher
*********/
new Tabs('#tabs', 2).init()

/********* new Navigation($1)
$1 [string] - navigation block
init() [func] - to active navigation
// add class 'nav__item--active' to current navigation link
*********/
new Navigation('#nav').init()

/********* new ModalSlider($1, $2, $3)
$1 [string] - modal window
$2 [string] - slider block
$3 [obj] - modal window show animation
$3 [default parameters] = {
	translateY [number] = -50
	opacity    [number] = 0
	closeTime  [number] =: 300,
	timingFunc [string] = 'linear'
}
init() [func] - to active modal window for main slider
*********/
new ModalSlider('#modal-slider', '#main-slider').init()


const submitFrms = [
	document.body.querySelector('.subs-form'),
	document.body.querySelector('.login-form')
]


submitFrms.forEach(form => {
	form.addEventListener('submit', (event) => {

		event.preventDefault();
		
		const textField = form.querySelector('input[type=text]')
		const passField = form.querySelector('input[type=password]')


		const nameReg = /^[a-z]{2,10}$/i
		const passReg = /^[\w\d-_!@$&()]{2,12}$/i
		const email = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i

		nameReg.test(textField.value)
		passReg.test(passField.value)




	})
})

