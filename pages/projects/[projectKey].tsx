import { NextPage } from 'next'

import projectsArray, { Project } from 'data'

import Tags from 'components/tags'
import Webp from 'components/webp'
import Footer from 'components/footer'
import Navigation from 'components/navigation'

import styles from './[projectKey].module.scss'
import Link from 'components/link'

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }) => (
  <div className='root'>
    <Navigation />
    <section className={styles.section}>
      <div className='container'>
        {project.video ? (
          <div className={styles.videoFrameContainer}>
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${project.video}?rel=0`}
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen
            />
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <Webp src={project.img} imageClassName={styles.image} />
          </div>
        )}
        <h1 className={styles.projectName}>
          <p className={styles.paragraph}>{project.name + ': '}</p>
          {project.sub}
        </h1>
        <Tags tags={project.keywords} />
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Abstract</h2>
          <hr className={styles.chapterLine} />
        </div>
        <p className={styles.paragraph}>{project.text}</p>
        <div className={styles.chapterTitle}>
          <h2 className={styles.chapterTitleText}>Implementation</h2>
          <hr className={styles.chapterLine} />
        </div>
        <p className={styles.paragraph}>{project.implement}</p>
        {!!project.links && (
          <>
            <div className={styles.chapterTitle}>
              <h2 className={styles.chapterTitleText}>Links</h2>
              <hr className={styles.chapterLine} />
            </div>
            <ol className={styles.linkList}>
              {Object.entries(project.links).map(([key, value]) => (
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
  const projectKeys = projectsArray.map((p) => p.key)
  return {
    paths: projectKeys.map((projectKey) => ({
      params: { projectKey },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { projectKey: string } }) {
  const projectKey = context.params.projectKey
  return {
    props: {
      project: projectsArray.find((p) => p.key === projectKey),
    },
  }
}

export default ProjectDetailPage
