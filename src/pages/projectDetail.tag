projectDetail
	.detail-base
		.container
			section
				.video-frame(if='{project.video.length !== 0}')
					iframe(src="https://www.youtube.com/embed/{project.video}?rel=0"
							frameborder="0"
							allow="encrypted-media"
							allowfullscreen)
				.img-frame(if='{project.video.length === 0}')
					img(src='../resources/{project.img}')
				h1 {project.name}: {project.sub}
				tags(tags='{project.keywords}')
				.chapter
					h2 Abstract
					hr
				p {project.text}
				.chapter
					h2 Implementation
					hr
				p {project.implement}


	style(scoped).
		.detail-base {
			min-height: 100vh;
			background: #2b2b2b;
			color: #efefef;
			padding: 0.75rem;
		}
		section {
			padding: 0.75rem;
		}
		h1 {
			color: white;
			font-size: 1.2rem;
			margin: 1rem 0;
			color: white;
			text-align: justify;
		}
		h2 {
			font-size: 1rem;
			margin-right: 0.5rem;
			color: white;
		}
		.video-frame {
			position: relative;
			width: 100%;
			padding-top: 56.25%;
		}
		.img-frame {
			width: 100%;
		}
		iframe {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: black;
		}
		img {
			width: 100%;
			height: 100%;
			background: black;
		}
		p {
			margin: 0.6rem 0;
			text-align: justify;
		}
		.chapter {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.chapter > hr {
			flex-grow: 1;
			border: 1.5px solid gray;
			border-radius: 1rem;
			min-width: 1rem;
			background: gray;
		}

	script.
		import tags from '../components/tags'
		import projectsArray from '../data'

		this.project = {
			name: '',
			sub: '',
			img: '',
			video: '',
			text: '',
			implement: '',
			keywords: []
		}

		this.on('route', projectName => {
			this.update({
				project: projectsArray.filter(d => d.name === projectName)[0]
			})
		})
