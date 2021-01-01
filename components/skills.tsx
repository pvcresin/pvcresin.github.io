import styles from './skills.module.scss'

const skills = [
  {
    name: 'Android',
    sub: 'Rx Okhttp Retrofit',
    level: '70%',
  },
  {
    name: 'Kotlin',
    sub: 'Anko Ktor',
    level: '80%',
  },
  {
    name: 'Java',
    sub: '',
    level: '85%',
  },
  {
    name: 'Processing',
    sub: '',
    level: '90%',
  },
]

const skills1 = [
  {
    name: 'HTML',
    sub: 'Pug Markdown',
    level: '90%',
  },
  {
    name: 'CSS',
    sub: 'Sass PostCSS CSS-Modules',
    level: '85%',
  },
  {
    name: 'JavaScript',
    sub: 'React Vue Node',
    level: '90%',
  },
  {
    name: 'PHP',
    sub: '',
    level: '40%',
  },
]

const skills2 = [
  {
    name: 'Git',
    sub: '',
    level: '60%',
  },
  {
    name: 'Illustrator',
    sub: '',
    level: '80%',
  },
  {
    name: 'Cacoo',
    sub: '',
    level: '40%',
  },
  {
    name: 'Prott',
    sub: '',
    level: '30%',
  },
]

const Skills = () => (
  <div>
    <h2 className='section-title'>Skills</h2>
    <div className={`pure-g ${styles.skillContainer}`}>
      <ul className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.skillBox}`}>
        {skills.map((s) => (
          <li className={styles.skill} key={s.name}>
            <div className={styles.skillInfo}>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.level} style={{ width: s.level }}></div>
            </div>
          </li>
        ))}
      </ul>
      <ul className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.skillBox}`}>
        {skills1.map((s) => (
          <li className={styles.skill} key={s.name}>
            <div className={styles.skillInfo}>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.level} style={{ width: s.level }}></div>
            </div>
          </li>
        ))}
      </ul>
      <ul className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.skillBox}`}>
        {skills2.map((s) => (
          <li className={styles.skill} key={s.name}>
            <div className={styles.skillInfo}>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.level} style={{ width: s.level }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Skills
