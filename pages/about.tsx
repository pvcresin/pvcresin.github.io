import About from 'components/about'
import Education from 'components/education'
import Skills from 'components/skills'
import Like from 'components/like'
import Footer from 'components/footer'

import styles from './about.module.scss'

const AboutPage = () => (
  <div className={styles.root}>
    <section>
      <div className='container'>
        <h2 className='section-title'>About</h2>
        <About />
        <Like />
        <Skills />
        <Education />
      </div>
    </section>
    <Footer />
  </div>
)

export default AboutPage
