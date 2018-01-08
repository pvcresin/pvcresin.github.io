app
	div
		header
		main
			section
				.container.pure-g
					h2.pure-u-1-1 About Me
					.about-img.pure-u-sm-1-4.pure-u-1-1.pure-g
						.pure-u-sm-1-1.pure-u-1-2
							img(src="../../resources/pvcresin.svg", alt="")
					.about-text.pure-u-sm-3-4.pure-u-1-1 texttexttexttexttexttexttexttexttexttext
						| Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						| accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
						| illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						| Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
						| sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
						| Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
						| adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
					h2.pure-u-1-1 Skills
					ul.pure-u-sm-1-3.pure-u-1-1
						li Kotlin(Android (Android Wear), Ktor, SpringBoot)
						li Java (下の階層にAndroid(Android Wear))
						li Processing
					ul.pure-u-sm-1-3.pure-u-1-1
						li HTML(pug)
						li CSS(sass(scss) postcss css-modules)
						li JavaScript(ES6, webpack, riot, react, redux)
						li Node.js(Express)
						li PHP(WordPress, Laraval)
					ul.pure-u-sm-1-3.pure-u-1-1
						li Illustrator
						li Cacoo
						li Prott
			section
				.container
					h2.pure-u-1-1 Works
					table
						thead
							tr
								th Name
								th Description
								th Platform
								th Team
						tbody
							tr
								td
									a(href='https://ichimonitto.mloa.ml/', target='_blank') Ichimonitto
								td ビデオチャットをしながらクイズ番組形式で回答する学習支援システム
								td Web
								td 意識中くらい
			section
				.container
					h2.pure-u-1-1 Prize
					ul
						li MiddleDrive
						li Ichimonitto
			section
				.container
					h2.pure-u-1-1 Publication
					ul
						li
							| 鳥山 らいか，宮下 芳明. SensorPipe：スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015),
							| 2015.
			section
				.container
					h2.pure-u-1-1 Contact
					p mail form left
					p map right
		footer
			.container
				social
				p © Copyright 2018 pvcresin
		div
			ul
				li
					span
						i.fa.fa-birthday-cake(aria-hidden='true')
					| 1994/7/30
				li
					span
						i.fa.fa-map-marker(aria-hidden='true')
					| Katsushika, Tokyo
				li
					span
						i.fa.fa-envelope(aria-hidden='true')
					| pvcresin0730@gmail.com
				li
					span
						i.fa.fa-graduation-cap(aria-hidden='true')
					| 明治大学大学院先端数理科学研究科先端メディアサイエンス専攻
					br
					span
					| 宮下研究室
				li
					span
						i.fa.fa-suitcase(aria-hidden='true')
					| 想隆社(フロントエンド)
				li
					span
						i.fa.fa-users(aria-hidden='true')
					a(href='http://mloa.github.io/', target='_blank') 意識中くらい
					| ,
					a(href='http://fumblewaals.com/', target='_blank') ファンブルワールス
	script.
		import header from './header'
		import social from './social'