const defaultModalContentProp = {
	translateY: -50,//px ||| modal content block's start positon
	opacity: 0,
	closeTime: 300,//ms
	timingFunc: 'linear'
}

export default class ModalSlider {
	constructor(modalSelector, sliderSelector, modalContentProp = defaultModalContentProp) {
		this.body = document.body
		this.modalW = this.body.querySelector(modalSelector)
		this.slider = this.body.querySelector(sliderSelector)
		this.modalBtn = this.slider.querySelectorAll('[data-modal=modal-slider]')
		this.modalClose = this.modalW.querySelector('.modal__close')
		this.modalWrapp = this.modalW.querySelector('.modal__wrap')
		this.modalContent = this.modalW.querySelector('.modal__content')
		this.modalContentProp = this.validateModalProp(modalContentProp)
	}

	// ! without type variable validation
	validateModalProp(modalContentProp) {
		return {
			translateY: modalContentProp.translateY ? modalContentProp.translateY : defaultModalContentProp.translateY,
			opacity: modalContentProp.opacity ? modalContentProp.opacity : defaultModalContentProp.opacity,
			closeTime: modalContentProp.closeTime ? modalContentProp.closeTime : defaultModalContentProp.closeTime,
			timingFunc: modalContentProp.timingFunc ? modalContentProp.timingFunc : defaultModalContentProp.timingFunc,
		}
	}

	initModalContentAnimation() {
		const modalContentTransition = [
			`transform ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}`,
			`opacity ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}`
		]

		const animationStyles = {
			transform: `translateY(${this.modalContentProp.translateY}px)`,
			opacity: this.modalContentProp.opacity,
			transition: modalContentTransition.join(', ')
		}
		Object.assign(this.modalContent.style, animationStyles)
	}

	closeModal() {
		this.initModalContentAnimation()

		// hide modal window only after the modal content hiding
		setTimeout(() => {
			this.modalW.classList.remove('modal--show')
			this.body.classList.remove('no-scroll')
		}, this.modalContentProp.closeTime)
	}

	modalChangeContent(event) {
		const slide = event.currentTarget.closest('.slider-slide')
		const sliderTitle = slide.querySelector('.slider-slide__title').innerText
		const sliderSubtitle = slide.querySelector('.slider-slide__subtitle').innerText
		const sliderImgSrc = slide.querySelector('.slider-slide__img img').getAttribute('src')

		this.modalContent.querySelector('.modal__title').innerText = sliderTitle
		this.modalContent.querySelector('.modal__desc').innerText = sliderSubtitle
		this.modalContent.querySelector('.modal__img img').setAttribute('src', sliderImgSrc)
	}

	init() {
		this.modalBtn.forEach(item => {
			item.addEventListener('click', event => {
				this.initModalContentAnimation()
				this.modalChangeContent(event)
				
				// disable body
				this.body.classList.add('no-scroll')
				// show modal block
				this.modalW.classList.add('modal--show')
				// prevent modal close after the click on modal contet
				this.modalContent.addEventListener('click', e => e.stopPropagation())

				// show modal's content only after disabling scroll and showing modal wrapper
				setTimeout(() => {
					this.modalContent.style.transform = 'none'
					this.modalContent.style.opacity = 1
				}, 0)

			})
		})

		this.modalClose.addEventListener('click', () => {
			this.closeModal()
		})

		this.modalWrapp.addEventListener('click', () => {
			this.closeModal()
		})
	}
}
