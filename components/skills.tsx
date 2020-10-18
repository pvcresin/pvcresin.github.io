import './skills.scss'

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

const Skills = () => {
  return (
    <div className='components-skills'>
      <h2 className='section-title'>Skills</h2>
      <div className='pure-g'>
        <ul className='skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1'>
          {skills.map((s) => (
            <li key={s.name}>
              <div className='skill-info'>
                <span className='name'>{s.name}</span>
                <span className='sub'>{s.sub}</span>
              </div>
              <div className='bar'>
                <div className='level' style={{ width: s.level }}></div>
              </div>
            </li>
          ))}
        </ul>
        <ul className='skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1'>
          {skills1.map((s) => (
            <li key={s.name}>
              <div className='skill-info'>
                <span className='name'>{s.name}</span>
                <span className='sub'>{s.sub}</span>
              </div>
              <div className='bar'>
                <div className='level' style={{ width: s.level }}></div>
              </div>
            </li>
          ))}
        </ul>
        <ul className='skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1'>
          {skills2.map((s) => (
            <li key={s.name}>
              <div className='skill-info'>
                <span className='name'>{s.name}</span>
                <span className='sub'>{s.sub}</span>
              </div>
              <div className='bar'>
                <div className='level' style={{ width: s.level }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
