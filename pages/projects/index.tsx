import { NextPage } from 'next'

// import route from 'riot-route/lib/tag'

// import scroll from '../js/scroll'

import Projects from '../../components/projects'
import Footer from '../../components/footer'

const ProjectAllPage: NextPage<{}> = ({}) => {
  const categories = ['All', 'Android', 'Web', 'Desktop', 'Design']
  const selectedCategory = undefined

  // this.on('route', () => {
  //   if (route.query().category !== undefined) {
  //     this.update({ selectedCategory: route.query().category })
  //   } else {
  //     this.update({ selectedCategory: this.categories[0] })
  //   }

  //   scroll.move()
  // })

  const onClick = (p) => {
    // this.update({ selectedCategory: p })
  }

  return (
    <div className='pages-project_all'>
      <section>
        <div className='container'>
          <h2 className='section-title'>Projects</h2>
          <ul>
            {categories.map((p) => (
              <a onClick={onClick}>
                {selectedCategory === p ? <li className='selected'>{p}</li> : <li>{p}</li>}
              </a>
            ))}
          </ul>
          <Projects category={selectedCategory}></Projects>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default ProjectAllPage
