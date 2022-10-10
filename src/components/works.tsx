import Link from 'next/link'
import React from 'react'

import { Webp } from '@components/webp'
import { worksArray } from '@data/works'
import { handlers } from '@utils/keyboardlistener'

import { FadeInSection } from './FadeInSection'
import styles from './works.module.scss'

export const Works: React.FC = () => (
  <div className={styles.root}>
    {worksArray.map((w) => (
      <div className={styles.content} key={w.key}>
        <FadeInSection>
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
        </FadeInSection>
      </div>
    ))}
  </div>
)
