import styles from './link.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'

const Link: React.FC<{
  href?: string
  isExternalLink?: boolean
  withExternalIcon?: boolean
  children: string
  className?: string
}> = ({ href, isExternalLink, withExternalIcon, className, children }) =>
  href ? (
    <a
      className={`${styles.link} ${className}`}
      href={href}
      {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {isExternalLink && withExternalIcon && (
        <span className={styles.linkIcon}>
          <FaExternalLinkAlt size='0.8rem' />
        </span>
      )}
    </a>
  ) : (
    <span className={styles.text}>{children}</span>
  )

export default Link
