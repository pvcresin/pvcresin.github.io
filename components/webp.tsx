const Webp: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  return (
    <div className={className ? `components-webp ${className}` : 'components-webp'}>
      <picture>
        <source srcSet={`/${src}.webp`} type='image/webp' />
        <source srcSet={`/${src}.png`} type='image/png' />
        <img src={`/${src}.webp`} />
      </picture>
    </div>
  )
}

export default Webp
