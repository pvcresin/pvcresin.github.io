import styles from './tags.module.scss'

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className={styles.root}>
    {tags.map((t) => (
      <span className={styles.tag} key={t}>
        {t}
      </span>
    ))}
  </div>
)

export default Tags
