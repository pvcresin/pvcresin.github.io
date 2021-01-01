import Footer from 'components/footer'

import styles from './404.module.scss'

const NotFoundPage = () => (
  <div className={styles.root}>
    <section className={styles.content}>
      <div className='container'>
        <h1>Page Not Found</h1>
      </div>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
