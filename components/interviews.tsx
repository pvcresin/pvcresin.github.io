import { NewsList } from '@components/newslist'
import type { NewsData } from '@components/newslist'

const interviews: NewsData[] = [
  {
    date: ' 2019-10-03',
    title: '【Sansan19卒新卒インタビューVol.02】新卒エンジニアに聞いたSansanへの入社理由。',
    at: 'Wantedly',
    link: 'https://www.wantedly.com/companies/Sansan/post_articles/189105',
  },
]

export const Interviews = () => <NewsList newsData={interviews} />
