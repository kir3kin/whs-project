// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'
import Tabs from './assets/modules/tabs'

/********* new Slider($1, $2, $3)
$1 - slider element
$2 - active slide
$3 - switch's speed
obj.init() - to active slider
*********/
new Slider('#main-slider', 2, 2000).init()
new Slider('#text-slider', 3, 1000).init()


class Tabsc {
	constructor(tabSelector, tabIndex) {
		this.tabIndex = tabIndex
		this.tab = document.querySelector(tabSelector)
		this.tabBtns = this.tab.querySelectorAll('[id^=tab-]')
		this.tabBody = this.tab.querySelector('[data-tab=tabs-body]')
		this.tabContents = this.tab.querySelector('[data-tab^=tab-]')
	}

	resetTabBtns() {
		this.tabBtns.forEach(btn => {
			btn.classList.remove('tab-btn--active')
		})
	}

	resetTabContent() {
		this.tabContents.forEach(content => {
			content.classList.remove('tab-context--active')
		})
	}

	changeTabContent(btn) {
		const currentTab = this.tab.querySelector(`[data-tab=${btn.getAttribute('id')}]`)
		this.resetTabContent()

		this.tabBody.style.height = `${currentTab.clientHeight}px`
		currentTab.classList.add('tab-context--active')
	}

	init() {
		

		this.tabBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				this.resetTabBtns()
				btn.classList.add('tab-btn--active')
				this.changeTabContent(btn)
			})
		})
	}
}




const tab = document.querySelector('#tabs')
const tabBtns = tab.querySelectorAll('[id^=tab-]')
const tabBody = tab.querySelector('[data-tab=tabs-body]')
const tabContents = tab.querySelectorAll('[data-tab^=tab-]')

function resetTabBtns() {
	tabBtns.forEach(btn => {
		btn.classList.remove('tab-btn--active')
	})
}

function resetTabContent() {
	tabContents.forEach(content => {
		content.classList.remove('tab-context--active')
	})
}

function changeTabContent(btn) {
	const currentTab = tab.querySelector(`[data-tab=${btn.getAttribute('id')}]`)
	resetTabContent()

	tabBody.style.height = `${currentTab.clientHeight}px`
	currentTab.classList.add('tab-context--active')
}

tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		resetTabBtns()
		btn.classList.add('tab-btn--active')
		changeTabContent(btn)
	})
})
