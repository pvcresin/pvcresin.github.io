module.exports = {
	init() {
		window.scrolls = []

		window.addEventListener('scroll', e => {
			const posY = window.pageYOffset
			const path = window.location.hash
			window.scrolls[`${path}`] = posY
		})
	},
	move() {
		const path = window.location.hash
		if (window.scrolls[`${path}`] === undefined) {
			window.scroll(0, 0)
		} else {
			window.scroll(0, window.scrolls[`${path}`])
		}
	}
}