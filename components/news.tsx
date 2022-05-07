import styles from './news.module.scss'

export type Item = { date: string; siteName?: string; title: string; link: string }

const News: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={styles.root}>
    {items.map((item) => (
      <li className={styles.item} key={item.title}>
        <span className={styles.dateContainer}>
          <span className={styles.date}>{item.date}</span>
        </span>
        <a className={styles.link} href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
          {item.siteName ? ` | ${item.siteName}` : ''}
        </a>
      </li>
    ))}
  </ul>
)

export default News
