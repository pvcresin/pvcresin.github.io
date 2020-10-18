<social>
  <div class="components-social">
    <ul>
      <li>
        <a
          href="https://www.facebook.com/raika.toriyama"
          target="_blank"
          title="Facebook"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-f fa-2x"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/pvcresin/"
          target="_blank"
          title="Twitter"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter fa-2x"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/pvcresin/"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/pvcresin/"
          target="_blank"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
      </li>
      <li>
        <a
          href="https://pvcresin.hatenablog.com/"
          target="_blank"
          title="Hatena Blog"
          rel="noopener noreferrer"
        >
          <div class="icon-box hatena"></div>
        </a>
      </li>
      <li>
        <a
          href="https://www.wantedly.com/users/18220619"
          target="_blank"
          title="Wantedly"
          rel="noopener noreferrer"
        >
          <div class="icon-box wantedly"></div>
        </a>
      </li>
    </ul>
  </div>

  <style type="scss">
    .components-social {
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
                mask-image: url(./public/icon-hatena.svg);
                -webkit-mask-image: url(./public/icon-hatena.svg);
              }
              &.wantedly {
                mask-image: url(./public/icon-wantedly.svg);
                -webkit-mask-image: url(./public/icon-wantedly.svg);
              }
            }
          }
        }
      }
    }
  </style>
</social>
