// SCSS
import './assets/scss/styles'
import Tabs from './assets/modules/tabs'
import Navigation from './assets/modules/navigation'
import ModalSlider from './assets/modules/modal-slider'
import FormValidation from './assets/modules/form-validation'

/********* new Slider($1, $2, $3)
$1 [string] - slider block
$2 [number] - active slide
$3 [number][ms] - switch's speed
init() [func] - to active slider
*********/
import('./assets/modules/slider').then(sliderContainer => {
	new sliderContainer.Slider('#main-slider', 2, 2000).init()
	new sliderContainer.Slider('#text-slider', 3, 1000).init()
})

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

const forms = ['.subs-form', '.login-form']
for (const form of forms) {
	/********* new ModalSlider($1)
	$1 [string] - form
	init() [func] - to active form validation
	*********/
	new FormValidation(form).init()
}