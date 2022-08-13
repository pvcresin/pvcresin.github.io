import { About } from '@components/about'
import { Footer } from '@components/footer'
import { Like } from '@components/like'
import { List } from '@components/list'
import { Navigation } from '@components/navigation'
import { Skills } from '@components/skills'
import { schools, clubs } from '@data/list'

const AboutPage = () => (
  <div className='root'>
    <Navigation />
    <section>
      <div className='container'>
        <About />
        <Like />
        <Skills />
        <h2 className='section-title'>Education</h2>
        <List items={schools} />
        <h2 className='section-title'>Clubs</h2>
        <List items={clubs} />
      </div>
    </section>
    <Footer />
  </div>
)

export default AboutPage
