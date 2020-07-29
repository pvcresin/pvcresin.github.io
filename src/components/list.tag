<list class="pure-g pure-u-1-1">
	<ul>
		<li each="{item in opts.items}">
			<h3>
				<a href="{item.link}" target="_blank">{item.title}</a>
				<div class="right">
					<hr />
					<span>
						<span class="date" if="{item.date.length &lt;= 7}">{item.date}</span>
						<span class="term" if="{item.date.length &gt; 7}">{item.date}</span>
					</span>
				</div>
			</h3>
			<p class="sub" each="{t in item.texts}">{t}</p>
		</li>
	</ul>

	<style type="scss">
		:scope {
			> ul {
				padding: 0.75rem;
				li {
					margin-bottom: 1rem;
					h3 {
						display: flex;
						margin: auto;
						align-items: center;
						a {
							color: #4e9adb;
							padding: 0.75rem;
							text-align: justify;
							&:hover {
								text-decoration: underline;
							}
						}
						.right {
							display: inline-flex;
							flex-grow: 1;
							align-items: center;
							hr {
								display: inline-flex;
								flex-grow: 1;
								border: 1.5px solid gray;
								border-radius: 1rem;
								min-width: 1rem;
								background: gray;
							}
							span {
								padding: 0.75rem;
								display: inline-flex;
								span {
									background: #555;
									color: white;
									padding: 0.1rem 0.3rem;
									border-radius: 0.3rem;
									display: inline-block;
									text-align: center;
									font-size: 0.8rem;
									font-weight: normal;
									&.date {
										min-width: 4rem;
									}
									&.term {
										min-width: 8rem;
									}
								}
							}
						}
					}
					.sub {
						color: #bdbdbd;
						padding: 0 0.75rem;
						font-weight: 300;
						text-align: justify;
					}
				}
			}
		}
	</style>
</list>
