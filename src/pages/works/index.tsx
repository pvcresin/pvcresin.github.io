import React from 'react'

import { Footer } from '@components/Footer'
import { Navigation } from '@components/Navigation'
import { Works } from '@components/Works'

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
