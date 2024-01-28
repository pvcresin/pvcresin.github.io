import { worksArray } from '@/data/works'
import type { WorkKey } from '@/data/works'

import WorkDetailPage from './index'

export const generateStaticParams = async () => {
  const workKeys = worksArray.map((p) => p.key)

  return workKeys.map((workKey) => ({ workKey }))
}

const Page: React.FC<{ params: { workKey: WorkKey } }> = ({ params }) => {
  const { workKey } = params

  const work = worksArray.find((p) => p.key === workKey)

  return work ? <WorkDetailPage work={work} /> : null
}

export default Page
