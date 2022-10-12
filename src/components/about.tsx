import { FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'

import { Link } from '@components/link'

import { FadeInSection } from './FadeInSection'
import styles from './about.module.scss'

const aboutText = [
  'Web Frontend とデザインが好きなソフトウェアエンジニア。',
  '大学・大学院では HCI（Human-Computer Interaction）を専攻。',
  '2019年より Sansan 株式会社でフロントエンドエンジニアとして採用サービスの開発 / DX（Developer Experience）の改善に従事。',
  'Minimalism を大切にしており、Minimal な機能やデザインから最大限の UX を生み出すことを意識して、日々プロダクトと向き合っている。',
  'エンジニアリングを通してプロダクトの UI / UX をデザインすることに興味があり、人と議論しながらモノ作りを行いたい。',
].join('\n')

export const About = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.contents}>
        <div className={styles.aboutImage}>
          <FadeInSection>
            <div className={styles.faceWrapper}>
              <img
                className={styles.face}
                src='/icon-pvcresin.svg'
                alt='pvcresinのアイコン'
                loading='lazy'
              />
            </div>
          </FadeInSection>
        </div>
        <div className={styles.aboutTextContainer}>
          <FadeInSection>
            <div className={styles.aboutText}>{aboutText}</div>
            <ul>
              <li className={styles.info}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.right}>Tokyo / Kanagawa, Japan</div>
              </li>
              <li className={styles.info}>
                <div className={styles.infoIcon}>
                  <FaSuitcase />
                </div>
                <div className={styles.right}>
                  <span>Web Frontend Engineer </span>
                  <Link
                    className={styles.link}
                    href='https://jp.corp-sansan.com/'
                    isExternalLink
                    withExternalIcon
                  >
                    @ Sansan, Inc.
                  </Link>
                </div>
              </li>
            </ul>
          </FadeInSection>
        </div>
      </div>
    </div>
  </div>
)
