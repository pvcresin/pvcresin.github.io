import { useCallback, useState } from 'react'
import { NextPage } from 'next'

import Projects from '../../components/projects'
import Footer from '../../components/footer'

const categories = ['All', 'Android', 'Web', 'Desktop', 'Design']
const initialSelectedCategory = categories[0]

const ProjectAllPage: NextPage<{}> = ({}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialSelectedCategory)

  return (
    <div className='pages-project_all'>
      <section>
        <div className='container'>
          <h2 className='section-title'>Projects</h2>
          <ul>
            {categories.map((c) => (
              <a onClick={() => setSelectedCategory(c)} key={c}>
                {selectedCategory === c ? <li className='selected'>{c}</li> : <li>{c}</li>}
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
