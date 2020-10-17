const More: React.FC<{ text?: string; link: string; title: string }> = ({
  text = 'more',
  link,
  title,
}) => {
  return (
    <div className='components-more'>
      <a href={link} title={title}>
        <span className='more-button'>{text}</span>
      </a>
    </div>
  )
}

export default More
