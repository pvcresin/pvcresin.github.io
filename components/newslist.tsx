import styles from './newslist.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'

export type NewsData = { date: string; siteName?: string; title: string; link: string }

const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <article className={styles.item} key={item.title}>
        <span className={styles.dateContainer}>
          <time className={styles.date} dateTime={item.date}>
            {item.date}
          </time>
        </span>
        <span className={styles.info}>
          <a className={styles.link} href={item.link} target='_blank' rel='noopener noreferrer'>
            {item.title}
            <span className={styles.linkIcon}>
              <FaExternalLinkAlt size='0.8rem' />
            </span>
          </a>
          <span className={styles.siteName}>{item.siteName ? ` | ${item.siteName}` : ''}</span>
        </span>
      </article>
    ))}
  </ul>
)

export default NewsList
