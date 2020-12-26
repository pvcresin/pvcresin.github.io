import { NextPage } from 'next'

import About from '@/components/about'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Like from '@/components/like'
import Footer from '@/components/footer'

import './about.scss'

const AboutPage: NextPage<{}> = ({}) => {
  return (
    <div className='pages-profile'>
      <section>
        <div className='container'>
          <h2 className='section-title'>About</h2>
          <About></About>
          <Like></Like>
          <Skills></Skills>
          <Education></Education>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
