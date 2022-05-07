import styles from './newslist.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'

export type NewsData = { date: string; at?: string; title: string; link: string }

const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <article className={styles.item} key={item.title}>
        <time className={styles.date} dateTime={item.date}>
          {item.date}
        </time>
        <a className={styles.link} href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
          <span className={styles.linkIcon}>
            <FaExternalLinkAlt size='0.8rem' />
          </span>
        </a>
        <span className={styles.at}>{item.at ? ` | ${item.at}` : ''}</span>
      </article>
    ))}
  </ul>
)

export default NewsList
