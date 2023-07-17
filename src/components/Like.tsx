import { FadeInSection } from '@/components/FadeInSection'

import styles from './Like.module.scss'

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

const likes = [hobby, watch, eat] as const

export const Like = () => (
  <div className={styles.content}>
    {likes.map((like, index) => (
      <div className={styles.likeBox} key={index}>
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
)
