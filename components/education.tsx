import List from './list'

const schools = [
  {
    date: '2010-04 - 2013-03',
    title: '本郷高等学校',
    texts: ['東京・巣鴨にある私立の中高一貫校', '生徒会・料理研究会・美術部に所属'],
    link: 'http://www.hongo.ed.jp/',
  },
  {
    date: '2013-04 - 2017-03',
    title: '明治大学',
    texts: [
      '総合数理学部 先端メディアサイエンス学科 1期生',
      'PCでコンテンツ制作をするサークルを立ち上げ、幹事長を務める',
    ],
    link: 'http://www.meiji.ac.jp/ims/subject/fms/',
  },
  {
    date: '2017-04 - 2019-03',
    title: '明治大学大学院',
    texts: [
      '先端数理科学研究科 先端メディアサイエンス専攻 修士（工学）',
      'モバイル / ウェアラブルデバイスに関するインタラクションの研究',
      'アルバイトでフロントエンドエンジニアとして働く',
    ],
    link: 'http://www.meiji.ac.jp/ams/professor/FMS.html',
  },
]

const Education = () => {
  return (
    <>
      <h2 className='section-title'>Education</h2>
      <List items={schools}></List>
    </>
  )
}

export default Education
