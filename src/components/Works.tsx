import Link from 'next/link'
import React from 'react'

import { FadeInSection } from '@/components/FadeInSection'
import { Webp } from '@/components/Webp'
import { worksArray } from '@/data/works'
import { handlers } from '@/utils/KeyboardListener'

import styles from './Works.module.scss'

export const Works: React.FC = () => (
  <div className={styles.root}>
    {worksArray.map((w) => (
      <div className={styles.content} key={w.key}>
        <Link href={`/works/${w.key}`}>
          <article className={styles.card} role='link' tabIndex={0} {...handlers}>
            <FadeInSection>
              <div className={styles.imageWrapper}>
                <Webp imageClassName={styles.image} src={w.img}></Webp>
              </div>
              <h3 className={styles.title}>{w.title}</h3>
              <p className={styles.description}>{w.sub}</p>
            </FadeInSection>
          </article>
        </Link>
      </div>
    ))}
  </div>
)
