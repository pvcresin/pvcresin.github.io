import Link from 'next/link'

import projectsArray from '../data'
import Webp from './webp'

const initialCategory = 'All'

const Projects: React.FC<{ category?: string; limit?: number }> = ({
  category = initialCategory,
  limit,
}) => {
  const projects = limit === undefined ? projectsArray : projectsArray.slice(0, limit)

  return (
    <div className='components-projects'>
      {projects
        .filter((p) => category === initialCategory || p.category === category)
        .map((w) => (
          <div className='pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1' key={w.name}>
            <div className='card'>
              <Link href={`/projects/${w.name}`}>
                <a>
                  <div className='wrapper'>
                    <Webp className='thumbnail' src={w.img}></Webp>
                  </div>
                  <div className='content'>
                    <h4>{w.name}</h4>
                    <p>{w.sub}</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Projects
