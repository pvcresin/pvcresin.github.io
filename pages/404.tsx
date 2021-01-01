import { getClassNameFunction } from 'utils'

import Footer from 'components/footer'

import './404.scss'

const getClassName = getClassNameFunction('pagesOther')

const NotFoundPage = () => (
  <div className={getClassName()}>
    <section className={getClassName('content')}>
      <div className='container'>
        <h1>Page Not Found</h1>
      </div>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
