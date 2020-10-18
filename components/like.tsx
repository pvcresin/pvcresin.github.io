import './like.scss'

const hobby = {
  '💻': 'プログラミング',
  '👟': '散歩',
  '🎤': '一人カラオケ',
  '🚗': 'ミニチュア集め',
}

const watch = {
  '🎬': '映画',
  '😆': 'お笑いネタ',
  '👖': '服',
  '📺': 'メディアアート',
}

const eat = {
  '🍣': '寿司',
  '🍕': 'ピザ',
  '🍜': 'ラーメン',
  '🍰': 'ケーキ',
}

const Like = () => {
  return (
    <div className='components-like'>
      <h2 className='section-title'>Like</h2>
      <div className='pure-g'>
        <div className='like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3'>
          <div className='like'>
            <h3>Do</h3>
            <hr />
            <ul>
              {Object.entries(hobby).map(([i, t]) => (
                <li key={i}>
                  <span className='icon'>{i}</span>
                  <span className='text'>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3'>
          <div className='like'>
            <h3>Watch</h3>
            <hr />
            <ul>
              {Object.entries(watch).map(([i, t]) => (
                <li key={i}>
                  <span className='icon'>{i}</span>
                  <span className='text'>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3'>
          <div className='like'>
            <h3>Eat</h3>
            <hr />
            <ul>
              {Object.entries(eat).map(([i, t]) => (
                <li key={i}>
                  <span className='icon'>{i}</span>
                  <span className='text'>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Like
