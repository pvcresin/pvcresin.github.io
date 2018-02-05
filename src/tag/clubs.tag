clubs#clubs
	.container.pure-g
		h2.pure-u-1-1 Clubs
		list(items='{clubs}')

	script.
		import list from './list'

		this.clubs = [{
			date: '2017-04 - 2019.03',
			title: 'fumble waals',
			texts: [
				'オリジナルのボードゲームの制作サークル',
				'同人イベントでの頒布（コミックマーケット・ゲームマーケット）'
			],
			link: 'http://fumblewaals.com/',
		},{
			date: '2016-04 - 2017-06',
			title: 'Nakano Computer Club',
			texts: [
				'プログラミングに関する情報共有や勉強会等の実施',
				'同人イベントでの頒布（コミックマーケット・技術書典）'
			],
			link: 'https://meiji-ncc.tech/',
		},{
			date: '2013-04 - 2017-03',
			title: '総合コンテンツ制作サークル',
			texts: [
				'PCを用いたコンテンツの制作（音楽・動画・ゲーム・イラスト・文芸）',
				'同人イベントでの頒布（コミックマーケット・M3）',
				'設立メンバー＆幹事長'
			],
			link: 'https://twitter.com/ccc_sokon',
		}]