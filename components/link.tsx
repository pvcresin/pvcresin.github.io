import styles from './link.module.scss'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { handlers } from 'utils/keyboardlistener'

export const Link: React.FC<{
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
      {...handlers}
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
