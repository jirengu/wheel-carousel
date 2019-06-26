const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

$('.carousel .dots').onclick = function(e) {
  if(e.target.tagName !== 'SPAN') return
  Array.from(this.children).forEach(span => span.classList.remove('active'))
  e.target.classList.add('active')

  let index = Array.from(this.children).indexOf(e.target)
  showPage(index)
}

function showPage(pageIndex) {
  $$('.carousel .panels > a').forEach(panel => panel.style.zIndex = 0)
  $$('.carousel .panels > a')[pageIndex].style.zIndex = 1
}
