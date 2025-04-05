import type { SkillText } from '@/app/page'
import { FadeInSection } from '@/components/FadeInSection'

import styles from './Skills.module.scss'

export type SkillImageData = { text: SkillText; dataUrl: string }

export const skillList = [
  {
    category: 'Languages',
    list: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Ruby'],
  },
  {
    category: 'Libraries',
    list: ['React', 'Sass', 'PostCSS', 'CSS Modules', 'webpack', 'Vite', 'Sorbet'],
  },
  {
    category: 'Frameworks',
    list: ['Next.js', 'Electron', 'Ruby on Rails'],
  },
  {
    category: 'DevOps',
    list: ['Git', 'Docker', 'GitHub Actions', 'CircleCI', 'OpenAPI'],
  },
  {
    category: 'Design',
    list: ['Figma', 'Adobe Illustrator'],
  },
] satisfies { category: string; list: SkillText[] }[]

export const Skills: React.FC<{ skillImageData: SkillImageData[] }> = ({ skillImageData }) => (
  <div className={styles.root}>
    {skillList.map(({ category, list }) => (
      <FadeInSection key={category}>
        <div className={styles.item}>
          <h3 className={styles.category}>{category}</h3>
          <div className={styles.badgeContainer}>
            {list.map((text) => (
              <img
                key={text}
                className={styles.badge}
                alt={text}
                src={skillImageData.find((data) => data.text === text)?.dataUrl}
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
