import dayjs from 'dayjs'

import { getClassNameFunction } from 'utils'

import './about.scss'

const getClassName = getClassNameFunction('components-about')

const About = () => {
  const birthday = '1994-07-30'
  const age = dayjs().diff(birthday, 'year')

  return (
    <div className={`pure-g ${getClassName()}`}>
      <div className={`pure-u-sm-1-4 pure-u-1-2 ${getClassName('about-image')}`}>
        <div className={`pure-u-1-2 ${getClassName('face-wrapper')}`}>
          <img className={getClassName('face')} src='/icon-pvcresin.svg' />
        </div>
      </div>
      <div className='pure-u-sm-1-24 pure-u-1-1'></div>
      <div className={`pure-u-sm-17-24 pure-u-1-1 ${getClassName('about-text')}`}>
        Web Front-End が好きなエンジニア。
        <br />
        学生時代はインタラクション（HCI）を専攻し、主にモバイル /
        ウェアラブルデバイスに関する研究を行う。
        <br />
        人と意見を交換し、議論しながらモノ作りがしたい。
        <br />
        新しいものが好きなので、貪欲に学んでいく。
        <ul>
          <li className={`pure-g ${getClassName('info')}`}>
            <div className={`pure-u-1-12 pure-u-lg-1-24 ${getClassName('info-icon')}`}>
              <i className='fa fa-birthday-cake' aria-hidden='true'></i>
            </div>
            <div className={`pure-u-11-12 ${getClassName('right')}`}>
              {birthday} (Age: {age})
            </div>
          </li>
          <li className={`pure-g ${getClassName('info')}`}>
            <div className={`pure-u-1-12 pure-u-lg-1-24 ${getClassName('info-icon')}`}>
              <i className='fa fa-envelope' aria-hidden='true'></i>
            </div>
            <div className={`pure-u-11-12 ${getClassName('right')}`}>pvcresin0730[at]gmail.com</div>
          </li>
          <li className={`pure-g ${getClassName('info')}`}>
            <div className={`pure-u-1-12 pure-u-lg-1-24 ${getClassName('info-icon')}`}>
              <i className='fa fa-map-marker-alt' aria-hidden='true'></i>
            </div>
            <div className={`pure-u-11-12 ${getClassName('right')}`}>Omotesando, Tokyo</div>
          </li>
          <li className={`pure-g ${getClassName('info')}`}>
            <div className={`pure-u-1-12 pure-u-lg-1-24 ${getClassName('info-icon')}`}>
              <i className='fa fa-suitcase' aria-hidden='true'></i>
            </div>
            <div className={`pure-u-11-12 ${getClassName('right')}`}>
              <span>Front-End Engineer </span>
              <a
                className={getClassName('link')}
                href='https://jp.corp-sansan.com/'
                target='_blank'
              >
                @ Sansan
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
