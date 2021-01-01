import { NextPage } from 'next'

import projectsArray, { Project } from 'data'

import Tags from 'components/tags'
import Webp from 'components/webp'
import Footer from 'components/footer'

import styles from './[projectName].module.scss'

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }) => (
  <div className={styles.root}>
    <div className='container'>
      <section className={styles.section}>
        {!project.video ? (
          <div className={styles.imageContainer}>
            <Webp src={project.img} />
          </div>
        ) : (
          <div className={styles.videoFrameContainer}>
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${project.video}?rel=0`}
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen
            />
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
                  <a className={styles.link} href={value}>
                    {value}
                  </a>
                </li>
              ))}
            </ol>
          </>
        )}
      </section>
    </div>
    <Footer />
  </div>
)

export async function getStaticPaths() {
  const projectNames = projectsArray.map((p) => p.name)
  return {
    paths: projectNames.map((projectName) => ({
      params: { projectName },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { projectName: string } }) {
  const projectName = context.params.projectName
  return {
    props: {
      project: projectsArray.find((p) => p.name === projectName),
    },
  }
}

export default ProjectDetailPage
