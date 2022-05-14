import * as React from 'react'

import Works from 'components/works'
import Footer from 'components/footer'
import Navigation from 'components/navigation'

import styles from './index.module.scss'

const categories = ['All', 'Android', 'Web', 'Desktop', 'Design'] as const
type Category = typeof categories[number]

const WorksPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(categories[0])

  return (
    <div className='root'>
      <Navigation />
      <section className={styles.section}>
        <div className='container'>
          <ul className={styles.buttons}>
            {categories.map((c, index) => (
              <a
                onClick={() => setSelectedCategory(c)}
                key={c}
                role='link'
                className={styles.link}
                tabIndex={10 + index}
              >
                <li
                  className={`${styles.button}${
                    selectedCategory === c ? ` ${styles.buttonSelected}` : ''
                  }`}
                >
                  {c}
                </li>
              </a>
            ))}
          </ul>
          <Works category={selectedCategory} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default WorksPage
