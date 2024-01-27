'use client'

import React from 'react'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { WidthContainer } from '@/components/WidthContainer'
import { Works } from '@/components/Works'

import styles from './page.module.scss'

const WorksPage = () => (
  <div className='root'>
    <Navigation />
    <section className={styles.section}>
      <WidthContainer>
        <Works />
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default WorksPage
