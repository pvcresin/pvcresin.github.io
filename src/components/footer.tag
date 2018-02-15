footer
	.base
		.container
			social
			p © Copyright 2018 pvcresin

	style(scoped).
		.base {
			background: #0f0f0f;
			color: white;
		}
		.container {
			text-align: center;
			padding: 1rem 0;
		}
		.container > p {
			color: #525252;
			padding-bottom: 1rem;
		}

	script.
		import social from './social'