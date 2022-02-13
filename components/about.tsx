import { FaEnvelope, FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'

import styles from './about.module.scss'

const About = () => (
  <>
    <h2 className='section-title'>About</h2>
    <div className={`pure-g ${styles.root}`}>
      <div className={`pure-u-sm-1-4 pure-u-1-2 ${styles.aboutImage}`}>
        <div className={`pure-u-1-2 ${styles.faceWrapper}`}>
          <img className={styles.face} src='/icon-pvcresin.svg' alt='pvcresinのアイコン' />
        </div>
      </div>
      <div className='pure-u-sm-1-24 pure-u-1-1'></div>
      <div className={`pure-u-sm-17-24 pure-u-1-1 ${styles.aboutTextContainer}`}>
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
              <FaEnvelope />
            </div>
            <div className={`pure-u-11-12 ${styles.right}`}>pvcresin0730[at]gmail.com</div>
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
              <a
                className={styles.link}
                href='https://jp.corp-sansan.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                @ Sansan, Inc.
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default About
