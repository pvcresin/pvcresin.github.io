<top>
  <div class="pages-top">
    <First></First>
    <section>
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <About></About>
        <More text="detail" title="View detailed profile" link="#profile"></More>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <Projects limit="3"></Projects>
        <More title="View all projects" link="#projects"></More>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="section-title">Awards</h2>
        <Awards></Awards>
        <h2 class="section-title">Publications</h2>
        <Publications></Publications>
        <h2 class="section-title">Clubs</h2>
        <Clubs></Clubs>
      </div>
    </section>
    <Footer></Footer>
  </div>

  <style type="scss">
    .pages-top {
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
    import First from '../components/first'
    import About from '../components/about'
    import Projects from '../components/projects'
    import Awards from '../components/awards'
    import Publications from '../components/publications'
    import Clubs from '../components/clubs'
    import More from '../components/more'
    import Footer from '../components/footer'

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
