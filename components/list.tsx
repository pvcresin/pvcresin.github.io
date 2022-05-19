import React from 'react'

import { Link } from '@components/link'

import type { Work } from '@data/index'

import styles from './list.module.scss'

export type Item = {
  title: string
  link: string
  date: string
  texts: string[]
  workLink?: { key: Work['key']; title: Work['title'] }
}

export const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={`pure-g pure-u-1-1 ${styles.root}`}>
    {items.map((item) => (
      <li className={styles.item} key={item.title}>
        <h3 className={styles.itemTitle}>
          <Link className={styles.link} href={item.link} isExternalLink>
            {item.title}
          </Link>
          <div className={styles.right}>
            <hr className={styles.line} />
            <span className={styles.dateContainer}>
              <span className={styles.date}>{item.date}</span>
            </span>
          </div>
        </h3>
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
      </li>
    ))}
  </ul>
)
