import React from 'react'

import { Link } from '@components/link'
import type { NewsData } from '@data/news'

import { FadeInSection } from './FadeInSection'
import styles from './newslist.module.scss'

export const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <li className={`pure-g ${styles.item}`} key={item.title}>
        <FadeInSection className={styles.row}>
          <time className={`pure-u-1-1 pure-u-lg-3-24 ${styles.date}`} dateTime={item.date}>
            {item.date}
          </time>
          <span className={`pure-u-1-1 pure-u-lg-21-24 ${styles.info}`}>
            {item.link ? (
              <Link className={styles.link} href={item.link} isExternalLink withExternalIcon>
                {item.title}
              </Link>
            ) : (
              <span className={styles.title}>{item.title}</span>
            )}
            <span className={styles.at}>{item.at || ''}</span>
          </span>
        </FadeInSection>
      </li>
    ))}
  </ul>
)
