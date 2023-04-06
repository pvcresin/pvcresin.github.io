import { FadeInSection } from '@/components/FadeInSection'

import styles from './Skills.module.scss'

export type SkillImageData = { text: string; dataUrl: string }

export const skillList = [
  {
    category: 'Languages',
    list: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Kotlin', 'Processing'],
  },
  {
    category: 'Frameworks',
    list: ['React', 'Next.js', 'Sass', 'PostCSS', 'CSS Modules'],
  },
  {
    category: 'DevOps',
    list: ['Git', 'GitHub Actions', 'CircleCI', 'OpenAPI', 'webpack', 'Vite'],
  },
  {
    category: 'Design Tools',
    list: ['Figma', 'Adobe Illustrator'],
  },
]

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
