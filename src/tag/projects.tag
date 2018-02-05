projects#projects
	.container
		h2 Projects
		.card-box
			div.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1(each='{w in projects}')
				div.card
					img(src='resources/{w.img}')
					.content
						h4 {w.name}
						p {w.sub}

	style(scoped).
		.card-box {
			padding: 0.75rem;
			display: flex;
			flex-wrap: wrap;
		}
		.card-box > div {
			padding: 0.75rem;
		}
		.card {
			cursor: pointer;
			background: white;
			height: 100%;
			box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
			border-radius: 0.3rem;
		}
		.card:hover {
			box-shadow: 0 8px 10px rgba(10, 10, 10, 0.1), 0 0 6px 4px rgba(10,10,10,.1);
		}
		.card img {
			border-radius: 0.3rem 0.3rem 0 0;
			display: block;
		    width: 100%;
			background: gray;
			border-bottom: 1px solid #ddd;
		}
		.content {
			padding: 0.8rem 1rem;
		}
		.content h4 {
			font-size: 1.2rem;
			margin-bottom: 0.3rem;
		}
		.content p {
			font-size: 0.9rem;
		}

	script.
		this.projects = [{
			name: 'SensorPipe',
			sub: 'スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'GeoMelody',
			sub: '環境音を録音してネット上に集約するサウンドスケープSNS',
			img: 'project-GeoMelody-16-9.png'
		},{
			name: 'WristSlide',
			sub: 'イメージセンサを用いた手首を滑らせることによるスマートウォッチの片手操作手法',
			img: 'project-WristSlide-16-9.png'
		},{
			name: 'MiddleDrive',
			sub: 'Bluetooth通信によるアドホック型ドキュメント共同編集アプリ',
			img: 'project-MiddleDrive-16-9.png'
		},{
			name: 'Ichimonitto',
			sub: 'ビデオチャットをしながらクイズ番組形式で回答する一問一答学習支援サービス',
			img: 'project-Ichimonitto-16-9.png'
		},{
			name: 'SoumuSSML',
			sub: '聴覚障害者のための新しい電子書籍フォーマットに対応した出版社用クラウド編集システム',
			img: 'project-SoumuSSML-16-9.png'
		}]

		// http://shisonoha.net/portfolio/buddabeautify/
		// http://www.styleshout.com/templates/preview/Ceevee10/#portfolio
		// https://www.squarespace.com/templates
		// https://fontawesome.com/icons/chevron-down?style=solid
		// http://basscss.com/
		// https://purecss.io/grids/