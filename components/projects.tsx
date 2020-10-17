import projectsArray from '../src/data'
import Webp from './webp'

const Projects = (props) => {
  const category = 'All'
  const projects = props.limit === undefined ? projectsArray : projectsArray.slice(0, props.limit)

  // this.on('updated', () => {
  //   //- console.log(this.projects, props.category)

  //   if (props.category && props.category !== category) {
  //     this.update({
  //       category: props.category,
  //       projects:
  //         props.category === 'All'
  //           ? projectsArray
  //           : projectsArray.filter((p) => p.category === props.category),
  //     })
  //   }
  // })

  return (
    <div className='components-projects'>
      {projects.map((w) => (
        <div className='pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1' key={w.name}>
          <div className='card'>
            <a href='#projects/{w.name.replace(/ /g, `_`)}'>
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
