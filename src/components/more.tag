more
	a(href='{opts.link}' title='{opts.title}')
		span.more-button more

	style(type='scss').
		:scope {
			padding: 0 1.5rem 1.5rem 1.5rem;
			display: flex;
		    justify-content: center;
			> a > span {
				padding: 0.5rem;
				background: grey;
				color: white;
				border-radius: 3rem;
				min-width: 10rem;
				text-align: center;
				display: block;
				&:hover {
					background: #a3a3a3;
				}
			}
		}