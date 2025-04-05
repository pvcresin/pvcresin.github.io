import { FadeInSection } from '@/components/FadeInSection'

import styles from './Skills.module.scss'

// logo: https://simpleicons.org/
const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { text: 'HTML', logo: 'HTML5' },
      { text: 'CSS', logo: 'CSS3' },
      { text: 'JavaScript' },
      { text: 'TypeScript' },
      { text: 'Java', logo: 'OpenJDK' },
      { text: 'Kotlin' },
      { text: 'Ruby' },
    ],
  },
  {
    category: 'Libraries',
    skills: [
      { text: 'React' },
      { text: 'Sass' },
      { text: 'PostCSS' },
      { text: 'CSS Modules' },
      { text: 'webpack' },
      { text: 'Vite', logo: 'vite' },
      { text: 'Sorbet' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [{ text: 'Next.js' }, { text: 'Electron' }, { text: 'Ruby on Rails' }],
  },
  {
    category: 'DevOps',
    skills: [
      { text: 'Git' },
      { text: 'Docker' },
      { text: 'GitHub Actions' },
      { text: 'CircleCI' },
      { text: 'OpenAPI', logo: 'OpenAPI Initiative' },
    ],
  },
  {
    category: 'Design',
    skills: [{ text: 'Figma' }, { text: 'Adobe Illustrator' }],
  },
]

const toDataURL = async (url: string) => {
  const response = await fetch(url, { cache: 'force-cache' })
  const blob = await response.blob()
  const binaryText = await blob.text()
  const buffer = Buffer.from(binaryText)
  return 'data:' + blob.type + ';base64,' + buffer.toString('base64')
}

const backgroundColor = '3b3b3b'
const textColor = 'ccc'

const getSkillData = async ({ text, logo = text }: { text: string; logo?: string }) => {
  const url = `https://img.shields.io/badge/-${text}-${backgroundColor}?style=flat-square&logo=${logo}&logoColor=${textColor}`
  const imageDataUrl = await toDataURL(url)
  return { text, imageDataUrl }
}

export type SkillDataList = {
  category: string
  skills: {
    text: string
    imageDataUrl: string
  }[]
}[]

export const getSkillDataList = (): Promise<SkillDataList> => {
  return Promise.all(
    skillCategories.map(async ({ category, skills }) => ({
      category,
      skills: await Promise.all(skills.map((skill) => getSkillData(skill))),
    })),
  )
}

export const Skills: React.FC<{ skillDataList: SkillDataList }> = ({ skillDataList }) => {
  return (
    <div className={styles.root}>
      {skillDataList.map(({ category, skills }) => (
        <FadeInSection key={category}>
          <div className={styles.item}>
            <h3 className={styles.category}>{category}</h3>
            <div className={styles.badgeContainer}>
              {skills.map(({ text, imageDataUrl }) => (
                <img
                  key={text}
                  className={styles.badge}
                  alt={text}
                  src={imageDataUrl}
                  loading='lazy'
                  width={'auto'}
                  height={28.8}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  )
}
