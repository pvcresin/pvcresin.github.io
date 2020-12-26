import { getClassNameFunction } from 'utils'

import First from 'components/first'
import About from 'components/about'
import Projects from 'components/projects'
import Awards from 'components/awards'
import Publications from 'components/publications'
import Clubs from 'components/clubs'
import More from 'components/more'
import Footer from 'components/footer'

import './app.scss'

const getClassName = getClassNameFunction('pages-top')

const IndexPage = () => (
  <div className={getClassName()}>
    <First />
    <section className={getClassName('section')}>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <About />
        <More text='detail' title='View detailed profile' link='/about' />
      </div>
    </section>
    <section className={getClassName('section')}>
      <div className='container'>
        <h2 className='section-title'>Projects</h2>
        <Projects limit={3} />
        <More title='View all projects' link='/projects' />
      </div>
    </section>
    <section className={getClassName('section')}>
      <div className='container'>
        <h2 className='section-title'>Awards</h2>
        <Awards />
        <h2 className='section-title'>Publications</h2>
        <Publications />
        <h2 className='section-title'>Clubs</h2>
        <Clubs />
      </div>
    </section>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
