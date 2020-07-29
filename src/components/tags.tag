<tags>
	<span each="{t in opts.tags}">{t}</span>
	<style type="scss">
	:scope {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0;
		margin: 0.75rem 0;
		> span {
			margin: 0 0.5rem 0.5rem 0;
			padding: 0.1rem 0.3rem;
			border-radius: 0.2rem;
			background: #555;
			color: #eee;
		}
	}
	</style>
</tags>
