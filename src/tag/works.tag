works
	.container
		h2 Works
		.card-box
			div.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1(each='{w in works}')
				div.card
					img(src='resources/{w.img}')
					.content
						h4 {w.name}
						p {w.sub}
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
	.container
		h2.pure-u-1-1 Awards
		ul
			li 2015年　Cloud n アプリケーションコンテスト（WebRTC賞）http://www.cloudn-service.com/cam04-deven/decon/tohyo/
			li 2017年　信州未来アプリコンテスト0（信越情報通信懇談会会長賞，「起業家甲子園・万博」への出場権）http://www.pref.nagano.lg.jp/joho/app-contest/app-contest0
	.container
		h2.pure-u-1-1 Publication
		ul
			li
				| 鳥山 らいか，宮下 芳明. SensorPipe：スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015),
				| 2015.
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
		this.works = [{
			name: 'SensorPipe',
			sub: 'スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'SoumuSSML',
			sub: '総務省',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'MiddleDrive',
			sub: 'Bluetooth通信によるアドホック型ドキュメント共同編集アプリ',
			img: 'project-MiddleDrive-16-9.png'
		},{
			name: 'Ichimonitto',
			sub: 'ビデオチャットをしながらクイズ番組形式で回答する学習支援システム',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'GeoMelody',
			sub: '環境音を録音してネット上に集約するサウンドスケープSNS',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'WristSlide',
			sub: '手首を滑らせることによるスマートウォッチの片手操作手法',
			img: 'project-SensorPipe-16-9.jpg'
		},{
			name: 'ThumbSurface',
			sub: '手首を滑らせることによるスマートウォッチの片手操作手法',
			img: 'project-SensorPipe-16-9.jpg'
		}]