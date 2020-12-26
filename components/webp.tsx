import { getClassNameFunction } from 'utils'

import './webp.scss'

const getClassName = getClassNameFunction('components-webp')

const Webp: React.FC<{ src: string; imageClassName?: string }> = ({ src, imageClassName }) => (
  <div className={getClassName()}>
    <picture className={getClassName('picture')}>
      <source srcSet={`/${src}.webp`} type='image/webp' />
      <source srcSet={`/${src}.png`} type='image/png' />
      <img
        className={`${getClassName('image')}${imageClassName ? ` ${imageClassName}` : ''}`}
        src={`/${src}.webp`}
      />
    </picture>
  </div>
)

export default Webp
