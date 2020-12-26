import dayjs from 'dayjs'

import './about.scss'

const About = () => {
  const birthday = '1994-07-30'
  const age = dayjs().diff(birthday, 'year')

  return (
    <div className='pure-g components-about'>
      <div className='about-img pure-u-sm-1-4 pure-u-1-2'>
        <div className='face-wrapper pure-u-1-2'>
          <img src='/icon-pvcresin.svg' />
        </div>
      </div>
      <div className='pure-u-sm-1-24 pure-u-1-1'></div>
      <div className='about-text pure-u-sm-17-24 pure-u-1-1'>
        Web Front-End が好きなエンジニア。
        <br />
        学生時代はインタラクション（HCI）を専攻し、主にモバイル /
        ウェアラブルデバイスに関する研究を行う。
        <br />
        人と意見を交換し、議論しながらモノ作りがしたい。
        <br />
        新しいものが好きなので、貪欲に学んでいく。
        <ul>
          <li className='pure-g'>
            <div className='icon pure-u-1-12 pure-u-lg-1-24'>
              <i className='fa fa-birthday-cake' aria-hidden='true'></i>
            </div>
            <div className='right pure-u-11-12'>
              {birthday} (Age: {age})
            </div>
          </li>
          <li className='pure-g'>
            <div className='icon pure-u-1-12 pure-u-lg-1-24'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
            </div>
            <div className='right pure-u-11-12'>pvcresin0730[at]gmail.com</div>
          </li>
          <li className='pure-g'>
            <div className='icon pure-u-1-12 pure-u-lg-1-24'>
              <i className='fa fa-map-marker-alt' aria-hidden='true'></i>
            </div>
            <div className='right pure-u-11-12'>Omotesando, Tokyo</div>
          </li>
          <li className='pure-g'>
            <div className='icon pure-u-1-12 pure-u-lg-1-24'>
              <i className='fa fa-suitcase' aria-hidden='true'></i>
            </div>
            <div className='right pure-u-11-12'>
              <span>Front-End Engineer </span>
              <a className='company' href='https://jp.corp-sansan.com/' target='_blank'>
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
