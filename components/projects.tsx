import { useState } from 'react'

import projectsArray from '../data'
import Webp from './webp'

const initialCategory = 'All'

const Projects: React.FC<{ category: string; limit?: number }> = ({ category, limit }) => {
  const projects = limit === undefined ? projectsArray : projectsArray.slice(0, limit)

  return (
    <div className='components-projects'>
      {projects
        .filter((p) => category === initialCategory || p.category === category)
        .map((w) => (
          <div className='pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1' key={w.name}>
            <div className='card'>
              <a href={`/projects/${w.name}`}>
                <div className='wrapper'>
                  <Webp className='thumbnail' src={w.img}></Webp>
                </div>
                <div className='content'>
                  <h4>{w.name}</h4>
                  <p>{w.sub}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Projects
