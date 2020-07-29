<top>
  <first></first>
  <section>
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <about></about>
      <more text="detail" title="View detailed profile" link="#profile"></more>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <projects limit="3"></projects>
      <more title="View all projects" link="#projects"></more>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="section-title">Awards</h2>
      <awards></awards>
      <h2 class="section-title">Publications</h2>
      <publications></publications>
      <h2 class="section-title">Clubs</h2>
      <clubs></clubs>
    </div>
  </section>
  <footer></footer>

  <style type="scss">
    :scope {
      display: block;
      min-height: 100vh;
      > section {
        &:nth-child(2n) {
          background: #2b2b2b;
          color: #efefef;
        }
        &:nth-child(2n + 1) {
          background: #eeeeee;
          color: #222222;
        }
      }
    }
  </style>

  <script>
    import first from '../components/first'
    import about from '../components/about'
    import projects from '../components/projects'
    import awards from '../components/awards'
    import publications from '../components/publications'
    import clubs from '../components/clubs'
    import more from '../components/more'
    import footer from '../components/footer'

    this.on('route', () => {
      const path = window.location.hash
      if (window.scrolls[`${path}`] === undefined) {
        window.scroll(0, 0)
      } else {
        window.scroll(0, window.scrolls[`${path}`])
      }
    })
  </script>
</top>
