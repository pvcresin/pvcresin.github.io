publications#publications
	.container.pure-g
		h2.pure-u-1-1 Publication
		list(items='{publications}')

	script.
		import list from './list'

		this.publications = [{
			date: '2015-12',
			title: 'SensorPipe',
			texts: [
				'鳥山 らいか，宮下 芳明. SensorPipe：スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015), 2015.'
			],
			link: 'https://research.miyashita.com/2015/D160/',
		}]