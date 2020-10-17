const Webp: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  return (
    <div className={className ? `components-webp ${className}` : 'components-webp'}>
      <picture>
        <source srcSet={`resources/${src}.webp`} type='image/webp' />
        <source srcSet={`resources/${src}.png`} type='image/png' />
        <img src={`resources/${src}.webp`} />
      </picture>
    </div>
  )
}

export default Webp
