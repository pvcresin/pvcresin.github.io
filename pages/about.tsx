import { getClassNameFunction } from 'utils'

import About from 'components/about'
import Education from 'components/education'
import Skills from 'components/skills'
import Like from 'components/like'
import Footer from 'components/footer'

import './about.scss'

const getClassName = getClassNameFunction('pages-profile')

const AboutPage = () => (
  <div className={getClassName()}>
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
