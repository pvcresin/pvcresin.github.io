import { FadeInSection } from '@components/FadeInSection'
import { Footer } from '@components/footer'
import { Link } from '@components/link'
import { Navigation } from '@components/navigation'
import { Tags } from '@components/tags'
import { Webp } from '@components/webp'
import { worksArray } from '@data/index'
import type { Work } from '@data/index'

import type { NextPage } from 'next'

import styles from './[workKey].module.scss'

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
        <FadeInSection>
          <h1 className={styles.title}>
            <p className={styles.paragraph}>{work.title + ': '}</p>
            {work.sub}
          </h1>
        </FadeInSection>
        <FadeInSection>
          <Tags tags={work.keywords} />
        </FadeInSection>
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Abstract</h2>
          <hr className={styles.chapterLine} />
        </div>
        <FadeInSection>
          <p className={styles.paragraph}>{work.text}</p>
        </FadeInSection>
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Implementation</h2>
          <hr className={styles.chapterLine} />
        </div>
        <FadeInSection>
          <p className={styles.paragraph}>{work.implement}</p>
        </FadeInSection>
        {work.links && (
          <>
            <div className={styles.chapterTitle}>
              <h2 className={styles.chapterTitleText}>Links</h2>
              <hr className={styles.chapterLine} />
            </div>
            <FadeInSection>
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
            </FadeInSection>
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
