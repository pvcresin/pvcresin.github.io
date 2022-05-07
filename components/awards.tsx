import List, { Item } from './list'

const awards: Item[] = [
  {
    date: '2015-05',
    title: 'Cloud n アプリケーションコンテスト',
    texts: ['WebRTC賞 受賞', 'チーム：意識中くらいとして参加', 'プロジェクト: Ichimonitto'],
    link: 'http://www.cloudn-service.com/cam04-deven/decon/tohyo/',
  },
  {
    date: '2017-12',
    title: '信州未来アプリコンテスト0',
    texts: [
      '信越情報通信懇談会会長賞 受賞',
      'チーム：意識中くらいとして参加',
      'プロジェクト: MiddleDrive',
    ],
    link: 'https://shinshu-futureapp.net/information/contest/',
  },
  {
    date: '2019-03',
    title: '第182回 HCI研究会',
    texts: [
      '学生奨励賞 受賞',
      'スマートウォッチ向けのソフトウェアキーボードに関する研究（修士論文）',
      'プロジェクト: InvisibleFlick',
    ],
    link: 'http://www.sighci.jp/contents/page/news',
  },
  {
    date: '2022-02',
    title: '第2回 ツクってアソぶハッカソン',
    texts: ['優秀賞 受賞', 'チーム：意識中くらいとして参加', 'プロジェクト: かわりみミーティング'],
    link: 'https://tsukuaso.com/',
  },
]

const Awards = () => <List items={awards} />

export default Awards
