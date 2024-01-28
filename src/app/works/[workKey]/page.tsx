import { worksArray } from '@/data/works'
import type { WorkKey } from '@/data/works'

import WorkDetailPage from './index'

export async function generateStaticParams() {
  const workKeys = worksArray.map((p) => p.key)

  return workKeys.map((workKey) => ({ workKey }))
}

export default function Page({ params }: { params: { workKey: WorkKey } }) {
  const { workKey } = params

  const work = worksArray.find((p) => p.key === workKey)

  return work ? <WorkDetailPage work={work} /> : null
}
