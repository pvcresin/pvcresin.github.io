import { List } from '@components/list'
import type { Item } from '@components/list'

const publications: Item[] = [
  {
    date: '2015-12',
    title: 'SensorPipe',
    texts: [
      '鳥山 らいか, 宮下 芳明. SensorPipe: スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015), 2015.',
    ],
    link: 'https://research.miyashita.com/2015/D160/',
    workLink: { key: 'SensorPipe', title: 'SensorPipe' },
  },
  {
    date: '2018-03',
    title: 'インタラクティブパッケージ',
    texts: [
      '加藤邦拓, 薄羽大樹, 鳥山らいか, 竹内まゆ, 野崎玲那, 細谷美月, 宮下芳明. タッチパネルを拡張する紙製インタフェースを搭載したインタラクティブパッケージの開発, インタラクション2018論文集, pp.889-894, 2018.',
    ],
    link: 'https://research.miyashita.com/2018/D193/',
  },
  {
    date: '2018-09',
    title: '透明キーボード',
    texts: [
      '鳥山らいか, 宮下芳明. スマートウォッチ向けのキートップが透明な日本語かな入力インタフェース, 第26回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2018), 2018.',
    ],
    link: 'https://research.miyashita.com/papers/D202',
  },
  {
    date: '2019-03',
    title: 'InvisibleFlick',
    texts: [
      '鳥山らいか, 宮下芳明. InvisibleFlick: 小型タッチスクリーン端末におけるキートップが透明な日本語入力キーボード, 研究報告ヒューマンコンピュータインタラクション(HCI), Vol.2019-HCI-182, Issue.27, pp. 1-8, 2019.',
    ],
    link: 'https://research.miyashita.com/papers/D218',
    workLink: { key: 'InvisibleFlick', title: 'InvisibleFlick' },
  },
]

export const Publications = () => <List items={publications} />
