import NewsList, { NewsData } from './newslist'

const news: NewsData[] = [
  {
    date: '2022-04-19',
    title: 'esbuild-loader 試してみたら開発ビルドが 2〜3 倍速くなった話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
  {
    date: '2021-12-21',
    title: 'Hydro-SDK で始める TypeScript を使った Flutter 開発',
    siteName: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/7cc9df5d4e23f5',
  },
  {
    date: '2021-11-04',
    title: 'GIF しか残ってなかったオリジナルのローディングを CSS アニメーションで再現した話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/11/04/110000',
  },
  {
    date: '2021-10-20',
    title: 'TypeScriptの導入で開発現場はどう変わる？ Sansanの事例に見るメリットとコスト',
    siteName: 'CodeZine',
    link: 'https://codezine.jp/article/detail/14849',
  },
  {
    date: '2021-06-24',
    title: 'TypeScript を導入して 1 年が経って感じた良かったこと・困ったこと',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/06/24/110000',
  },
  {
    date: '2021-05-28',
    title: 'TypeScript / JavaScript の import を自動でソートする',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/05/28/110000',
  },
  {
    date: '2021-03-10',
    title: 'まだ間に合う！node-sass（LibSass）から sass（Dart Sass）への移行',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/03/10/110000',
  },
  {
    date: '2021-02-12',
    title: 'compass-mixins から PostCSS の Autoprefixer に移行する',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/02/12/110000',
  },
  {
    date: '2020-12-29',
    title: 'TypeScript の Conditional Types で複数条件をマージする',
    siteName: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/073dc774eb241c',
  },
  {
    date: '2020-12-22',
    title: 'Nannou で始める Rust / Creative-Coding',
    siteName: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/4b9edacc87527a',
  },

  {
    date: '2020-12-17',
    title: 'eslint-loader の使用をやめることで、ビルド時間を短縮した話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/12/17/110000',
  },
  {
    date: '2020-09-09',
    title: 'Eight 、TypeScript はじめました',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/09/09/110000',
  },
  {
    date: '2020-07-28',
    title: 'SCSS-Lint から stylelint に移行した話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/07/28/110000',
  },
  {
    date: '2020-06-22',
    title: 'Eight フロントエンド、Prettier 入りました',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/06/22/110000',
  },
  {
    date: '2020-02-10',
    title: 'CSS について復習する',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/02/10/110000',
  },
  {
    date: '2019-12-17',
    title: 'Yew ではじめる Rust / WebAssembly 開発',
    siteName: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/614cbd363af82e11c204',
  },
  {
    date: '2017-10-03',
    title: 'pugで書くRiot Routerの開発環境メモ',
    siteName: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/2e139f32c8967dffdccd',
  },
  {
    date: '2017-10-03',
    title: 'pugで書くRiotの開発環境メモ',
    siteName: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/3b49600720c8ecefedd4',
  },
]

const Articles = () => <NewsList newsData={news} />

export default Articles
