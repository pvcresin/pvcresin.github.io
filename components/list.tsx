import styles from './list.module.scss'

export type Item = {
  title: string
  link: string
  date: string
  texts: string[]
}

const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={`pure-g pure-u-1-1 ${styles.root}`}>
    {items.map((item) => (
      <li className={styles.item} key={item.title}>
        <h3 className={styles.itemTitle}>
          <a className={styles.link} href={item.link} target='_blank'>
            {item.title}
          </a>
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
      </li>
    ))}
  </ul>
)

export default List
