projectAll
	section
		.container
			h2.section-title Projects
			projects

	style(type='scss').
		:scope {
			> section {
				background: #eeeeee;
				color: #222222;
				min-height: 100vh;
			}
		}

	script.
		import projects from '../components/projects'

		this.on('route', () => {
			const path = window.location.hash
			if (window.scrolls[`${path}`] === undefined) {
				window.scroll(0, 0)
			} else {
				window.scroll(0, window.scrolls[`${path}`])
			}
		})