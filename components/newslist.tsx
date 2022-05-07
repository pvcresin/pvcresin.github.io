import styles from './newslist.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'

export type NewsData = { date: string; siteName?: string; title: string; link: string }

const NewsList: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <ul className={styles.root}>
    {newsData.map((item) => (
      <li className={styles.item} key={item.title}>
        <span className={styles.dateContainer}>
          <span className={styles.date}>{item.date}</span>
        </span>
        <a className={styles.link} href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
          {item.siteName ? ` | ${item.siteName}` : ''}
          <span className={styles.linkIcon}>
            <FaExternalLinkAlt size='0.8rem' />
          </span>
        </a>
      </li>
    ))}
  </ul>
)

export default NewsList
