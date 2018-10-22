webp
	picture
		source(srcset='resources/{opts.src||opts.riotSrc}.webp' type="image/webp")
		source(srcset='resources/{opts.src||opts.riotSrc}.png' type="image/png")
		img(src='resources/{opts.src||opts.riotSrc}.webp')

	style(type='scss').
		:scope {
			display: block;
			> picture {
				width: 100%;
				height: 100%;
				> img {
					width: 100%;
				}
			}
		}

	script.
		this.on('mounted', () => {
			console.log(this.opts)
		})