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
			li MiddleDrive
			li Ichimonitto
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
			img: 'project-sensorpipe.jpg'
		},{
			name: 'SoumuSSML',
			sub: '総務省',
			img: 'project-sensorpipe.jpg'
		},{
			name: 'MiddleDrive',
			sub: 'Bluetooth',
			img: 'project-sensorpipe.jpg'
		},{
			name: 'Ichimonitto',
			sub: 'ビデオチャットをしながらクイズ番組形式で回答する学習支援システム',
			img: 'project-sensorpipe.jpg'
		},{
			name: 'GeoMelody',
			sub: 'ビデオチャットをしながらクイズ番組形式で回答する学習支援システムビデオチャットをしながらクイズ番組形式で回答する学習支援システム',
			img: 'project-sensorpipe.jpg'
		}]