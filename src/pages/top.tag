top
	.top-base
		section
			first
		section
			.container
				h2.section-title About Me
				about
				skills
		section
			.container
				h2.section-title Projects
				projects(limit=3)
				more(link='{window.location.origin}/#projects/')
		section
			.container
				h2.section-title Awards
				awards
				h2.section-title Publications
				publications
				h2.section-title Clubs
				clubs
		footer

	style(scoped).
		.top-base {
			min-height: 100vh;
		}
		.top-base > :nth-child(2n) {
			background: #2b2b2b;
			color: #efefef;
		}
		.top-base > :nth-child(2n+1) {
			background: #eeeeee;
			color: #222222;
		}

	script.
		import first from '../components/first'
		import footer from '../components/footer'
		import about from '../components/about'
		import skills from '../components/skills'
		import projects from '../components/projects'
		import awards from '../components/awards'
		import publications from '../components/publications'
		import clubs from '../components/clubs'
		import more from '../components/more'