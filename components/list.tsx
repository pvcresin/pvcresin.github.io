import React from 'react'

import { Link } from '@components/link'
import type { Item } from '@data/list'

import { FadeInSection } from './FadeInSection'
import styles from './list.module.scss'

export const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={styles.root}>
    {items.map((item) => (
      <li className={styles.row} key={item.title}>
        <FadeInSection>
          <div className={styles.item}>
            <time className={styles.date} dateTime={item.date}>
              {item.date}
            </time>
            <div>
              <p className={styles.title}>
                <Link href={item.link} isExternalLink withExternalIcon>
                  {item.title}
                </Link>
              </p>
              <div className={styles.sub}>
                {item.texts.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {item.workLink && (
                  <p>
                    {'Work: '}
                    <Link href={`/works/${item.workLink.key}`}>{item.workLink.title}</Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>
      </li>
    ))}
  </ul>
)
