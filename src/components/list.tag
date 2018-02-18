list.pure-g.pure-u-1-1
	ul
		li(each='{item in opts.items}')
			h3
				a(href='{item.link}').title {item.title}
				.right
					hr
					span
						span.date(if='{item.date.length <= 7}') {item.date}
						span.term(if='{item.date.length > 7}') {item.date}
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
			text-align: justify;
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
		.right > span {
			padding: 0.75rem;
			display: inline-flex;
		}
		.right > span > span {
			background: gray;
			color: white;
			padding: 0.1rem 0.3rem;
			border-radius: 0.3rem;
			display: inline-block;
			text-align: center;
			font-size: 0.8rem;
			font-weight: normal;
		}
		.date {
			min-width: 4rem;
		}
		.term {
			min-width: 8rem;
		}
		.sub {
			color: #bdbdbd;
			padding: 0 0.75rem;
			font-weight: 300;
			text-align: justify;
		}