import { FadeInSection } from './FadeInSection'
import styles from './skills.module.scss'

// logo: https://simpleicons.org/
type SkillData = { text: string; logo?: string; backgroundColor?: string }

const skillList: { category: string; list: SkillData[] }[] = [
  {
    category: 'Languages',
    list: [
      { text: 'JavaScript' },
      { text: 'TypeScript' },
      { text: 'HTML', logo: 'HTML5' },
      { text: 'CSS', logo: 'CSS3' },
      { text: 'Java', logo: 'OpenJDK' },
      { text: 'Kotlin' },
      { text: 'Processing', logo: 'Processing Foundation' },
    ],
  },
  {
    category: 'Frameworks',
    list: [
      { text: 'React' },
      { text: 'Next.js' },
      { text: 'Sass' },
      { text: 'PostCSS' },
      { text: 'CSS Modules' },
    ],
  },
  {
    category: 'DevOps',
    list: [
      { text: 'Git' },
      { text: 'GitHub Actions' },
      { text: 'CircleCI' },
      { text: 'OpenAPI', logo: 'OpenAPI Initiative' },
      { text: 'webpack' },
    ],
  },
  {
    category: 'Design Tools',
    list: [{ text: 'Figma' }, { text: 'Adobe Illustrator' }],
  },
]

const backgroundColor = '3b3b3b'
const textColor = 'ccc'

export const Skills = () => (
  <div className={styles.root}>
    {skillList.map(({ category, list }) => (
      <FadeInSection key={category}>
        <div className={styles.item}>
          <h3>{category}</h3>
          <div className={styles.badgeContainer}>
            {list.map(({ text, logo = text }) => (
              <img
                key={text}
                className={styles.badge}
                alt={text}
                // https://shields.io/
                src={`https://img.shields.io/badge/-${text}-${backgroundColor}?style=flat-square&logo=${logo}&logoColor=${textColor}`}
                loading='lazy'
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    ))}
  </div>
)
