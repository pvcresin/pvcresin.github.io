import Link from 'next/link'
import React from 'react'

import { handlers } from '@utils/keyboardlistener'

import styles from './more.module.scss'

export const More: React.FC<{ text?: string; link: string }> = ({ text = 'more', link }) => (
  <div className={styles.root}>
    <Link href={link}>
      <a className={styles.moreButton} {...handlers}>
        {text}
      </a>
    </Link>
  </div>
)
