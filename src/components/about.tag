about.pure-g
	.about-img.pure-u-sm-1-4.pure-u-1-2
		.face-wrapper.pure-u-1-2
			img(src='resources/icon-pvcresin.svg')
	.pure-u-sm-1-24.pure-u-1-1
	.about-text.pure-u-sm-17-24.pure-u-1-1
		|Web Frontend　が好きなエンジニア。
		br
		|学生時代はインタラクション（HCI）を専攻し、主にモバイル / ウェアラブルデバイスに関する研究を行う。
		br
		|人と意見を交換し、議論しながらモノ作りがしたい。
		br
		|新しいものが好きなので、貪欲に学んでいく。
		ul
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-birthday-cake(aria-hidden='true')
				.right.pure-u-11-12 {birthday} (Age: {age})
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-envelope(aria-hidden='true')
				.right.pure-u-11-12 pvcresin0730@gmail.com
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-map-marker-alt(aria-hidden='true')
				.right.pure-u-11-12 Omotesando, Tokyo
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-suitcase(aria-hidden='true')
				.right.pure-u-11-12
					span Frontend Engineer{' '}
					a.company(href='https://jp.corp-sansan.com/' target='_blank') @ Sansan
	style(type='scss').
		:scope {
			padding: 0.75rem;
			> .about-img {
				text-align: center;
				padding: 0.75rem;
				margin: 0 auto;
				.face-wrapper {
					position: relative;
					width: 100%;
					&:before {
						content: "";
						display: block;
						padding-top: 100%;
					}
					img {
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						border-radius: 50%;
						width: 100%;
						background: gray;
					}
				}
			}
			> .about-text {
				text-align: justify;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 0.75rem;
				font-size: 1.1rem;
				ul {
					li {
						display: flex;
						margin-top: 0.5rem;
						.icon {
							display: flex;
							justify-content: center;
							align-items: baseline;
							font-size: 1.5rem;
						}
						.right {
							display: flex;
							align-items: center;
							padding-left: 0.5rem;
							a {
								color: #4e9adb;
								&:hover {
									text-decoration: underline;
								}

								&.company {
									margin-left: 0.3rem;
								}
							}
						}
					}
				}
			}
		}

	script.
		import dayjs from 'dayjs'
		import webp from './webp'

		this.birthday = '1994-07-30'
		this.age = dayjs().diff(this.birthday, 'years')
