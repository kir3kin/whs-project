export default class Slider {
	constructor(sliderSelector, slideIndex = 1, sliderSpeed = 500) {
		this.sliderSelector = sliderSelector
		this.slider = document.querySelector(this.sliderSelector);
		this.sliderSpeed = sliderSpeed
		this.activeBtns = true

		this.slideIndex = (slideIndex <= 1) ? 1 : (this.slideIndex >= this.slidesCount) ? this.slidesCount : slideIndex
	}

	get leftBtn() {
		return this.slider.querySelector(`${this.sliderSelector}-btn-left`)
	}

	get rightBtn() {
		return this.slider.querySelector(`${this.sliderSelector}-btn-right`)
	}

	get sliderWrap() {
		return this.slider.querySelector(`${this.sliderSelector}-wrap`)
	}

	get slidesCount() {
		return this.sliderWrap.querySelectorAll('[data-slider=slider-slide]').length
	}

	get slideWidth() {
		return this.sliderWrap.clientWidth
	}

	changeIndex(direct) {
		if (!this.activeBtns) return

		switch(direct) {
			case 'right': {
				this.slideIndex++

				if (this.slideIndex > this.slidesCount) {
					this.slideIndex = 1
				} 

			}; break;
			case 'left': {
				this.slideIndex--
				if (this.slideIndex <= 0) {
					this.slideIndex = this.slidesCount
				}
			}; break;
		}

		this.changeSlide()
	}

	setSliderSpeed() {
		this.sliderWrap.style.transition = `transform ${this.sliderSpeed}ms ease-in-out`
	}

	changeSlide(initiation = false) {
		this.sliderWrap.style.transform = `translateX(-${(this.slideIndex - 1) * this.slideWidth}px)`

		//* deactivate slider's buttons only if it's not slider initiation
		if (!initiation) this.deactivateCtrlBtns()
	}

	deactivateCtrlBtns() {
		this.activeBtns = false;
		//* deactivate slider's buttons for a sliderSpeed time
		setTimeout(() => {
			this.activeBtns = true
		}, this.sliderSpeed);
	}

	activeCtrlBtns() {
		this.leftBtn.addEventListener('click', () => this.changeIndex('left'))
		this.rightBtn.addEventListener('click', () => this.changeIndex('right'))
	}

	init() {
		if (this.slideIndex !== 1) this.changeSlide(true)
		//* set slider speed after the slider's change 
		setTimeout(() => this.setSliderSpeed(), 0)
		this.activeCtrlBtns()
	}
}