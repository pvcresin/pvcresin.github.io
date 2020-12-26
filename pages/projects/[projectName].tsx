import { NextPage } from 'next'

import projectsArray, { Project } from '@/data/index'

import Tags from '@/components/tags'
import Webp from '@/components/webp'
import Footer from '@/components/footer'

import './projectDetail.scss'

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <div className='pages-project_detail'>
        <div className='container'>
          <section>
            {project.video === undefined ? (
              <div className='img-frame'>
                <Webp src={project.img}></Webp>
              </div>
            ) : (
              <div className='video-frame'>
                <iframe
                  src='https://www.youtube.com/embed/{project.video}?rel=0'
                  frameBorder='0'
                  allow='encrypted-media'
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <h1>
              <p>{project.name + ': '}</p>
              <span>{project.sub}</span>
            </h1>
            <Tags tags={project.keywords}></Tags>
            <div className='chapter'>
              <div className='chapter-title'>
                <h2>Abstract</h2>
                <hr />
              </div>
              <p>{project.text}</p>
            </div>
            <div className='chapter'>
              <div className='chapter-title'>
                <h2>Implementation</h2>
                <hr />
              </div>
              <p>{project.implement}</p>
            </div>
            {project.links !== undefined && (
              <div className='chapter'>
                <div className='chapter-title'>
                  <h2>Links</h2>
                  <hr />
                </div>
                <ol>
                  {Object.entries(project.links).map(([key, value]) => (
                    <li key={key}>
                      <span>{key + ': '}</span>
                      <span>
                        <a href={value}>{value}</a>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

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
