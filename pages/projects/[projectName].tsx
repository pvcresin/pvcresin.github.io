import { NextPage } from 'next'
import Link from 'next/link'

import projectsArray from '../../src/data'

const ProjectDetailPage: NextPage<any> = ({ project }) => {
  const { name } = project
  return (
    <div>
      <h1>ProjectDetailPage: {name}</h1>
      <p>{JSON.stringify(project)}</p>
      <Link href='/'>
        <a>Index</a>
      </Link>
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
