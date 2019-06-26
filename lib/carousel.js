/* first step */

/*
class Carousel {
  constructor(root) {
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))

    this.bind()
  }
  
  bind() {
    this.dotCt.onclick = e => {
      if(e.target.tagName !== 'SPAN') return
      this.dots.forEach(dot => dot.classList.remove('active'))
      e.target.classList.add('active')
      
      let index = this.dots.indexOf(e.target)
      this.showPage(index)      
    }
  }

  showPage(index) {
    this.panels.forEach(panel => panel.style.zIndex = 0)
    this.panels[index].style.zIndex = 1
  }
}

new Carousel(document.querySelector('.carousel'))

*/

/* second step */

class Carousel {
  constructor(root) {
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.pre = root.querySelector('.pre')
    this.next = root.querySelector('.next')

    this.bind()
  }
  
  bind() {
    this.dotCt.onclick = e => {
      if(e.target.tagName !== 'SPAN') return

      let index = this.dots.indexOf(e.target)
      this.setDot(index)
      this.showPage(index)      
    }

    this.pre.onclick = e => {
      let index = this.dots.indexOf(this.root.querySelector('.dots .active'))
      index = (index - 1 + this.dots.length) % this.dots.length
      this.setDot(index)
      this.showPage(index)         
    }

    this.next.onclick = e => {
      let index = this.dots.indexOf(this.root.querySelector('.dots .active'))
      index = (index + 1) % this.dots.length
      this.setDot(index)
      this.showPage(index)         
    }
  }

  setDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }

  showPage(index) {
    this.panels.forEach(panel => panel.style.zIndex = 0)
    this.panels[index].style.zIndex = 1
  }
}

new Carousel(document.querySelector('.carousel'))