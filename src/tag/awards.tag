awards#awards
	.container.pure-g
		h2.pure-u-1-1 Awards
		list(items='{awards}')

	script.
		import list from './list'

		this.awards = [{
			date: '2017-12',
			title: '信州未来アプリコンテスト0',
			texts: [
				'信越情報通信懇談会会長賞 受賞',
				'プロジェクト: MiddleDrive'
			],
			link: 'http://www.pref.nagano.lg.jp/joho/app-contest/app-contest0',
		},{
			date: '2015-05',
			title: 'Cloud n アプリケーションコンテスト',
			texts: [
				'WebRTC賞 受賞',
				'プロジェクト: Ichimonitto'
			],
			link: 'http://www.cloudn-service.com/cam04-deven/decon/tohyo/',
		}]