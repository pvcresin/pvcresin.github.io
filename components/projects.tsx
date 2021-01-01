import Link from 'next/link'

import projectsArray from 'data'

import { getClassNameFunction } from 'utils'

import Webp from './webp'

import './projects.scss'

const getClassName = getClassNameFunction('componentsProjects')

const initialCategory = 'All'

const Projects: React.FC<{ category?: string; limit?: number }> = ({
  category = initialCategory,
  limit = projectsArray.length,
}) => (
  <div className={getClassName()}>
    {projectsArray
      .slice(0, limit)
      .filter((p) => category === initialCategory || p.category === category)
      .map((w) => (
        <div
          className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${getClassName('content')}`}
          key={w.name}
        >
          <Link href={`/projects/${w.name}`}>
            <div className={getClassName('card')}>
              <div className={getClassName('imageWrapper')}>
                <Webp imageClassName={getClassName('image')} src={w.img}></Webp>
              </div>
              <div className={getClassName('projectInfo')}>
                <h4 className={getClassName('projectName')}>{w.name}</h4>
                <p className={getClassName('projectDescription')}>{w.sub}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
  </div>
)

export default Projects
