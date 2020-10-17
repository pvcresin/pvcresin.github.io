const Webp = (props) => {
  // this.on('mounted', () => {
  //   console.log(this.opts)
  // })

  return (
    <div className='components-webp'>
      <picture>
        <source srcSet={`resources/${props.src || props.riotSrc}.webp`} type='image/webp' />
        <source srcSet={`resources/${props.src || props.riotSrc}.png`} type='image/png' />
        <img src={`resources/${props.src || props.riotSrc}.webp`} />
      </picture>
    </div>
  )
}

export default Webp
