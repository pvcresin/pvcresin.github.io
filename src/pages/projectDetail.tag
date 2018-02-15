projectDetail
	.container
		h1 {projectName}

	script.
		this.projectName

		this.on('route', projectName => {
			this.update({
				projectName: projectName
			})
		})