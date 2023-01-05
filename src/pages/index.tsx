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

// logo: https://simpleicons.org/
type SkillData = { text: string; logo?: string }

const skillDataList: SkillData[] = [
  { text: 'JavaScript' },
  { text: 'TypeScript' },
  { text: 'HTML', logo: 'HTML5' },
  { text: 'CSS', logo: 'CSS3' },
  { text: 'Java', logo: 'OpenJDK' },
  { text: 'Kotlin' },
  { text: 'Processing', logo: 'Processing Foundation' },
  { text: 'React' },
  { text: 'Next.js' },
  { text: 'Sass' },
  { text: 'PostCSS' },
  { text: 'CSS Modules' },
  { text: 'Git' },
  { text: 'GitHub Actions' },
  { text: 'CircleCI' },
  { text: 'OpenAPI', logo: 'OpenAPI Initiative' },
  { text: 'webpack' },
  { text: 'Figma' },
  { text: 'Adobe Illustrator' },
]

async function toDataURL(url: string) {
  const response = await fetch(url)
  const blob = await response.blob()
  const binaryText = await blob.text()
  const buffer = Buffer.from(binaryText)
  return 'data:' + blob.type + ';base64,' + buffer.toString('base64')
}

const backgroundColor = '3b3b3b'
const textColor = 'ccc'

const skillDataToSkillImageData = async ({ text, logo = text }: SkillData) => {
  const url = `https://img.shields.io/badge/-${text}-${backgroundColor}?style=flat-square&logo=${logo}&logoColor=${textColor}`
  const dataUrl = await toDataURL(url)
  return { text, dataUrl }
}

export async function getStaticProps() {
  const skillImageData = await Promise.all(
    skillDataList.map((skillData) => skillDataToSkillImageData(skillData)),
  )
  return {
    props: {
      skillImageData,
    },
  }
}

export default IndexPage
