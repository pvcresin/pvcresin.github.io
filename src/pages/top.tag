top
	div
		header
		main
			section
				about
				skills
			section
				projects
			section
				awards
				publications
				clubs
		footer

	style(scoped).
		main > :nth-child(2n+1) {
			background: #2b2b2b;
			color: #efefef;
		}
		main > :nth-child(2n) {
			background: #eeeeee;
			color: #222222;
		}

	script.
		import header from '../components/header'
		import footer from '../components/footer'
		import about from '../components/about'
		import skills from '../components/skills'
		import projects from '../components/projects'
		import awards from '../components/awards'
		import publications from '../components/publications'
		import clubs from '../components/clubs'