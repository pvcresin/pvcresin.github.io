import { FadeInSection } from './FadeInSection'
import styles from './skills.module.scss'

// logo: https://simpleicons.org/
type SkillData = { text: string; logo?: string; color?: string }

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

export const Skills = () => (
  <div className={styles.root}>
    {skillList.map(({ category, list }) => (
      <ul className={styles.row} key={category}>
        <h3>{category}</h3>
        <FadeInSection>
          {list.map(({ text, logo = text, color = '4b4b4b' }) => (
            <li key={text} className={styles.badgeContainer}>
              <img
                className={styles.badge}
                alt={text}
                // https://shields.io/
                src={`https://img.shields.io/badge/-${text}-${color}?style=flat-square&logo=${logo}&logoColor=white`}
                loading='lazy'
              />
            </li>
          ))}
        </FadeInSection>
      </ul>
    ))}
  </div>
)
