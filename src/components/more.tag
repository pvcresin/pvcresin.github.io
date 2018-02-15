more
	div
		a(href='{opts.link}')
			span.more-button more

	style(scoped).
		div {
			padding: 1.5rem;
			display: flex;
		    justify-content: center;
		}
		.more-button {
			padding: 0.5rem;
			background: grey;
			color: white;
			border-radius: 3rem;
			min-width: 10rem;
			text-align: center;
			display: block;
		}
		.more-button:hover {
			background: #a3a3a3;
		}