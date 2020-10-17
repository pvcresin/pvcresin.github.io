const More = (props) => {
  const text = props.text !== undefined ? props.text : 'more'

  return (
    <div className='components-more'>
      <a href={props.link} title={props.title}>
        <span className='more-button'>{text}</span>
      </a>
    </div>
  )
}

export default More
