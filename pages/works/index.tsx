import React from 'react'

import { Works } from 'components/works'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

import styles from './index.module.scss'

const WorksPage = () => (
  <div className='root'>
    <Navigation />
    <section className={styles.section}>
      <div className='container'>
        <Works />
      </div>
    </section>
    <Footer />
  </div>
)

export default WorksPage
