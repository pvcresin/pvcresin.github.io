<webp>
    <picture>
			<source srcset="resources/{opts.src||opts.riotSrc}.webp" type="image/webp">
			<source srcset="resources/{opts.src||opts.riotSrc}.png" type="image/png">
			<img src="resources/{opts.src||opts.riotSrc}.webp" />
		</picture>
    <style type="scss">
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
		</style>
		<script>
		this.on('mounted', () => {
			console.log(this.opts)
		})
		</script>
</webp>
