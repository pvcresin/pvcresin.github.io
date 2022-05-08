import styles from './newslist.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'

export type NewsData = { date: string; at?: string; title: string; link?: string }

const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <article className={`pure-g ${styles.item}`} key={item.title}>
        <time className={`pure-u-1-1 pure-u-lg-3-24 ${styles.date}`} dateTime={item.date}>
          {item.date}
        </time>
        <span className={`pure-u-1-1 pure-u-lg-21-24 ${styles.info}`}>
          {item.link ? (
            <a className={styles.link} href={item.link} target='_blank' rel='noopener noreferrer'>
              {item.title}
              <span className={styles.linkIcon}>
                <FaExternalLinkAlt size='0.8rem' />
              </span>
            </a>
          ) : (
            <span className={styles.title}>{item.title}</span>
          )}
          <span className={styles.at}>{item.at || ''}</span>
        </span>
      </article>
    ))}
  </ul>
)

export default NewsList
