export type NewsData = { date: string; at?: string; title: string; link?: string }

export const articles: NewsData[] = [
  {
    date: '2022-07-28',
    title: 'Eight で Internet Explorer のサポートを終了するために行ったこと',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/kill-ie',
  },
  {
    date: '2022-05-25',
    title: 'JavaScript で Mac のマルチタッチジェスチャによる拡大縮小を無効にする',
    at: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/f0b81496e387b2',
  },
  {
    date: '2022-04-19',
    title: 'esbuild-loader 試してみたら開発ビルドが 2〜3 倍速くなった話',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
  {
    date: '2021-12-21',
    title: 'Hydro-SDK で始める TypeScript を使った Flutter 開発',
    at: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/7cc9df5d4e23f5',
  },
  {
    date: '2021-11-04',
    title: 'GIF しか残ってなかったオリジナルのローディングを CSS アニメーションで再現した話',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/11/04/110000',
  },
  {
    date: '2021-10-20',
    title: 'TypeScriptの導入で開発現場はどう変わる？ Sansanの事例に見るメリットとコスト',
    at: 'CodeZine',
    link: 'https://codezine.jp/article/detail/14849',
  },
  {
    date: '2021-06-24',
    title: 'TypeScript を導入して 1 年が経って感じた良かったこと・困ったこと',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/06/24/110000',
  },
  {
    date: '2021-05-28',
    title: 'TypeScript / JavaScript の import を自動でソートする',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/05/28/110000',
  },
  {
    date: '2021-03-10',
    title: 'まだ間に合う！node-sass（LibSass）から sass（Dart Sass）への移行',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/03/10/110000',
  },
  {
    date: '2021-02-12',
    title: 'compass-mixins から PostCSS の Autoprefixer に移行する',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2021/02/12/110000',
  },
  {
    date: '2020-12-29',
    title: 'TypeScript の Conditional Types で複数条件をマージする',
    at: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/073dc774eb241c',
  },
  {
    date: '2020-12-22',
    title: 'Nannou で始める Rust / Creative-Coding',
    at: 'Zenn',
    link: 'https://zenn.dev/pvcresin/articles/4b9edacc87527a',
  },
  {
    date: '2020-12-17',
    title: 'eslint-loader の使用をやめることで、ビルド時間を短縮した話',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/12/17/110000',
  },
  {
    date: '2020-09-09',
    title: 'Eight 、TypeScript はじめました',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/09/09/110000',
  },
  {
    date: '2020-07-28',
    title: 'SCSS-Lint から stylelint に移行した話',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/07/28/110000',
  },
  {
    date: '2020-06-22',
    title: 'Eight フロントエンド、Prettier 入りました',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/06/22/110000',
  },
  {
    date: '2020-02-10',
    title: 'CSS について復習する',
    at: 'Sansan Tech Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2020/02/10/110000',
  },
  {
    date: '2019-12-17',
    title: 'Yew ではじめる Rust / WebAssembly 開発',
    at: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/614cbd363af82e11c204',
  },
  {
    date: '2017-10-03',
    title: 'pugで書くRiot Routerの開発環境メモ',
    at: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/2e139f32c8967dffdccd',
  },
  {
    date: '2017-10-03',
    title: 'pugで書くRiotの開発環境メモ',
    at: 'Qiita',
    link: 'https://qiita.com/pvcresin/items/3b49600720c8ecefedd4',
  },
]

export const talks: NewsData[] = [
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

export const interviews: NewsData[] = [
  {
    date: ' 2022-07-25',
    title: '「第2回 ツクってアソぶハッカソン」受賞者インタビュー③ 優秀賞',
    at: 'ツクってアソぶハッカソン',
    link: 'https://tsukuaso.com/news/3p1__r_e34ox',
  },
  {
    date: ' 2019-10-03',
    title: '【Sansan19卒新卒インタビューVol.02】新卒エンジニアに聞いたSansanへの入社理由。',
    at: 'Wantedly',
    link: 'https://www.wantedly.com/companies/Sansan/post_articles/189105',
  },
]
