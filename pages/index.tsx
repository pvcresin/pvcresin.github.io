import { NextPage } from 'next'

import First from '../components/first'
import About from '../components/about'
import Projects from '../components/projects'
import Awards from '../components/awards'
import Publications from '../components/publications'
import Clubs from '../components/clubs'
import More from '../components/more'
import Footer from '../components/footer'

const IndexPage: NextPage<{}> = ({}) => (
  <div className='pages-top'>
    <First></First>
    <section>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <About></About>
        <More text='detail' title='View detailed profile' link='/about'></More>
      </div>
    </section>
    <section>
      <div className='container'>
        <h2 className='section-title'>Projects</h2>
        <Projects limit={3}></Projects>
        <More title='View all projects' link='/projects'></More>
      </div>
    </section>
    <section>
      <div className='container'>
        <h2 className='section-title'>Awards</h2>
        <Awards></Awards>
        <h2 className='section-title'>Publications</h2>
        <Publications></Publications>
        <h2 className='section-title'>Clubs</h2>
        <Clubs></Clubs>
      </div>
    </section>
    <Footer></Footer>
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
