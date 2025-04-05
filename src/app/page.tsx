import { getSkillDataList } from '@/components/Skills'

import IndexPage from './index'

const Page = async () => {
  const skillDataList = await getSkillDataList()

  return <IndexPage skillDataList={skillDataList} />
}

export default Page
