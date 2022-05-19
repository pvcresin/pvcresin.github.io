import { About } from '@components/about'
import { Clubs } from '@components/clubs'
import { Education } from '@components/education'
import { Footer } from '@components/footer'
import { Like } from '@components/like'
import { Navigation } from '@components/navigation'
import { Skills } from '@components/skills'

const AboutPage = () => (
  <div className='root'>
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
