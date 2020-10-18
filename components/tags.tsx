import './tags.scss'

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className='components-tags'>
      {tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

export default Tags
