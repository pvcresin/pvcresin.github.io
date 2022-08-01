import { NewsList } from '@components/newslist'
import type { NewsData } from '@components/newslist'

const interviews: NewsData[] = [
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

export const Interviews = () => <NewsList newsData={interviews} />
