import { NextPage } from 'next'

import Footer from '../components/footer'

const NotFoundPage: NextPage<{}> = ({}) => {
  return (
    <div className='pages-other'>
      <section>
        <div className='container'>
          <h1>Page Not Found</h1>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default NotFoundPage
