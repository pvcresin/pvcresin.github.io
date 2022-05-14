import { NextPage } from 'next'

import worksArray, { Work } from 'data'

import Tags from 'components/tags'
import Webp from 'components/webp'
import Footer from 'components/footer'
import Navigation from 'components/navigation'

import styles from './[workKey].module.scss'
import Link from 'components/link'

const WorkDetailPage: NextPage<{ work: Work }> = ({ work }) => (
  <div className='root'>
    <Navigation />
    <section className={styles.section}>
      <div className='container'>
        {work.video ? (
          <div className={styles.videoFrameContainer}>
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${work.video}?rel=0`}
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen
            />
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <Webp src={work.img} imageClassName={styles.image} />
          </div>
        )}
        <h1 className={styles.name}>
          <p className={styles.paragraph}>{work.name + ': '}</p>
          {work.sub}
        </h1>
        <Tags tags={work.keywords} />
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Abstract</h2>
          <hr className={styles.chapterLine} />
        </div>
        <p className={styles.paragraph}>{work.text}</p>
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Implementation</h2>
          <hr className={styles.chapterLine} />
        </div>
        <p className={styles.paragraph}>{work.implement}</p>
        {work.links && (
          <>
            <div className={styles.chapterTitle}>
              <h2 className={styles.chapterTitleText}>Links</h2>
              <hr className={styles.chapterLine} />
            </div>
            <ol className={styles.linkList}>
              {Object.entries(work.links).map(([key, value]) => (
                <li className={styles.linkListItem} key={key}>
                  {key + ': '}
                  <Link href={value} isExternalLink withExternalIcon>
                    {value}
                  </Link>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
    <Footer />
  </div>
)

export async function getStaticPaths() {
  const workKeys = worksArray.map((p) => p.key)
  return {
    paths: workKeys.map((workKey) => ({
      params: { workKey },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { workKey: string } }) {
  const workKey = context.params.workKey
  return {
    props: {
      work: worksArray.find((p) => p.key === workKey),
    },
  }
}

export default WorkDetailPage
