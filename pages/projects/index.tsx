import * as React from 'react'

import { getClassNameFunction } from 'utils'

import Projects from 'components/projects'
import Footer from 'components/footer'

import './index.scss'

const getClassName = getClassNameFunction('pagesProjectAll')

const categories = ['All', 'Android', 'Web', 'Desktop', 'Design'] as const
type Category = typeof categories[number]

const ProjectAllPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(categories[0])

  return (
    <div className={getClassName()}>
      <section className={getClassName('section')}>
        <div className='container'>
          <h2 className='section-title'>Projects</h2>
          <ul className={getClassName('projectButtons')}>
            {categories.map((c) => (
              <a onClick={() => setSelectedCategory(c)} key={c}>
                <li
                  className={`${getClassName('projectButton')}${
                    selectedCategory === c ? ` ${getClassName('projectButtonSelected')}` : ''
                  }`}
                >
                  {c}
                </li>
              </a>
            ))}
          </ul>
          <Projects category={selectedCategory} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProjectAllPage
