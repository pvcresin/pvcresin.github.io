import styles from './timeline.module.scss'

export type Item = {
  startYear: number
  endYear: number | undefined
  title: string
  description: string
}

const items: Item[] = [
  {
    startYear: 2013,
    endYear: 2017,
    title: '明治大学',
    description:
      '総合数理学部 先端メディアサイエンス学科  学士（理学）。\nモバイル / ウェアラブルデバイスのインタラクションに関する研究に従事。',
  },
  {
    startYear: 2016,
    endYear: 2018,
    title: '株式会社想隆社',
    description:
      'フロントエンドエンジニア（インターン）。\n- 電子書籍・音声合成関連の研究用システムの開発\n- AIスピーカ・Felicaを用いたサービス開発\n- CMSを用いたWebサイト制作\nに従事。',
  },
  {
    startYear: 2017,
    endYear: 2019,
    title: '明治大学大学院',
    description:
      '先端数理科学研究科 先端メディアサイエンス専攻  修士（工学）。\nモバイル / ウェアラブルデバイスに関するインタラクションの研究に従事。',
  },
  {
    startYear: 2019,
    endYear: undefined,
    title: 'Sansan株式会社',
    description:
      '2019年 4月新卒でSansan株式会社に入社。\nWebエンジニアとして、\n- Eightを基盤とした採用サービスの開発\n- Web FrontendのDevOpsの改善\nに従事。',
  },
]

const Timeline = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <span className={styles.line} />
      {items.map(({ startYear, endYear, title, description }) => (
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <span>{`${startYear} - `}</span>
            {endYear === undefined ? null : <span>{endYear}</span>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Timeline
