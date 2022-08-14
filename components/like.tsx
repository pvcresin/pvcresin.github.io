import { FadeInSection } from './FadeInSection'
import styles from './like.module.scss'

type LikeData = { title: string; texts: string[] }

const hobby: LikeData = {
  title: 'Do',
  texts: ['散歩', '一人カラオケ', 'お風呂', '断捨離'],
}

const watch: LikeData = {
  title: 'Watch',
  texts: ['アニメ', 'お笑いネタ', '服', 'デザイン系の展示'],
}

const eat: LikeData = {
  title: 'Eat',
  texts: ['オムライス', '寿司', 'スイーツ', 'フレンチ全般'],
}

export const Like = () => (
  <div>
    <h2 className='section-title'>Like</h2>
    <div className={`pure-g ${styles.content}`}>
      {[hobby, watch, eat].map((like, index) => (
        <div className={`pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 ${styles.likeBox}`} key={index}>
          <FadeInSection>
            <div className={styles.like}>
              <h3 className={styles.category}>{like.title}</h3>
              <ul>
                {like.texts.map((text) => (
                  <li className={styles.item} key={text}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      ))}
    </div>
  </div>
)
