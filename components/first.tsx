import { getClassNameFunction } from 'utils'

import Social from './social'

import './first.scss'

const getClassName = getClassNameFunction('componentsFirst')

const First = () => (
  <div className={getClassName()}>
    {/* for vertical centering */}
    <nav />
    <div className='container'>
      <h1 className={getClassName('name')}>Raika Toriyama</h1>
      <p className={getClassName('description')}>Web / Android Developer</p>
      <Social />
    </div>
    <div className='container'>
      <div className={getClassName('arrow')}>
        <i className='fas fa-chevron-down fa-3x'></i>
      </div>
    </div>
  </div>
)

export default First
