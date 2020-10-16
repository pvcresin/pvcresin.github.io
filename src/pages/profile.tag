<profile>
  <script>
    import scroll from '../js/scroll'

    import About from '../components/about'
    import Education from '../components/education'
    import Skills from '../components/skills'
    import Like from '../components/like'
    import Footer from '../components/footer'

    this.on('route', () => {
      scroll.move()
    })
  </script>

  <div class="pages-profile">
    <section>
      <div class="container">
        <h2 class="section-title">Profile</h2>
        <About></About>
        <Like></Like>
        <Skills></Skills>
        <Education></Education>
      </div>
    </section>
    <Footer></Footer>
  </div>

  <style type="scss">
    .pages-profile {
      background: #2b2b2b;
      color: #efefef;
    }
  </style>
</profile>
