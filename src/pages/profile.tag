<profile>
  <section>
    <div class="container">
      <h2 class="section-title">Profile</h2>
      <about></about>
      <like></like>
      <skills></skills>
      <education></education>
    </div>
  </section>
  <footer></footer>

  <style type="scss">
    :scope {
      display: block;
      background: #2b2b2b;
      color: #efefef;
    }
  </style>

  <script>
    import scroll from '../js/scroll'
    import about from '../components/about'
    import education from '../components/education'
    import skills from '../components/skills'
    import like from '../components/like'
    import footer from '../components/footer'

    this.on('route', () => {
      scroll.move()
    })
  </script>
</profile>
