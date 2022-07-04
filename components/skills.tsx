import styles from './skills.module.scss'

// logo: https://simpleicons.org/
type SkillData = { text: string; logo?: string; color?: string }

// https://shields.io/
const Skill = ({ text, logo = text, color = '4b4b4b' }: SkillData) => (
  <img
    className={styles.skillBadge}
    alt={text}
    src={`https://img.shields.io/badge/-${text}-${color}?style=flat-square&logo=${logo}&logoColor=white`}
    loading='lazy'
  />
)

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
    category: 'Design tools',
    list: [{ text: 'Figma' }, { text: 'Adobe Illustrator' }],
  },
]

export const Skills = () => (
  <div>
    <h2 className='section-title'>Skills</h2>
    <div className={styles.skillContainer}>
      {skillList.map(({ category, list }) => (
        <ul className={styles.skillBox} key={category}>
          <h3 className={styles.skillSectionTitle}>{category}</h3>
          {list.map(({ text, logo }) => (
            <li key={text} className={styles.skillBadgeContainer}>
              <Skill logo={logo} text={text} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
)
