export default class Navigation {
	constructor(navSelector) {
		this.siteHash = window.location.hash
		this.navBlock = document.querySelector(navSelector)
		this.navLinks = this.navBlock.querySelectorAll('a')
	}

	init() {
		if (this.siteHash) {
			const currentNavLink = this.navBlock.querySelector(`[href$='${this.siteHash}']`)
			if (currentNavLink) currentNavLink.classList.add('nav__item--active')
		}

		this.navLinks.forEach((navLink, linkIndex)=> {
			navLink.addEventListener('click', () => {
				// transform navlink to norma array
				Array.from(this.navLinks).map((link, index) => {
					if (linkIndex === index) link.classList.add('nav__item--active')
					else link.classList.remove('nav__item--active')
				})
			})
		})
	}
}