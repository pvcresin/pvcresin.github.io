import React from 'react'

import styles from './Webp.module.scss'

export const Webp: React.FC<{ src: string; imageClassName?: string }> = ({
  src,
  imageClassName,
}) => (
  <picture className={styles.picture}>
    <source srcSet={`/${src}.webp`} type='image/webp' />
    <source srcSet={`/${src}.png`} type='image/png' />
    <img
      className={`${styles.image}${imageClassName ? ` ${imageClassName}` : ''}`}
      src={`/${src}.webp`}
      alt={`/${src}.webp`}
      loading='lazy'
    />
  </picture>
)
