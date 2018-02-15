app
	router
		route(path='')
			top
		route(path='projects/')
			projects
		route(path='projects/*')
			projectDetail
		route(path='..')
			other

	script.
		import route from 'riot-route/lib/tag'
		import top from '../pages/top'
		import projectDetail from '../pages/projectDetail'
		import aboutPage from '../pages/aboutPage'
		import other from '../pages/other'