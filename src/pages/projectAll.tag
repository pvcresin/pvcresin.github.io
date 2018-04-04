projectAll
	section
		.container
			h2.section-title Projects
			ul
				a(each='{p in categories}' click='{click.bind(this, p)}')
					li(if='{selectedCategory !== p}') {p}
					li.selected(if='{selectedCategory === p}') {p}
			projects(category='{selectedCategory}')
	footer

	style(type='scss').
		:scope {
			> section {
				background: #eeeeee;
				color: #222222;
				min-height: 100vh;
				.container {
					ul {
						display: flex;
						justify-content: space-between;
						max-width: 400px;
						padding: 0 1.5rem;
						margin: 1rem auto 0 auto;
						li {
							font-size: 0.8rem;
							display: inline-block;
							color: gray;
							padding: 0.5rem 0.5rem;
							cursor: pointer;
							border: 1px solid;
							border-radius: 2rem;
							text-align: center;
							&.selected {
								color: white;
								background: gray;
								border-color: gray;
							}
						}
					}
				}
			}
		}

	script.
		import projects from '../components/projects'
		import route from 'riot-route/lib/tag'

		this.categories = ['All', 'Android', 'Web', 'Desktop', 'Design']
		this.selectedCategory

		this.on('route', () => {
			if (route.query().category !== undefined) {
				this.update({ selectedCategory: route.query().category })
			} else {
				this.update({ selectedCategory: this.categories[0] })
			}

			const path = window.location.hash
			if (window.scrolls[`${path}`] === undefined) {
				window.scroll(0, 0)
			} else {
				window.scroll(0, window.scrolls[`${path}`])
			}
		})

		click(p) {
			this.update({ selectedCategory: p })
		}