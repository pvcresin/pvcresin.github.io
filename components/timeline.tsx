import { Link } from '@components/link'

import styles from './timeline.module.scss'

export type Item = {
  startYear: number | string
  endYear: number | string | undefined
  title: string
  titleLinkUrl: string
  description: string
}

const items: Item[] = [
  {
    startYear: '2013-04',
    endYear: '2017-03',
    title: '明治大学',
    titleLinkUrl: 'https://www.meiji.ac.jp/',
    description:
      '総合数理学部 先端メディアサイエンス学科  学士（理学）。\nモバイル / ウェアラブルデバイスのインタラクションに関する研究に従事。',
  },
  {
    startYear: '2016-10',
    endYear: '2019-02',
    title: '株式会社 想隆社',
    titleLinkUrl: 'https://soryu-sha.jp/',
    description:
      'フロントエンドエンジニア（インターン）。\n- 電子書籍・音声合成関連の研究用システムの開発\n- AIスピーカ・Felica・LINE botを用いたサービス開発\n- CMSを用いたWebサイト制作\nに従事。',
  },
  {
    startYear: '2017-04',
    endYear: '2019-03',
    title: '明治大学 大学院',
    titleLinkUrl: 'https://www.meiji.ac.jp/dai_in/faculty/02.html',
    description:
      '先端数理科学研究科 先端メディアサイエンス専攻  修士（工学）。\nモバイル / ウェアラブルデバイスに関するインタラクションの研究に従事。',
  },
  {
    startYear: '2019-04',
    endYear: undefined,
    title: 'Sansan 株式会社',
    titleLinkUrl: 'https://jp.corp-sansan.com/',
    description:
      '2019年 4月新卒でSansan株式会社に入社。\nWebエンジニアとして、\n- Eightを基盤とした採用サービスの開発\n- Web FrontendのDevOpsの改善\nに従事。',
  },
]

export const Timeline = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <span className={styles.line} />
      {items.map(({ startYear, endYear, title, titleLinkUrl, description }) => (
        <div className={styles.cardWrapper} key={title}>
          <div className={styles.card}>
            <span>{`${startYear}  -  ${endYear === undefined ? 'present' : endYear}`}</span>
            <h3 className={styles.title}>
              <Link href={titleLinkUrl} isExternalLink>
                {title}
              </Link>
            </h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
