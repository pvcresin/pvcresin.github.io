import Link from 'next/link'

import styles from './more.module.scss'

const More: React.FC<{ text?: string; link: string }> = ({ text = 'more', link }) => (
  <div className={styles.root}>
    <Link href={link}>
      <span className={styles.moreButton}>{text}</span>
    </Link>
  </div>
)

export default More
