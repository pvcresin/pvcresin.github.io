import IndexPage from './index'

// logo: https://simpleicons.org/
type SkillData = { text: string; logo?: string }

const skillDataList = [
  { text: 'JavaScript' },
  { text: 'TypeScript' },
  { text: 'HTML', logo: 'HTML5' },
  { text: 'CSS', logo: 'CSS3' },
  { text: 'Java', logo: 'OpenJDK' },
  { text: 'Kotlin' },
  { text: 'Ruby' },
  { text: 'React' },
  { text: 'Electron' },
  { text: 'Next.js' },
  { text: 'Ruby on Rails' },
  { text: 'Sass' },
  { text: 'PostCSS' },
  { text: 'CSS Modules' },
  { text: 'Git' },
  { text: 'Docker' },
  { text: 'GitHub Actions' },
  { text: 'CircleCI' },
  { text: 'OpenAPI', logo: 'OpenAPI Initiative' },
  { text: 'webpack' },
  { text: 'Vite', logo: 'vite' },
  { text: 'Figma' },
  { text: 'Adobe Illustrator' },
  { text: 'Sorbet' },
] as const satisfies SkillData[]

export type SkillText = (typeof skillDataList)[number]['text']

const toDataURL = async (url: string) => {
  const response = await fetch(url, { cache: 'force-cache' })
  const blob = await response.blob()
  const binaryText = await blob.text()
  const buffer = Buffer.from(binaryText)
  return 'data:' + blob.type + ';base64,' + buffer.toString('base64')
}

const backgroundColor = '3b3b3b'
const textColor = 'ccc'

const skillDataToSkillImageData = async ({
  text,
  logo = text,
}: {
  text: SkillText
  logo?: string
}) => {
  const url = `https://img.shields.io/badge/-${text}-${backgroundColor}?style=flat-square&logo=${logo}&logoColor=${textColor}`
  const dataUrl = await toDataURL(url)
  return { text, dataUrl }
}

const Page = async () => {
  const skillImageData = await Promise.all(
    skillDataList.map((skillData) => skillDataToSkillImageData(skillData)),
  )

  return <IndexPage skillImageData={skillImageData} />
}

export default Page
