export default class Tabs {
	constructor(tabSelector, tabIndex = 1) {
		this.tab = document.querySelector(tabSelector)
		this.tabBtns = this.tab.querySelectorAll('[id^=tab-]')
		this.tabBody = this.tab.querySelector('[data-tab=tabs-body]')
		this.tabContents = this.tab.querySelectorAll('[data-tab^=tab-]')
		this.errorMsg = {
			notEqual: 'Not equal number of tab buttons and number of tab content!',
			unRecognised: 'Unrecognised error has occurred'
		}
		this.tabIndex = this.validateTabIndex(tabIndex)
	}

	error(typeError) {
		let eMsg = ''
		switch(typeError) {
			case 'notEqual': eMsg = this.errorMsg[typeError]; break;
			default: eMsg = this.errorMsg.unRecognised
		}
		console.error(eMsg)
	}

	validateTabIndex(index) {
		try {
			if (this.tabBtns.length !== this.tabContents.length)
				throw('notEqual')

			return (index <= 0) ? 1 : (index > this.tabBtns.length) ? this.tabBtns.length : index
		} catch(typeError) {
			this.error(typeError)
		}
		console.log('holla a todos')
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
		this.resetTabContent()
		
		const currentTab = this.tab.querySelector(`[data-tab=${btn.getAttribute('id')}]`)
		this.tabBody.style.height = `${currentTab.clientHeight}px`
		currentTab.classList.add('tab-context--active')
	}

	init() {
		this.tabBtns.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				this.resetTabBtns()
				btn.classList.add('tab-btn--active')
				this.changeTabContent(btn)
			})

			//tabIndex starts from 1
			if (this.tabIndex === ++index) {
				this.tabBody.style.display = 'block'
				btn.click()
			}
		})
	}
}