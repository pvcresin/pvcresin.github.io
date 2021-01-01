import styles from './webp.module.scss'

const Webp: React.FC<{ src: string; imageClassName?: string }> = ({ src, imageClassName }) => (
  <picture className={styles.picture}>
    <source srcSet={`/${src}.webp`} type='image/webp' />
    <source srcSet={`/${src}.png`} type='image/png' />
    <img
      className={`${styles.image}${imageClassName ? ` ${imageClassName}` : ''}`}
      src={`/${src}.webp`}
    />
  </picture>
)

export default Webp
