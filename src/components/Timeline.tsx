import dayjs from 'dayjs'

import { FadeInSection } from '@/components/FadeInSection'
import { Link } from '@/components/Link'

import styles from './Timeline.module.scss'

export type Item = {
  startYear: number | string
  endYear: number | string | undefined
  title: string
  titleLinkUrl: string
  description: string
}

const items: Item[] = [
  {
    startYear: '2019-04-01',
    endYear: undefined,
    title: 'Sansan 株式会社',
    titleLinkUrl: 'https://jp.corp-sansan.com/',
    description:
      '2019年 4月新卒でSansan株式会社に入社。\nWebエンジニアとして、\n- Eightを基盤とした採用サービスの開発\n- Web FrontendのDevOpsの改善\nに従事。',
  },
  {
    startYear: '2017-04-01',
    endYear: '2019-03-31',
    title: '明治大学 大学院',
    titleLinkUrl: 'https://www.meiji.ac.jp/dai_in/faculty/02.html',
    description:
      '先端数理科学研究科 先端メディアサイエンス専攻 1期生。\n修士（工学）。\nHCI（Human-Computer Interaction）を専攻し、モバイル / ウェアラブルデバイスに関するインタラクションの研究を行う。',
  },
  {
    startYear: '2016-10-01',
    endYear: '2019-02-31',
    title: '株式会社 想隆社',
    titleLinkUrl: 'https://soryu-sha.jp/',
    description:
      'フロントエンドエンジニア（インターン）。\n- 電子書籍・音声合成関連の研究用システムの開発\n- AIスピーカー・Felica・LINE botを用いたサービス開発\n- CMSを用いたWebサイト制作\nに従事。',
  },
  {
    startYear: '2013-04-01',
    endYear: '2017-03-31',
    title: '明治大学',
    titleLinkUrl: 'https://www.meiji.ac.jp/',
    description:
      '総合数理学部 先端メディアサイエンス学科 1期生。\n学士（理学）。\nHCI（Human-Computer Interaction）を専攻し、モバイル / ウェアラブルデバイスのインタラクションに関する研究を行う。\nまた、PCでコンテンツ制作をするサークルを立ち上げ、幹事長を務める。',
  },
  {
    startYear: '2010-04-01',
    endYear: '2013-03-31',
    title: '本郷高等学校',
    titleLinkUrl: 'http://www.hongo.ed.jp/',
    description: '東京・巣鴨にある私立の中高一貫校。\n生徒会・料理研究部・美術部に所属。',
  },
]

export const Timeline = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <span className={styles.line} />
      {items.map(({ startYear, endYear, title, titleLinkUrl, description }) => (
        <div className={styles.cardWrapper} key={title}>
          <div className={styles.card}>
            <FadeInSection>
              <p className={styles.date}>
                {dayjs(startYear, 'YYYY-MM-DD').format('YYYY-MM')}
                {`  -  `}
                {endYear === undefined ? 'present' : dayjs(endYear, 'YYYY-MM-DD').format('YYYY-MM')}
              </p>
              <h3 className={styles.title}>
                <Link href={titleLinkUrl} isExternalLink withExternalIcon>
                  {title}
                </Link>
              </h3>
              <p className={styles.description}>{description}</p>
            </FadeInSection>
          </div>
        </div>
      ))}
    </div>
  </div>
)
