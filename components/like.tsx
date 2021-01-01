import { getClassNameFunction } from 'utils'

import './like.scss'

const getClassName = getClassNameFunction('componentsLike')

const hobby = {
  '💻': 'プログラミング',
  '👟': '散歩',
  '🎤': '一人カラオケ',
  '🚗': 'ミニチュア集め',
} as const

const watch = {
  '🎬': '映画',
  '😆': 'お笑いネタ',
  '👖': '服',
  '📺': 'メディアアート',
} as const

const eat = {
  '🍣': '寿司',
  '🍕': 'ピザ',
  '🍜': 'ラーメン',
  '🍰': 'ケーキ',
} as const

const Like = () => (
  <div className={getClassName()}>
    <h2 className='section-title'>Like</h2>
    <div className={`pure-g ${getClassName('content')}`}>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${getClassName('like-box')}`}>
        <div className={getClassName('like')}>
          <h3 className={getClassName('category')}>Do</h3>
          <hr className={getClassName('line')} />
          <ul>
            {Object.entries(hobby).map(([i, t]) => (
              <li className={getClassName('item')} key={i}>
                <span className={getClassName('icon')}>{i}</span>
                <span className={getClassName('text')}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${getClassName('like-box')}`}>
        <div className={getClassName('like')}>
          <h3 className={getClassName('category')}>Watch</h3>
          <hr className={getClassName('line')} />
          <ul>
            {Object.entries(watch).map(([i, t]) => (
              <li className={getClassName('item')} key={i}>
                <span className={getClassName('icon')}>{i}</span>
                <span className={getClassName('text')}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${getClassName('like-box')}`}>
        <div className={getClassName('like')}>
          <h3 className={getClassName('category')}>Eat</h3>
          <hr className={getClassName('line')} />
          <ul>
            {Object.entries(eat).map(([i, t]) => (
              <li className={getClassName('item')} key={i}>
                <span className={getClassName('icon')}>{i}</span>
                <span className={getClassName('text')}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Like
