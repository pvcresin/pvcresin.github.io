import { FadeInSection } from '@/components/FadeInSection'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'
import { Navigation } from '@/components/Navigation'
import { Tags } from '@/components/Tags'
import { Webp } from '@/components/Webp'
import { WidthContainer } from '@/components/WidthContainer'
import { worksArray } from '@/data/works'
import type { Work } from '@/data/works'

import type { NextPage } from 'next'

import styles from './[workKey].module.scss'

const WorkDetailPage: NextPage<{ work: Work }> = ({ work }) => (
  <div className='root'>
    <Navigation />
    <section className={styles.section}>
      <WidthContainer>
        {work.video ? (
          <div className={styles.videoFrameContainer}>
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${work.video}?rel=0`}
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
            {work.title + ': '}
            <br />
            {work.sub}
          </h1>
        </FadeInSection>
        <FadeInSection>
          <Tags tags={work.keywords} />
        </FadeInSection>
        <h2 className={styles.chapterTitle}>Abstract</h2>
        <FadeInSection>
          <p className={styles.paragraph}>{work.text}</p>
        </FadeInSection>
        <h2 className={styles.chapterTitle}>Implementation</h2>
        <FadeInSection>
          <p className={styles.paragraph}>{work.implement}</p>
        </FadeInSection>
        {work.links && (
          <>
            <h2 className={styles.chapterTitle}>Links</h2>
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
      </WidthContainer>
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
