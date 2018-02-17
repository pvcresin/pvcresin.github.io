list.pure-g.pure-u-1-1
	ul
		li(each='{item in opts.items}')
			h3
				a(href='{item.link}').title {item.title}
				.right
					hr
					span.date
						span {item.date}
			p.sub(each='{t in item.texts}') {t}

	style(scoped).
		a {
			color: #4e9adb;
		}
		a:hover {
			text-decoration: underline;
		}
		ul {
			padding: 0.75rem;
		}
		ul > li {
			margin-bottom: 1rem;
		}
		h3 {
			display: flex;
			margin: auto;
			align-items: center;
		}
		.title {
			padding: 0.75rem;
		}
		.right {
			display: inline-flex;
			flex-grow: 1;
			align-items: center;
		}
		hr {
			display: inline-flex;
			flex-grow: 1;
			border: 1.5px solid gray;
			border-radius: 1rem;
			min-width: 1rem;
			background: gray;
		}
		.date {
			padding: 0.75rem;
		}
		.date > span {
			background: gray;
			color: white;
			padding: 0.1rem 0.3rem;
			border-radius: 0.3rem;
			display: inline-block;
			min-width: 4rem;
			text-align: center;
			font-size: 0.8rem;
			font-weight: normal;
		}
		.sub {
			color: #bdbdbd;
			padding: 0 0.75rem;
			font-weight: 300;
		}