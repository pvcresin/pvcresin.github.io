import { NextPage } from 'next'

import projectsArray, { Project } from 'data'

import { getClassNameFunction } from 'utils'

import Tags from 'components/tags'
import Webp from 'components/webp'
import Footer from 'components/footer'

import './[projectName].scss'

const getClassName = getClassNameFunction('pagesProjectDetail')

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }) => (
  <div className={getClassName()}>
    <div className='container'>
      <section className={getClassName('section')}>
        {!project.video ? (
          <div className={getClassName('image-container')}>
            <Webp src={project.img} />
          </div>
        ) : (
          <div className={getClassName('video-frame-container')}>
            <iframe
              className={getClassName('video-frame')}
              src={`https://www.youtube.com/embed/${project.video}?rel=0`}
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen
            />
          </div>
        )}
        <h1 className={getClassName('project-name')}>
          <p className={getClassName('paragraph')}>{project.name + ': '}</p>
          {project.sub}
        </h1>
        <Tags tags={project.keywords} />
        <div className={getClassName('chapter-title')}>
          <h2 className={getClassName('chapter-title-text')}>Abstract</h2>
          <hr className={getClassName('chapter-line')} />
        </div>
        <p className={getClassName('paragraph')}>{project.text}</p>
        <div className={getClassName('chapter-title')}>
          <h2 className={getClassName('chapter-title-text')}>Implementation</h2>
          <hr className={getClassName('chapter-line')} />
        </div>
        <p className={getClassName('paragraph')}>{project.implement}</p>
        {!!project.links && (
          <>
            <div className={getClassName('chapter-title')}>
              <h2 className={getClassName('chapter-title-text')}>Links</h2>
              <hr className={getClassName('chapter-line')} />
            </div>
            <ol className={getClassName('link-list')}>
              {Object.entries(project.links).map(([key, value]) => (
                <li className={getClassName('link-list-item')} key={key}>
                  {key + ': '}
                  <a className={getClassName('link')} href={value}>
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
