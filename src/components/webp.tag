<webp>
  <script>
    this.on('mounted', () => {
      console.log(this.opts)
    })
  </script>

  <div class="components-webp">
    <picture>
      <source srcset="resources/{opts.src||opts.riotSrc}.webp" type="image/webp" />
      <source srcset="resources/{opts.src||opts.riotSrc}.png" type="image/png" />
      <img src="resources/{opts.src||opts.riotSrc}.webp" />
    </picture>
  </div>

  <style type="scss">
    .components-webp {
      > picture {
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
        }
      }
    }
  </style>
</webp>
