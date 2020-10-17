const Webp: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className='components-webp'>
      <picture>
        <source srcSet={`resources/${src}.webp`} type='image/webp' />
        <source srcSet={`resources/${src}.png`} type='image/png' />
        <img src={`resources/${src}.webp`} />
      </picture>
    </div>
  )
}

export default Webp
