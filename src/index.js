// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'
import Tabs from './assets/modules/tabs'
import Navigation from './assets/modules/navigation'
import ModalSlider from './assets/modules/modal-slider'
import * as $ from'jquery'  

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


// Todo lazy lodaing for js scripts




const submitFrms = [
	document.body.querySelector('.subs-form'),
	document.body.querySelector('.login-form')
]

const regPatternts = {
	name: /^[a-z]{2,10}$/i,
	pass: /^[\w\d-_!@$&]{8,20}$/i,
	email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i
}

const regMsgs = {
	name: 'Name must contain: 2-10 characters',
	pass: 'Password must contain: 8-20 characters (you can use: -_!@$&)',
	email: 'Invalid  e-mail address'
}

function showFormInputError(form, input, inputType) {
	const label = form.querySelector(`label[for='${input.getAttribute('name')}']`)
	label.innerText = regMsgs[inputType]
	
	label.classList.add('label--error')

	setTimeout(() => {
		hideFormInputError(form)
	}, 2000)
}

function hideFormInputError(form) {
	const labels = form.querySelectorAll('label')

	labels.forEach(label => {
		label.classList.remove('label--error')
		setTimeout(() => {
			label.innerText = ''
		}, 500)
	})
}

function validateForm(form) {
	const fields = {
		name: form.querySelector('input[type=text]'),
		pass: form.querySelector('input[type=password]'),
		email: form.querySelector('input[type=email]')
	}

	for (const field in fields) {
		if (fields[field]) {
			if (!regPatternts[field].test(fields[field].value)) {
				showFormInputError(form, fields[field], field)
			}
		}
	}
}

submitFrms.forEach(form => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

	$.ajax({
		type: "POST",
		url: "/static/mail.php",
		data: $(form).serialize(),
		success: function(data) {
			console.log('data:', data)
				// $("#wdh_result_form").html(data);
		}
	});

		// validateForm(form)
	})
})