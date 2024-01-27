'use client'

import { About } from '@/components/About'
import { First } from '@/components/First'
import { Footer } from '@/components/Footer'
import { Like } from '@/components/Like'
import { List } from '@/components/List'
import { Navigation } from '@/components/Navigation'
import { SectionTitle } from '@/components/SectionTitle'
import type { SkillImageData } from '@/components/Skills'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { WidthContainer } from '@/components/WidthContainer'
import { awards, clubs, publications } from '@/data/list'

import type { NextPage } from 'next'

import styles from './index.module.scss'

const IndexPage: NextPage<{ skillImageData: SkillImageData[] }> = ({ skillImageData }) => (
  <div className='root'>
    <Navigation />
    <First />
    <section className={styles.section}>
      <About />
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Like</SectionTitle>
        <Like />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Skills</SectionTitle>
        <Skills skillImageData={skillImageData} />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Timeline</SectionTitle>
        <Timeline />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Awards</SectionTitle>
        <List items={awards} />
        <SectionTitle>Publications</SectionTitle>
        <List items={publications} />
        <SectionTitle>Clubs</SectionTitle>
        <List items={clubs} />
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default IndexPage
