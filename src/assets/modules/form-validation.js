export default class FormValidation {

	constructor(formSelector, jquery) {
		this.regPatternts = {
			name: /^[a-z]{2,10}$/i,
			pass: /^[\w\d-_!@$&]{8,20}$/i,
			email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i
		}
		this.errorMsgs = {
			name: 'Name must contain: 2-10 letters',
			pass: 'Password must contain: 8-20 characters (you can use: -_!@$&)',
			email: 'Invalid  e-mail address'
		}
		this.form = document.body.querySelector(formSelector)
		this.jq = jquery
	}

	getErrorMsg(errorType) {
		return this.errorMsgs[errorType]
	}

	showFormInputError(input, inputType) {
		const label = this.form.querySelector(`label[for='${input.getAttribute('name')}']`)
		label.innerText = this.getErrorMsg(inputType)
		label.classList.add('label--error')
	
		setTimeout(() => {
			this.hideFormInputError()
		}, 2000)
	}
	
	hideFormInputError() {
		const labels = this.form.querySelectorAll('label')
			labels.forEach(label => {
			label.classList.remove('label--error')
		})
	}
	
	formIsValid() {
		const fields = {
			name: this.form.querySelectorAll('input[type=text]'),
			pass: this.form.querySelectorAll('input[type=password]'),
			email: this.form.querySelectorAll('input[type=email]')
		}

		for (const fieldArr in fields) {
			if (fields[fieldArr].length > 0) {
				fields[fieldArr].forEach((field) => {
					if (!this.regPatternts[fieldArr].test(field.value)) {
						this.showFormInputError(field, fieldArr)
					}
				})
			}
		}
	}

	init() {
		this.form.addEventListener('submit', (event) => {
			event.preventDefault()
			this.formIsValid()


			// console.log('this.jq:', this.jq)

			// this.jq.ajax({
			// 	type: "POST",
			// 	url: "/static/mail.php",
			// 	data: $(this.form).serialize(),
			// 	success: function(data) {
			// 		console.log('data:', data)
			// 			// $("#wdh_result_form").html(data);
			// 	}
			// });
		})
	}

}