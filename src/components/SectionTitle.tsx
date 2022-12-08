import styles from './SectionTitle.module.scss'

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className={styles.root}>{children}</h2>
)
