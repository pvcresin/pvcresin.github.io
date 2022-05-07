import NewsList, { NewsData } from './newslist'

const news: NewsData[] = [
  {
    date: '2022-04-19',
    title: 'esbuild-loader 試してみたら開発ビルドが 2〜3 倍速くなった話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
  {
    date: '2022-04-19',
    title: 'esbuild-loader ',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
  {
    date: '2022-04-19',
    title: 'esbuild-loader 試してみたら開発ビルドが 2〜3 倍速くなった話',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
  {
    date: '2022-04-19',
    title: 'esbuild-loader ',
    siteName: 'Sansan Builders Blog',
    link: 'https://buildersbox.corp-sansan.com/entry/2022/04/19/110000',
  },
]

const Articles = () => <NewsList newsData={news} />

export default Articles