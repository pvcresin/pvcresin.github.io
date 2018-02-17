about
	.base
		.pure-g
			.about-img.pure-u-sm-1-4.pure-u-1-1
				.pure-u-sm-1-1.pure-u-1-2(click='{clickFace}')
					img(show='{face}' src='resources/my-face.png')
					img(show='{!face}' src='resources/icon-pvcresin.svg')
			.pure-u-sm-1-24.pure-u-1-1
			.about-text.pure-u-sm-17-24.pure-u-1-1
				|KotlinとJSが好きなので，主にAndroidアプリやWebアプリを作って生きていきたい．
				br
				|人と意見を交換し，議論しながらモノを作っていきたい．
				br
				| 新しいものが好きなので，貪欲に学んでいく．
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
						.right.pure-u-11-12 明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士1年{' '}
					li.pure-g
						.icon.pure-u-1-12.pure-u-lg-1-24
							i.fa.fa-suitcase(aria-hidden='true')
						.right.pure-u-11-12
							a(href='http://soryu-sha.jp/') 想隆社
							span （フロントエンドエンジニア・アルバイト）
	style(scoped).
		.base {
			padding: 0.75rem;
		}
		a {
			color: #4e9adb;
		}
		a:hover {
			text-decoration: underline;
		}
		.about-img {
			text-align: center;
			padding: 0.75rem;
		}
		.about-img > div img {
			border-radius: 50%;
			width: 100%;
		}
		.about-text {
			text-align: justify;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0.75rem;
			font-size: 1.1rem;
		}
		ul {
			margin: 0.75rem 0;
		}
		ul > li {
			display: flex;
			margin-bottom: 0.5rem;
		}
		.icon {
			display: flex;
			justify-content: center;
			align-items: baseline;
			font-size: 1.5rem;
		}
		.right {
			padding-left: 0.5rem;
		}
	script.
		import moment from 'moment'

		this.birthday = '1994-07-30'
		this.age = moment().diff(this.birthday, 'years')
		this.face = true

		clickFace() {
			this.face = !this.face
		}