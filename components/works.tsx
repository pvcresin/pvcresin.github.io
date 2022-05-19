import Link from 'next/link'

import worksArray from 'data'

import Webp from './webp'

import styles from './works.module.scss'

const Works: React.FC = () => (
  <div className={styles.root}>
    {worksArray.map((w, index) => (
      <div className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.content}`} key={w.key}>
        <Link href={`/works/${w.key}`}>
          <article className={styles.card} role='link' tabIndex={100 + index}>
            <div className={styles.imageWrapper}>
              <Webp imageClassName={styles.image} src={w.img}></Webp>
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{w.title}</h3>
              <p className={styles.description}>{w.sub}</p>
            </div>
          </article>
        </Link>
      </div>
    ))}
  </div>
)

export default Works
