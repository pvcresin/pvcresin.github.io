skills
	.container.pure-g
		h2.pure-u-1-1 Skills
		ul.skill-box.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1
			li(each="{ s in skills }")
				.skill-info
					span.name {s.name}
					span.sub {s.sub}
				.bar
					.level(style='width:{s.level};')
		ul.skill-box.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1
			li(each="{ s in skills1 }")
				.skill-info
					span.name {s.name}
					span.sub {s.sub}
				.bar
					.level(style='width:{s.level};')
		ul.skill-box.pure-u-sm-1-2.pure-u-md-1-3.pure-u-1-1
			li(each="{ s in skills2 }")
				.skill-info
					span.name {s.name}
					span.sub {s.sub}
				.bar
					.level(style='width:{s.level};')

	style(scoped).
		.skill-box {
			padding: 1.5rem;
		}
		.skill-box li {
			margin-bottom: 1rem;
		}
		.skill-box li .skill-info {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
		}
		.skill-box li .name {
			font-size: 1.3em;
			margin-right: 0.5rem;
		}
		.skill-box li .sub {
			font-size: 0.85rem;
			color: #bdbdbd;
		}
		.skill-box li .bar {
			background: #4b4b4b;
		}
		.skill-box li .bar .level {
			height: 1rem;
			background: #eaeaea;
		}

	script.
		this.skills = [{
			name: 'Android',
			sub: 'Rx Okhttp Retrofit',
			level: '70%'
		},{
			name: 'Kotlin',
			sub: 'Anko Ktor SpringBoot',
			level: '80%'
		},{
			name: 'Java',
			sub: '',
			level: '80%'
		},{
			name: 'Processing',
			sub: '',
			level: '90%'
		}]

		this.skills1 = [{
			name: 'HTML',
			sub: 'Pug Markdown',
			level: '90%'
		},{
			name: 'CSS',
			sub: 'Sass PostCSS CSS-Modules',
			level: '80%'
		},{
			name: 'JS',
			sub: 'Riot React Redux Node',
			level: '90%'
		},{
			name: 'PHP',
			sub: '',
			level: '40%'
		}]

		this.skills2 = [{
			name: 'Git',
			sub: '',
			level: '60%'
		},{
			name: 'Illustrator',
			sub: '',
			level: '80%'
		},{
			name: 'Cacoo',
			sub: '',
			level: '40%'
		}]