import styles from './WidthContainer.module.scss'

export const WidthContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.root}>{children}</div>
)
