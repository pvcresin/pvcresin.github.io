export default class Scroll {
  static init() {
    window.scrolls = {}

    window.addEventListener('scroll', () => {
      const posY = window.pageYOffset
      const path = window.location.hash
      window.scrolls[`${path}`] = posY
    })
  }
  static move() {
    const path = window.location.hash

    if (window.scrolls[`${path}`]) window.scroll(0, 0)
    else window.scroll(0, window.scrolls[`${path}`])
  }
}
