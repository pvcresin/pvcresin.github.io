import { FadeInSection } from './FadeInSection'
import styles from './like.module.scss'

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

export const Like = () => (
  <div>
    <h2 className='section-title'>Like</h2>
    <div className={`pure-g ${styles.content}`}>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${styles.likeBox}`}>
        <FadeInSection>
          <div className={styles.like}>
            <h3 className={styles.category}>Do</h3>
            <hr className={styles.line} />
            <ul>
              {Object.entries(hobby).map(([i, t]) => (
                <li className={styles.item} key={i}>
                  <span className={styles.icon}>{i}</span>
                  <span className={styles.text}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      </div>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${styles.likeBox}`}>
        <FadeInSection>
          <div className={styles.like}>
            <h3 className={styles.category}>Watch</h3>
            <hr className={styles.line} />
            <ul>
              {Object.entries(watch).map(([i, t]) => (
                <li className={styles.item} key={i}>
                  <span className={styles.icon}>{i}</span>
                  <span className={styles.text}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      </div>
      <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${styles.likeBox}`}>
        <FadeInSection>
          <div className={styles.like}>
            <h3 className={styles.category}>Eat</h3>
            <hr className={styles.line} />
            <ul>
              {Object.entries(eat).map(([i, t]) => (
                <li className={styles.item} key={i}>
                  <span className={styles.icon}>{i}</span>
                  <span className={styles.text}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      </div>
    </div>
  </div>
)
