import Link from 'next/link'

import projectsArray from 'data'

import Webp from './webp'

import styles from './projects.module.scss'

const initialCategory = 'All'

const Projects: React.FC<{ category?: string; limit?: number }> = ({
  category = initialCategory,
  limit = projectsArray.length,
}) => (
  <div className={styles.root}>
    {projectsArray
      .slice(0, limit)
      .filter((p) => category === initialCategory || p.category === category)
      .map((w) => (
        <div className={`pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1 ${styles.content}`} key={w.name}>
          <Link href={`/projects/${w.name}`}>
            <article className={styles.card}>
              <div className={styles.imageWrapper}>
                <Webp imageClassName={styles.image} src={w.img}></Webp>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{w.name}</h3>
                <p className={styles.projectDescription}>{w.sub}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
  </div>
)

export default Projects
