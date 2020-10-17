const Tags = (props) => {
  return (
    <div className='components-tags'>
      {props.tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

export default Tags
