top
	first
	section
		.container
			h2.section-title About Me
			about
			more(
				text='detail'
				title='View detailed profile'
				link='{window.location.origin}/#profile')
	section
		.container
			h2.section-title Projects
			projects(limit=3)
			more(
				title='View all projects'
				link='{window.location.origin}/#projects')
	section
		.container
			h2.section-title Awards
			awards
			h2.section-title Publications
			publications
			h2.section-title Clubs
			clubs
	footer

	style(type='scss').
		:scope {
			display: block;
			min-height: 100vh;
			> section {
				&:nth-child(2n) {
					background: #2b2b2b;
					color: #efefef;
				}
				&:nth-child(2n+1) {
					background: #eeeeee;
					color: #222222;
				}
			}
		}

	script.
		import first from '../components/first'
		import footer from '../components/footer'
		import about from '../components/about'
		import projects from '../components/projects'
		import awards from '../components/awards'
		import publications from '../components/publications'
		import clubs from '../components/clubs'
		import more from '../components/more'

		this.on('route', () => {
			const path = window.location.hash
			if (window.scrolls[`${path}`] === undefined) {
				window.scroll(0, 0)
			} else {
				window.scroll(0, window.scrolls[`${path}`])
			}
		})