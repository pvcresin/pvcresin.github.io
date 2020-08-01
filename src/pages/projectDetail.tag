<projectDetail>
  <div class="pages-project_detail">
    <div class="container">
      <section>
        <div class="video-frame" if="{project.video !== undefined}">
          <iframe
            src="https://www.youtube.com/embed/{project.video}?rel=0"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div class="img-frame" if="{project.video === undefined}">
          <Webp src="{project.img}"></Webp>
        </div>
        <h1>
          <p>{project.name + ': '}</p>
          <span>{project.sub}</span>
        </h1>
        <Tags tags="{project.keywords}"></Tags>
        <div class="chapter">
          <div class="chapter-title">
            <h2>Abstract</h2>
            <hr />
          </div>
          <p>{project.text}</p>
        </div>
        <div class="chapter">
          <div class="chapter-title">
            <h2>Implementation</h2>
            <hr />
          </div>
          <p>{project.implement}</p>
        </div>
        <div class="chapter" if="{project.links !== undefined}">
          <div class="chapter-title">
            <h2>Links</h2>
            <hr />
          </div>
          <ol>
            <li each="{value, key in project.links}">
              <span>{key + ': '}</span><span><a href="{value}">{value}</a></span>
            </li>
          </ol>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>

  <style type="scss">
    .pages-project_detail {
      min-height: 100vh;
      display: block;
      background: #2b2b2b;
      color: #efefef;
      > div > section {
        padding: 1.5rem;
        .video-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          > iframe {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: black;
          }
        }
        .img-frame {
          width: 100%;
          > img {
            width: 100%;
            height: 100%;
            background: black;
          }
        }
        h1 {
          color: white;
          margin: 1rem 0;
          text-align: justify;
        }
        .chapter {
          .chapter-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.5rem 0 1rem 0;
            > h2 {
              font-size: 1.5rem;
              margin-right: 0.5rem;
              color: white;
            }
            > hr {
              flex-grow: 1;
              border: 1.5px solid gray;
              border-radius: 1rem;
              min-width: 1rem;
              background: gray;
            }
          }
          p {
            margin: 0.6rem 0;
            text-align: justify;
          }
          ol {
            padding-left: 2rem;
            li {
              list-style-type: decimal;
              line-height: 1.8rem;
              a {
                color: #4e9adb;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
  </style>

  <script>
    import scroll from '../js/scroll'
    import projectsArray from '../data'

    import Tags from '../components/tags'
    import Webp from '../components/webp'
    import Footer from '../components/footer'

    this.project = {
      name: '',
      sub: '',
      img: '',
      video: '',
      text: '',
      implement: '',
      keywords: [],
    }

    this.on('route', (projectName) => {
      this.update({
        project: projectsArray.filter((d) => d.name === projectName.replace(/_/g, ' '))[0],
      })

      scroll.move()
    })
  </script>
</projectDetail>
