import React from 'react'
import { FaUpRightFromSquare } from 'react-icons/fa6'

import { handlers } from '@/utils/KeyboardListener'

import styles from './Link.module.scss'

export const Link: React.FC<{
  href: string
  isExternalLink?: boolean
  withExternalIcon?: boolean
  children: string
  className?: string
}> = ({ href, isExternalLink, withExternalIcon, className, children }) => (
  <a
    className={`${styles.link} ${className}`}
    href={href}
    {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    {...handlers}
  >
    {children}
    {isExternalLink && withExternalIcon && (
      <span className={styles.linkIcon}>
        <FaUpRightFromSquare size='0.8rem' />
      </span>
    )}
  </a>
)
