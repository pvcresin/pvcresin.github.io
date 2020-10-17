import Social from './social'

const First = () => {
  return (
    <div className='components-first'>
      <nav></nav>
      <div className='container'>
        <h1>Raika Toriyama</h1>
        <p>Web / Android Developer</p>
        <Social></Social>
      </div>
      <div className='container'>
        <div className='arrow'>
          <i className='fas fa-chevron-down fa-3x'></i>
        </div>
      </div>
    </div>
  )
}

export default First
