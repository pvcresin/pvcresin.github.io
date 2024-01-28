'use client'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { WidthContainer } from '@/components/WidthContainer'

import type { Metadata } from 'next'

import styles from './not-found.module.scss'

export const metadata = { title: 'Page Not Found' } satisfies Metadata

const NotFoundPage = () => (
  <div className='root'>
    <Navigation />
    <section className={styles.content}>
      <WidthContainer>
        <h1>{metadata.title}</h1>
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
