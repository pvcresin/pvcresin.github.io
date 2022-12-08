import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { WidthContainer } from '@/components/WidthContainer'

import styles from './404.module.scss'

const NotFoundPage = () => (
  <div className='root'>
    <Navigation />
    <section className={styles.content}>
      <WidthContainer>
        <h1>Page Not Found</h1>
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
