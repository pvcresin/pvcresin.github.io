import React from 'react'

import { Link } from '@components/link'
import type { NewsData } from '@data/news'

import { FadeInSection } from './FadeInSection'
import styles from './newslist.module.scss'

export const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <li className={styles.row} key={item.title}>
        <FadeInSection>
          <div className={styles.item}>
            <span className={styles.dateWrapper}>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
            </span>
            <span className={styles.info}>
              {item.link ? (
                <Link className={styles.link} href={item.link} isExternalLink withExternalIcon>
                  {item.title}
                </Link>
              ) : (
                <span className={styles.title}>{item.title}</span>
              )}
              <span className={styles.at}>{item.at || ''}</span>
            </span>
          </div>
        </FadeInSection>
      </li>
    ))}
  </ul>
)
