import styles from './tags.module.scss'

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className={styles.root}>
    {tags.map((t) => (
      <span className={styles.tag} key={t}>
        {t}
      </span>
    ))}
  </div>
)
