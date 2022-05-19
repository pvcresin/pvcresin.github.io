import Link from 'next/link'
import React from 'react'

import { Webp } from '@components/webp'

import { worksArray } from '@data/index'

import { handlers } from '@utils/keyboardlistener'

import styles from './works.module.scss'

export const Works: React.FC = () => (
  <div className={styles.root}>
    {worksArray.map((w) => (
      <div className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.content}`} key={w.key}>
        <Link href={`/works/${w.key}`}>
          <article className={styles.card} role='link' tabIndex={0} {...handlers}>
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
