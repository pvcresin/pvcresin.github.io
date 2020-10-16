import dayjs from 'dayjs'

import Social from './social'

const Footer = () => {
  const year = dayjs().format('YYYY')

  return (
    <div className='components-footer'>
      <div className='container'>
        <Social></Social>
        <p>© {year} pvcresin</p>
      </div>
    </div>
  )
}

export default Footer
