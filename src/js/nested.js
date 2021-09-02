const els = document.querySelectorAll('[data-width]')

const resizeHandler = () => {
  els.forEach(el => {
    const width = el.getBoundingClientRect().width
    const span = el.querySelector('span')
    span.innerHTML = `${parseInt(width)} px`
  })
}

window.addEventListener('load', resizeHandler)
window.addEventListener('resize', resizeHandler)