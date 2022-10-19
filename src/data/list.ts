import type { Work } from '@/data/works'

export type Item = {
  title: string
  link: string
  date?: string
  dateStart?: string
  dateEnd?: string
  texts: string[]
  workLink?: { key: Work['key']; title: Work['title'] }
}

export const awards: Item[] = [
  {
    date: '2022-02-25',
    title: '第2回 ツクってアソぶハッカソン',
    texts: ['優秀賞 受賞', 'チーム「意識中くらい」として参加'],
    workLink: { key: 'KawarimiMeeting', title: 'かわりみミーティング' },
    link: 'https://tsukuaso.com/news/3p1__r_e34ox',
  },
  {
    date: '2019-03-19',
    title: '第182回 HCI研究会',
    texts: [
      '学生奨励賞 受賞',
      'スマートウォッチ向けのソフトウェアキーボードに関する研究（修士論文）',
    ],
    link: 'http://www.sighci.jp/contents/page/news',
    workLink: { key: 'InvisibleFlick', title: 'InvisibleFlick' },
  },
  {
    date: '2017-12-09',
    title: '信州未来アプリコンテスト0',
    texts: ['信越情報通信懇談会会長賞 受賞', 'チーム「意識中くらい」として参加'],
    link: 'https://shinshu-futureapp.net/information/contest/',
    workLink: { key: 'MiddleDrive', title: 'MiddleDrive' },
  },
  {
    date: '2015-05-31',
    title: 'Cloud n アプリケーションコンテスト',
    texts: ['WebRTC賞 受賞', 'チーム「意識中くらい」として参加'],
    link: 'https://weekly.ascii.jp/elem/000/002/634/2634921/',
    workLink: { key: 'Ichimonitto', title: 'イチモニット' },
  },
]

export const publications: Item[] = [
  {
    date: '2019-03-11',
    title: 'InvisibleFlick',
    texts: [
      '鳥山らいか, 宮下芳明. InvisibleFlick: 小型タッチスクリーン端末におけるキートップが透明な日本語入力キーボード, 研究報告ヒューマンコンピュータインタラクション(HCI), Vol.2019-HCI-182, Issue.27, pp. 1-8, 2019.',
    ],
    link: 'https://research.miyashita.com/papers/D218',
    workLink: { key: 'InvisibleFlick', title: 'InvisibleFlick' },
  },
  {
    date: '2018-09-26',
    title: '透明キーボード',
    texts: [
      '鳥山らいか, 宮下芳明. スマートウォッチ向けのキートップが透明な日本語かな入力インタフェース, 第26回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2018), 2018.',
    ],
    link: 'https://research.miyashita.com/papers/D202',
  },
  {
    date: '2018-02-26',
    title: 'インタラクティブパッケージ',
    texts: [
      '加藤邦拓, 薄羽大樹, 鳥山らいか, 竹内まゆ, 野崎玲那, 細谷美月, 宮下芳明. タッチパネルを拡張する紙製インタフェースを搭載したインタラクティブパッケージの開発, インタラクション2018論文集, pp.889-894, 2018.',
    ],
    link: 'https://research.miyashita.com/2018/D193/',
  },
  {
    date: '2015-12-02',
    title: 'SensorPipe',
    texts: [
      '鳥山 らいか, 宮下 芳明. SensorPipe: スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015), 2015.',
    ],
    link: 'https://research.miyashita.com/2015/D160/',
    workLink: { key: 'SensorPipe', title: 'SensorPipe' },
  },
]

export const clubs: Item[] = [
  {
    dateStart: '2017-04-01',
    dateEnd: '2019-03-31',
    title: 'fumble waals',
    texts: [
      'オリジナルボードゲームの制作を行う有志によるサークル',
      '同人イベントでの頒布（コミックマーケット・ゲームマーケット）',
      '企画から制作、販売まで行うが、主にデザインを担当',
    ],
    link: 'http://fumblewaals.com/',
  },
  {
    dateStart: '2016-04-01',
    dateEnd: '2017-06-31',
    title: 'Nakano Computer Club',
    texts: [
      'プログラミングに関する情報共有や勉強会の実施を行う大学内のサークル',
      '同人イベントでの頒布（コミックマーケット・技術書典）',
    ],
    link: 'https://meiji-ncc.tech/',
  },
  {
    dateStart: '2013-04-01',
    dateEnd: '2017-03-31',
    title: '総合コンテンツ制作サークル',
    texts: [
      'デジタルコンテンツ制作（音楽・動画・ゲーム・イラスト・文芸）を行う大学内のサークル',
      '同人イベントでの頒布（コミックマーケット・M3）',
      '設立メンバー＆幹事長',
    ],
    link: 'https://sokon.jp/',
  },
]
