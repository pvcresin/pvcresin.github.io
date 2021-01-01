import { getClassNameFunction } from 'utils'

import './tags.scss'

const getClassName = getClassNameFunction('componentsTags')

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className={getClassName()}>
    {tags.map((t) => (
      <span className={getClassName('tag')} key={t}>
        {t}
      </span>
    ))}
  </div>
)

export default Tags
