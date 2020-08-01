<more>
  <div class="components-more">
    <a href="{opts.link}" title="{opts.title}">
      <span class="more-button">{text}</span>
    </a>
  </div>

  <style type="scss">
    .components-more {
      padding: 0 1.5rem 1.5rem 1.5rem;
      display: flex;
      justify-content: center;
      > a > span {
        padding: 0.5rem;
        background: grey;
        color: white;
        border-radius: 3rem;
        min-width: 10rem;
        text-align: center;
        display: block;
        &:hover {
          background: #a3a3a3;
        }
      }
    }
  </style>
  <script>
    this.text = this.opts.text !== undefined ? this.opts.text : 'more'
  </script>
</more>
