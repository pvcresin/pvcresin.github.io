like
	h2.section-title Like

	.pure-g
		.like-box.pure-u-1-1.pure-u-sm-1-2.pure-u-md-1-3
			.like
				h3 Do
				hr
				ul
					li(each='{t, i in do}') {l}
						span.icon {i}
						span.text {t}
		.like-box.pure-u-1-1.pure-u-sm-1-2.pure-u-md-1-3
			.like
				h3 Watch
				hr
				ul
					li(each='{t, i in watch}')
						span.icon {i}
						span.text {t}
		.like-box.pure-u-1-1.pure-u-sm-1-2.pure-u-md-1-3
			.like
				h3 Eat
				hr
				ul
					li(each='{t, i in eat}')
						span.icon {i}
						span.text {t}

	style(type='scss').
		:scope {
			display: block;
			> div {
				padding: 0.75rem;
				.like-box {
					padding: 0.75rem;
					.like {
						background: #414141;
						padding: 0.6rem 1rem;
						border-radius: 0.3rem;
						h3 {
							font-size: 1.4rem;
							margin-bottom: 0.5rem;
						}
						hr {
							border-radius: 1rem;
							margin: 0.5rem 0;
							border: 1.5px solid;
							border-color: grey;
							background: gray;
						}
						ul li {
							line-height: 2rem;
							.icon {
								font-size: 1.4rem;
								width: 2rem;
								display: inline-flex;
								justify-content: center;
							}
							.text {
								font-size: 1.2rem;
							}
						}
					}
				}
			}
		}

	script.
		this.do = {
			'💻': 'プログラミング',
			'👟': '散歩',
			'🎤': '一人カラオケ',
			'🚗': 'ミニチュア集め',
		}

		this.watch = {
			'🎬': '映画',
			'😆': 'お笑いネタ',
			'👖': '服',
			'📺': 'メディアアート'
		}

		this.eat = {
			'🍣': '寿司',
			'🍕': 'ピザ',
			'🍜': 'ラーメン',
			'🍰': 'ケーキ'
		}