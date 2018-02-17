projects
	.card-box
		.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1(each='{w in projects}')
			.card
				a(href='{window.location.origin}/#projects/{w.name}')
					.wrapper
						img.thumbnail(src='resources/{w.img}')
					.content
						h4 {w.name}
						p {w.sub}

	style(scoped).
		.card-box {
			padding: 0.75rem;
			display: flex;
			flex-wrap: wrap;
		}
		.card-box > div {
			padding: 0.75rem;
		}
		.card {
			cursor: pointer;
			background: white;
			height: 100%;
			box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
			border-radius: 0.3rem;
		}
		.card:hover {
			box-shadow: 0 8px 10px rgba(10, 10, 10, 0.1), 0 0 6px 4px rgba(10,10,10,.1);
		}
		.wrapper {
			position: relative;
			width: 100%;
		}
		.wrapper:before {
			content: '';
			display: block;
			padding-top: 56.25%;
		}
		.thumbnail {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			border-radius: 0.3rem 0.3rem 0 0;
			display: block;
		    width: 100%;
			background: #ddd;
			border-bottom: 1px solid #ddd;
		}
		.content {
			padding: 0.8rem 1rem;
		}
		.content h4 {
			font-size: 1.2rem;
			margin-bottom: 0.3rem;
		}
		.content p {
			font-size: 0.9rem;
		}

	script.
		import projectsArray from '../data'

		this.projects = (this.opts.limit === undefined)
			? projectsArray
			: projectsArray.filter((p, i) => i < this.opts.limit)
