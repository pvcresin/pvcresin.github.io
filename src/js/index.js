import riot from 'riot'
import app from '../tag/app'
import SmoothScroll from 'smooth-scroll'

console.log('index.js')

riot.mount('app')

const scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 300, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeOutQuad', // Easing pattern to use -> 'easeInOutCubic'
	customEasing: function (time) { }, // Function. Custom easing pattern

	// Callback API
	before: function () { }, // Callback to run before scroll
	after: function () { } // Callback to run after scroll
})