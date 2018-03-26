app
	router
		route(path='')
			top
		route(path='projects/')
			projectAll
		route(path='projects/*')
			projectDetail
		route(path='..')
			other

	script.
		import route from 'riot-route/lib/tag'
		import top from './top'
		import projectAll from './projectAll'
		import projectDetail from './projectDetail'
		import other from './other'
