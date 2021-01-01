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
          <div className={getClassName('imageContainer')}>
            <Webp src={project.img} />
          </div>
        ) : (
          <div className={getClassName('videoFrameContainer')}>
            <iframe
              className={getClassName('videoFrame')}
              src={`https://www.youtube.com/embed/${project.video}?rel=0`}
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen
            />
          </div>
        )}
        <h1 className={getClassName('projectName')}>
          <p className={getClassName('paragraph')}>{project.name + ': '}</p>
          {project.sub}
        </h1>
        <Tags tags={project.keywords} />
        <div className={getClassName('chapterTitle')}>
          <h2 className={getClassName('chapterTitleText')}>Abstract</h2>
          <hr className={getClassName('chapterLine')} />
        </div>
        <p className={getClassName('paragraph')}>{project.text}</p>
        <div className={getClassName('chapterTitle')}>
          <h2 className={getClassName('chapterTitleText')}>Implementation</h2>
          <hr className={getClassName('chapterLine')} />
        </div>
        <p className={getClassName('paragraph')}>{project.implement}</p>
        {!!project.links && (
          <>
            <div className={getClassName('chapterTitle')}>
              <h2 className={getClassName('chapterTitleText')}>Links</h2>
              <hr className={getClassName('chapterLine')} />
            </div>
            <ol className={getClassName('linkList')}>
              {Object.entries(project.links).map(([key, value]) => (
                <li className={getClassName('linkListItem')} key={key}>
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
