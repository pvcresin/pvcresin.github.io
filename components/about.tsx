import { FaEnvelope, FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'

import styles from './about.module.scss'

const About = () => {
  return (
    <div className={`pure-g ${styles.root}`}>
      <div className={`pure-u-sm-1-4 pure-u-1-2 ${styles.aboutImage}`}>
        <div className={`pure-u-1-2 ${styles.faceWrapper}`}>
          <img className={styles.face} src='/icon-pvcresin.svg' alt='pvcresinのアイコン画像' />
        </div>
      </div>
      <div className='pure-u-sm-1-24 pure-u-1-1'></div>
      <div className={`pure-u-sm-17-24 pure-u-1-1 ${styles.aboutText}`}>
        Web Front-End が好きなエンジニア。
        <br />
        学生時代はインタラクション（HCI）を専攻し、主にモバイル /
        ウェアラブルデバイスに関する研究を行う。
        <br />
        人と意見を交換し、議論しながらモノ作りがしたい。
        <br />
        新しいものが好きなので、貪欲に学んでいく。
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
  )
}

export default About
