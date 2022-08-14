import dayjs from 'dayjs'
import { FaBirthdayCake, FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'

import { Link } from '@components/link'

import { FadeInSection } from './FadeInSection'
import styles from './about.module.scss'

const birthday = '1994-07-30'

export const About = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`pure-g ${styles.contents}`}>
        <div className={`pure-u-sm-1-4 pure-u-1-2 ${styles.aboutImage}`}>
          <FadeInSection>
            <div className={`pure-u-1-2 ${styles.faceWrapper}`}>
              <img
                className={styles.face}
                src='/icon-pvcresin.svg'
                alt='pvcresinのアイコン'
                loading='lazy'
              />
            </div>
          </FadeInSection>
        </div>
        <div className='pure-u-sm-1-24 pure-u-1-1'></div>
        <div className={`pure-u-sm-17-24 pure-u-1-1 ${styles.aboutTextContainer}`}>
          <FadeInSection>
            <div className={styles.aboutText}>
              {'Web Frontend とデザインが好きなソフトウェアエンジニア。'}
              <br />
              {'大学・大学院では HCI（Human-Computer Interaction）を専攻。'}
              <br />
              {
                '2019年より Sansan 株式会社でフロントエンドエンジニアとして採用サービスの開発 / DX（Developer eXperience）の改善に従事。'
              }
              <br />
              {
                'Minimalism を大切にしており、Minimal な機能やデザインから最大限の UX を生み出すことを意識して、日々プロダクトと向き合っている。'
              }
              <br />
              {
                'エンジニアリングを通してプロダクトの UI / UX をデザインすることに興味があり、人と議論しながらモノ作りを行いたい。'
              }
            </div>
            <ul>
              <li className={`pure-g ${styles.info}`}>
                <div className={`pure-u-1-12 pure-u-lg-1-24 ${styles.infoIcon}`}>
                  <FaBirthdayCake />
                </div>
                <div className={`pure-u-11-12 ${styles.right}`}>
                  {`${birthday} (Age: ${dayjs().diff(birthday, 'year')})`}
                </div>
              </li>
              <li className={`pure-g ${styles.info}`}>
                <div className={`pure-u-1-12 pure-u-lg-1-24 ${styles.infoIcon}`}>
                  <FaMapMarkerAlt />
                </div>
                <div className={`pure-u-11-12 ${styles.right}`}>Tokyo, Japan</div>
              </li>
              <li className={`pure-g ${styles.info}`}>
                <div className={`pure-u-1-12 pure-u-lg-1-24 ${styles.infoIcon}`}>
                  <FaSuitcase />
                </div>
                <div className={`pure-u-11-12 ${styles.right}`}>
                  <span>Web Frontend Engineer </span>
                  <Link className={styles.link} href='https://jp.corp-sansan.com/' isExternalLink>
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
