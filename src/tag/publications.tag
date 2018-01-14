publications#publications
	.container.pure-g
		h2.pure-u-1-1 Publication
		.publications-box.pure-u-1-1
			span.pure-u-sm-1-8.pure-u-1-1 2015
			span.pure-u-sm-7-8.pure-u-1-1(each='{p in publications}') {p}

	style(scoped).
		.publications-box {
			padding: 0.75rem;
		}
		.publications-box > span {
			padding: 0.75rem;
		}
	script.
		this.publications = [
			'鳥山 らいか，宮下 芳明. SensorPipe：スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015), 2015.'
		]