import * as React from 'react'

import Projects from 'components/projects'
import Footer from 'components/footer'

import styles from './index.module.scss'

const categories = ['All', 'Android', 'Web', 'Desktop', 'Design'] as const
type Category = typeof categories[number]

const ProjectAllPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(categories[0])

  return (
    <div>
      <section className={styles.section}>
        <div className='container'>
          <h2 className='section-title'>Projects</h2>
          <ul className={styles.projectButtons}>
            {categories.map((c) => (
              <a onClick={() => setSelectedCategory(c)} key={c}>
                <li
                  className={`${styles.projectButton}${
                    selectedCategory === c ? ` ${styles.projectButtonSelected}` : ''
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
