import React from 'react'

import { Link } from '@components/link'
import type { Item } from '@data/list'

import { FadeInSection } from './FadeInSection'
import styles from './list.module.scss'

export const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={`pure-g pure-u-1-1 ${styles.root}`}>
    {items.map((item) => (
      <FadeInSection key={item.title}>
        <li className={styles.item}>
          <time className={styles.date}>{item.date}</time>
          <div className={styles.info}>
            <p className={styles.title}>
              <Link href={item.link} isExternalLink>
                {item.title}
              </Link>
            </p>
            {item.texts.map((t) => (
              <p className={styles.sub} key={t}>
                {t}
              </p>
            ))}
            {item.workLink && (
              <p className={styles.sub}>
                {'Work: '}
                <Link href={`/works/${item.workLink.key}`}>{item.workLink.title}</Link>
              </p>
            )}
          </div>
        </li>
      </FadeInSection>
    ))}
  </ul>
)
