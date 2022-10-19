import React from 'react'

import { FadeInSection } from '@/components/FadeInSection'
import { Link } from '@/components/Link'
import type { Item } from '@/data/list'

import styles from './List.module.scss'

export const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={styles.root}>
    {items.map((item) => (
      <li className={styles.row} key={item.title}>
        <FadeInSection>
          <div className={styles.item}>
            <div className={styles.dateSection}>
              {item.date ? (
                <time className={styles.time} dateTime={item.date}>
                  {item.date}
                </time>
              ) : (
                <>
                  <time className={styles.time} dateTime={item.dateStart}>
                    {item.dateStart}
                  </time>
                  {'  -  '}
                  <time className={styles.time} dateTime={item.dateEnd}>
                    {item.dateEnd}
                  </time>
                </>
              )}
            </div>
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
                    <Link href={`/works/${item.workLink.key}`}>
                      {`Works / ${item.workLink.title}`}
                    </Link>
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
