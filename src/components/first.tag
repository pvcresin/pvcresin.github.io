<first>
	<nav></nav>
	<div class="container">
		<h1>Raika Toriyama</h1>
		<p>Web / Android Developer</p>
		<social></social>
	</div>
	<div class="container">
		<div class="arrow">
			<i class="fas fa-chevron-down fa-3x"></i>
		</div>
	</div>

	<style type="scss">
		:scope {
			text-align: center;
			background: #1a1819;
			color: white;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			> nav {
				margin: 0 auto;
				width: 100%;
				max-width: calc(1200px * 0.8);
				line-height: 3rem;
				> ul {
					display: flex;
					justify-content: space-around;
					> li {
						display: inline-block;
					}
				}
			}
			> .container {
				> h1 {
					font-size: calc(1rem + 250%);
					margin: 0;
				}
				> p {
					font-size: 1.5rem;
					font-family: serif;
					margin-top: 1rem;
				}
				.arrow {
					display: inline-block;
				}
			}
		}
		@media (max-width: 768px) {
			.container {
				> h1 {
					font-size: 2.5rem;
				}
				> p {
					font-size: 1.2rem;
					margin-top: 0.5rem;
				}
			}
		}
	</style>

	<script>
		import social from './social'
	</script>
</first>
