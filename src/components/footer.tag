footer
	.container
		social
		p © {this.year} pvcresin

	style(type='scss').
		:scope {
			display: block;
			background: #0f0f0f;
			color: white;
			> .container {
				text-align: center;
				padding: 1rem 0;
				> p {
					color: #525252;
					padding-bottom: 1rem;
				}
			}
		}

	script.
		import dayjs from 'dayjs'
		import social from './social'

		this.year = dayjs().format('YYYY');
