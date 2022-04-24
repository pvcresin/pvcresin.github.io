import About from 'components/about'
import Education from 'components/education'
import Clubs from 'components/clubs'
import Skills from 'components/skills'
import Like from 'components/like'
import Footer from 'components/footer'
import Navigation from 'components/navigation'

import styles from './about.module.scss'

const AboutPage = () => (
  <div className={styles.root}>
    <Navigation />
    <section>
      <div className='container'>
        <About />
        <Like />
        <Skills />
        <Education />
        <Clubs />
      </div>
    </section>
    <Footer />
  </div>
)

export default AboutPage
