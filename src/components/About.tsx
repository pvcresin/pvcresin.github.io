import { FaMap, FaSuitcase } from 'react-icons/fa6'

import { FadeInSection } from '@/components/FadeInSection'
import { Link } from '@/components/Link'

import styles from './About.module.scss'
import { WidthContainer } from './WidthContainer'

const aboutText = [
  'Web フロントエンドとデザインと Minimalism が好きなソフトウェアエンジニア。',
  '大学・大学院では HCI（Human-Computer Interaction）を専攻し、インタラクションデザインを学ぶ。',
  '2019年より Sansan 株式会社の Eight の開発組織に所属。',
  '複数のサービスを横断して Web フロントエンドの開発サポートを行いつつ、技術負債の解消・ビルド周りの改善・デザインシステム構築など開発者体験（DX）の向上に取り組む。',
  'エンジニアリングを通してプロダクトの UI / UX をデザインすることに興味があり、人と議論しながらモノ作りを行うことを大切にしている。',
].join('\n')

export const About = () => (
  <div className={styles.root}>
    <WidthContainer>
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
                  <FaMap />
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
    </WidthContainer>
  </div>
)
