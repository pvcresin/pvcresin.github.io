about
	.container.pure-g
		h2.pure-u-1-1 About Me
		.about-img.pure-u-sm-1-4.pure-u-1-1.pure-g
			.pure-u-sm-1-1.pure-u-1-2
				img(src="resources/icon-pvcresin.svg")
		.about-text.pure-u-sm-3-4.pure-u-1-1
			| texttexttexttexttexttexttexttexttexttext
			| Sed ut perspiciatis unde omnis iste natus error sit voluptatem
			| accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
			| illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			| Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
			| sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
			| Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
			| adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
			| dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
			| exercitationem ullam corporis suscipit laboriosam.
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
	style(scoped).
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