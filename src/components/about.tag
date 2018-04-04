about.pure-g
	.about-img.pure-u-sm-1-4.pure-u-1-2
		.face-wrapper.pure-u-1-2(click='{clickFace}')
			img(show='{face}' src='resources/my-face.png')
			img(show='{!face}' src='resources/icon-pvcresin.svg')
	.pure-u-sm-1-24.pure-u-1-1
	.about-text.pure-u-sm-17-24.pure-u-1-1
		|プログラミングが好きで、ちょっと名前が珍しい学生。
		br
		|趣味はアナログゲーム作ったり、YouTube見たり、一人カラオケしたり、ミニチュアを集めたりすること。
		br
		|当面の目標は有益な情報を提供できるエンジニアになることと、多くの人の生活に役立つサービスを作ること。
		br
		|人と意見を交換し、議論しながら良いモノを作っていきたい。
		br
		|新しいものが好きなので、貪欲に学んでいく。
		ul
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-birthday-cake(aria-hidden='true')
				.right.pure-u-11-12 {birthday} (Age: {age})
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-map-marker-alt(aria-hidden='true')
				.right.pure-u-11-12 Nakano, Tokyo
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-envelope(aria-hidden='true')
				.right.pure-u-11-12 pvcresin0730@gmail.com
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-graduation-cap(aria-hidden='true')
				.right.pure-u-11-12 明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士2年
			li.pure-g
				.icon.pure-u-1-12.pure-u-lg-1-24
					i.fa.fa-suitcase(aria-hidden='true')
				.right.pure-u-11-12
					a(href='http://soryu-sha.jp/') 想隆社
					span （フロントエンドエンジニア・アルバイト）
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
						cursor: pointer;
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
					margin: 0.75rem 0;
					li {
						display: flex;
						margin-bottom: 0.5rem;
						.icon {
							display: flex;
							justify-content: center;
							align-items: baseline;
							font-size: 1.5rem;
						}
						.right {
							padding-left: 0.5rem;
							a {
								color: #4e9adb;
								&:hover {
									text-decoration: underline;
								}
							}
						}
					}
				}
			}
		}

	script.
		import moment from 'moment'

		this.birthday = '1994-07-30'
		this.age = moment().diff(this.birthday, 'years')
		this.face = true

		clickFace() {
			this.face = !this.face
		}