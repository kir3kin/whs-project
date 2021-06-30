// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'
import * as $ from'jquery'  
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


const forms = ['.subs-form', '.login-form']
for (const form in forms) {
	/********* new ModalSlider($1, $2, $3)
	$1 [string] - form
	init() [func] - to active form validation
	*********/
	new FormValidation(forms[form], $).init()
}



// $.ajax({
// 	type: "POST",
// 	url: "http://localhost/whsportfolio/dist//static/mail.php",
// 	// data: 'alba',
// 	data: $(forms[0]).serialize(),
// 	dataType: "json",
// 	contentType: "application/json; charset=utf-8",
// 	success: function(data) {
// 		console.log('data:', data)
// 			// $("#wdh_result_form").html(data);n
// 	}
// });




// Todo lazy lodaing for js scripts