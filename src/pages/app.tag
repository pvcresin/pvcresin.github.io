app
	router
		route(path='')
			top
		route(path='projects/')
			section.all-projects
				.container
					h2.section-title Projects
					projects
		route(path='projects/*')
			projectDetail
		route(path='..')
			other

	style(type='scss').
		:scope {

		}
		.all-projects {
			background: #eeeeee;
		    color: #222222;
			min-height: 100vh;
		}

	script.
		import route from 'riot-route/lib/tag'
		import top from './top'
		import projectDetail from './projectDetail'
		import other from './other'