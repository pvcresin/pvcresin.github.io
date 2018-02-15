header
	.base
		nav
			//- ul
			//- 	li
			//- 		a(href='/') HOME
			//- 	li
			//- 		a(href='#about') ABOUT
			//- 	li
			//- 		a(href='#projects') PROJECTS
		.container
			h1 Raika Toriyama
			p Android / Web Developer
			social
		.container
			a(href='#about')
				i.fas.fa-chevron-down.fa-3x

	style(scoped).
		.base {
			text-align: center;
			background: #1a1819;
			color: white;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		nav {
			margin: 0 auto;
			width: 100%;
			max-width: calc(1200px * 0.8);
			line-height: 3rem;
		}
		ul {
			display: flex;
			justify-content: space-around;
		}
		li {
			display: inline-block;
		}
		h1 {
			font-size: calc(1.0rem + 250%);
			font-family: sans-serif;
		}
		p {
			font-size: 1.5rem;
			font-family: serif;
		}

	script.
		import social from './social'