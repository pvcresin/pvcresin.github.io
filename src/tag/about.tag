about#about
	.container.pure-g
		h2.pure-u-1-1 About Me
		.about-img.pure-u-sm-1-4.pure-u-1-1
			.pure-u-sm-1-1.pure-u-1-2(click='{clickFace}')
				img(show='{face}' src='resources/my-face.jpg')
				img(show='{!face}' src='resources/icon-pvcresin.svg')
		.about-text.pure-u-sm-3-4.pure-u-1-1
			|KotlinとJSが好きなので，主にAndroidアプリやWebアプリを作って生きていきたい．
			br
			|人と意見を交換し，議論しながらモノを作っていきたい．
			br
			| 新しいものが好きなので，貪欲に学んでいく．
			ul
				li.pure-g
					.icon.pure-u-1-12.pure-u-lg-1-24
						i.fa.fa-birthday-cake(aria-hidden='true')
					.pure-u-11-12 {birthday} (Age: {age})
				li.pure-g
					.icon.pure-u-1-12.pure-u-lg-1-24
						i.fa.fa-map-marker(aria-hidden='true')
					.pure-u-11-12 Nakano, Tokyo
				li.pure-g
					.icon.pure-u-1-12.pure-u-lg-1-24
						i.fa.fa-envelope(aria-hidden='true')
					.pure-u-11-12 pvcresin0730@gmail.com
				li.pure-g
					.icon.pure-u-1-12.pure-u-lg-1-24
						i.fa.fa-graduation-cap(aria-hidden='true')
					.pure-u-11-12 明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士1年{' '}
						a(href='https://miyashita.com/') 宮下研究室
				li.pure-g
					.icon.pure-u-1-12.pure-u-lg-1-24
						i.fa.fa-suitcase(aria-hidden='true')
					.pure-u-11-12
						a(href='http://soryu-sha.jp/') 想隆社
						|（フロントエンドエンジニア・アルバイト）
	style(scoped).
		a {
			color: #4e9adb;
		}
		a:hover {
			text-decoration: underline;
		}
		.container {
			padding-left: 0.75rem;
			padding-right: 0.75rem;
		}
		.container > div {
			padding: 0.75rem;
		}
		.about-img {
			text-align: center;
		}
		.about-img > div img {
			border-radius: 50%;
			width: 100%;
		}
		.about-text {
			text-align: justify;
		}
		ul {
			margin: 0.75rem 0;
		}
		ul > li {
		    margin: 0.5rem 0;
		}
		ul > li > span {
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}
		.icon {
			display: flex;
			justify-content: center;
			align-items: baseline;
			margin-top: 0.2rem;
			font-size: 1.2rem;
		}
	script.
		import moment from 'moment'

		this.birthday = '1994-07-30'
		this.age = moment().diff(this.birthday, 'years')
		this.face = true

		clickFace() {
			this.face = !this.face
		}