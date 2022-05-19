import { List, Item } from './list'

const clubs: Item[] = [
  {
    date: '2013-04 - 2017-03',
    title: '総合コンテンツ制作サークル',
    texts: [
      'デジタルコンテンツ制作（音楽・動画・ゲーム・イラスト・文芸）を行う大学内のサークル',
      '同人イベントでの頒布（コミックマーケット・M3）',
      '設立メンバー＆幹事長',
    ],
    link: 'https://sokon.jp/',
  },
  {
    date: '2016-04 - 2017-06',
    title: 'Nakano Computer Club',
    texts: [
      'プログラミングに関する情報共有や勉強会の実施を行う大学内のサークル',
      '同人イベントでの頒布（コミックマーケット・技術書典）',
    ],
    link: 'https://meiji-ncc.tech/',
  },
  {
    date: '2017-04 - 2019-03',
    title: 'fumble waals',
    texts: [
      'オリジナルボードゲームの制作を行う有志によるサークル',
      '同人イベントでの頒布（コミックマーケット・ゲームマーケット）',
      '企画から制作、販売まで行うが、主にデザインを担当',
    ],
    link: 'http://fumblewaals.com/',
  },
]

export const Clubs = () => (
  <>
    <h2 className='section-title'>Clubs</h2>
    <List items={clubs} />
  </>
)
