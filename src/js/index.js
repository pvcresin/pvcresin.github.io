import riot from 'riot'
import app from '../pages/app'

riot.mount('.root', 'app')

window.scrolls = []

window.addEventListener('scroll', e => {
	const posY = window.pageYOffset
	const path = window.location.hash
	window.scrolls[`${path}`] = posY
})