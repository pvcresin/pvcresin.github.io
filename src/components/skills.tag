<skills>
  <h2 class="section-title">Skills</h2>
  <div class="pure-g">
    <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1">
      <li each="{ s in skills }">
        <div class="skill-info">
          <span class="name">{s.name}</span><span class="sub">{s.sub}</span>
        </div>
        <div class="bar">
          <div class="level" style="width:{s.level};"></div>
        </div>
      </li>
    </ul>
    <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1">
      <li each="{ s in skills1 }">
        <div class="skill-info">
          <span class="name">{s.name}</span><span class="sub">{s.sub}</span>
        </div>
        <div class="bar">
          <div class="level" style="width:{s.level};"></div>
        </div>
      </li>
    </ul>
    <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1">
      <li each="{ s in skills2 }">
        <div class="skill-info">
          <span class="name">{s.name}</span><span class="sub">{s.sub}</span>
        </div>
        <div class="bar">
          <div class="level" style="width:{s.level};"></div>
        </div>
      </li>
    </ul>
  </div>

  <style type="scss">
    :scope {
      > div {
        padding: 0.75rem;
        .skill-box {
          padding: 0.75rem;
          > li {
            margin-bottom: 1.2rem;
            .skill-info {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            }
            .name {
              font-size: 1.3em;
              margin-right: 0.5rem;
              font-weight: 300;
            }
            .sub {
              font-size: 0.85rem;
              color: #bdbdbd;
            }
            .bar {
              background: #4b4b4b;
              border-radius: 1rem;
              .level {
                height: 0.7rem;
                border-radius: 1rem;
                background: #eaeaea;
              }
            }
          }
        }
      }
    }
  </style>

  <script>
    this.skills = [
      {
        name: 'Android',
        sub: 'Rx Okhttp Retrofit',
        level: '70%',
      },
      {
        name: 'Kotlin',
        sub: 'Anko Ktor',
        level: '80%',
      },
      {
        name: 'Java',
        sub: '',
        level: '85%',
      },
      {
        name: 'Processing',
        sub: '',
        level: '90%',
      },
    ]

    this.skills1 = [
      {
        name: 'HTML',
        sub: 'Pug Markdown',
        level: '90%',
      },
      {
        name: 'CSS',
        sub: 'Sass PostCSS CSS-Modules',
        level: '85%',
      },
      {
        name: 'JavaScript',
        sub: 'React Vue Node',
        level: '90%',
      },
      {
        name: 'PHP',
        sub: '',
        level: '40%',
      },
    ]

    this.skills2 = [
      {
        name: 'Git',
        sub: '',
        level: '60%',
      },
      {
        name: 'Illustrator',
        sub: '',
        level: '80%',
      },
      {
        name: 'Cacoo',
        sub: '',
        level: '40%',
      },
      {
        name: 'Prott',
        sub: '',
        level: '30%',
      },
    ]
  </script>
</skills>
