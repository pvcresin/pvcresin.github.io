social#social
	ul
		li
			a(href='https://www.facebook.com/raika.toriyama' target='_blank' title='Facebook' rel='noopener noreferrer')
				i.fab.fa-facebook-f.fa-2x
		li
			a(href='https://twitter.com/pvcresin/' target='_blank' title='Twitter' rel='noopener noreferrer')
				i.fab.fa-twitter.fa-2x
		li
			a(href='https://github.com/pvcresin/' target='_blank' title='GitHub' rel='noopener noreferrer')
				i.fab.fa-github.fa-2x
		li
			a(href='https://www.instagram.com/pvcresin/' target='_blank' title='Instagram' rel='noopener noreferrer')
				i.fab.fa-instagram.fa-2x
		li
			a(href='https://pvcresin.hatenablog.com/' target='_blank' title='Hatena Blog' rel='noopener noreferrer')
				.icon-box.hatena
		li
			a(href='https://www.wantedly.com/users/18220619' target='_blank' title='Wantedly' rel='noopener noreferrer')
				.icon-box.wantedly

	style(type='scss').
		:scope {
			> ul {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1rem 0;
				li {
					display: inline-block;
					a {
						color: #525252;
						vertical-align: sub;
						display: inline-block;
						width: 3rem;
						&:hover {
							color: white;
						}
						.icon-box {
							margin: auto;
							width: 2rem;
							height: 2rem;
							background: #525252;
							&:hover {
								background: white;
							}
							&.hatena {
								mask-image: url(./resources/icon-hatena.svg);
								-webkit-mask-image: url(./resources/icon-hatena.svg);
							}
							&.wantedly {
								mask-image: url(./resources/icon-wantedly.svg);
								-webkit-mask-image: url(./resources/icon-wantedly.svg);
							}
						}
					}
				}
			}
		}