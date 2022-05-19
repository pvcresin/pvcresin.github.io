import { NewsList, NewsData } from './newslist'

const talks: NewsData[] = [
  {
    date: '2022-02-17',
    title: '新言語・フレームワーク導入の勘所～TypeScript・Rust・Flutter～',
    at: 'Developers Summit 2022',
    link: 'https://event.shoeisha.jp/devsumi/20220217/session/3677/',
  },
  {
    date: '2021-11-05',
    title: 'Eight Webフロントエンドの開発者体験（DX）向上のための取り組み',
    at: 'Sansan Builders Stage 2021',
    link: 'https://jp.corp-sansan.com/engineering/buildersstage2021/?session=a2',
  },
  {
    date: '2021-08-18',
    title: 'ステップアップOSSコントリビュート',
    at: 'ラクス OSS LT会 vol.2',
    link: 'https://rakus.connpass.com/event/218573/',
  },
  {
    date: '2020-11-06',
    title: 'Webアプリケーションのアーキテクチャパターンから読み解くNext.js',
    at: 'Eight Engineer Meetup #1',
    link: 'https://speakerdeck.com/pvcresin/webapurikesiyonfalseakitekutiyapatankaradu-mijie-kunext-dot-js',
  },
  {
    date: '2020-07-05',
    title: '未来を待つのではなく、未来を創る ~CTOと新卒2年目社員の対談~',
    at: '技育祭 2020',
    link: 'https://talent.supporterz.jp/geeksai/2020/',
  },
  {
    date: '2019-11-20',
    title: 'TS 未経験者が 社内向け JS ライブラリを TS に置き換えている話',
    at: '表参道Web勉強会 #9',
    link: 'https://oweb.connpass.com/event/149918/',
  },
]

export const Talks = () => <NewsList newsData={talks} />
