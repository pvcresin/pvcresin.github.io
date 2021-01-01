import dayjs from 'dayjs'

import { getClassNameFunction } from 'utils'

import Social from './social'

import './footer.scss'

const getClassName = getClassNameFunction('componentsFooter')

const Footer = () => {
  const year = dayjs().format('YYYY')

  return (
    <div className={getClassName()}>
      <div className={`container ${getClassName('container')}`}>
        <Social />
        <p className={getClassName('copyright')}>© {year} pvcresin</p>
      </div>
    </div>
  )
}

export default Footer
