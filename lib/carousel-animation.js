/* first step */

/*

class Carousel {
  constructor(root, animation) {
    this.animation = animation
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.pre = root.querySelector('.pre')
    this.next = root.querySelector('.next')

    this.bind()
  }

  get index() {
    return this.dots.indexOf(this.root.querySelector('.dots .active'))
  }

  get preIndex() {
    return (this.index - 1 + this.dots.length) % this.dots.length
  }

  get nextIndex () {
    return (this.index + 1) % this.dots.length
  }
  
  bind() {
    this.dotCt.onclick = e => {
      if(e.target.tagName !== 'SPAN') return
      let curIndex = this.dots.indexOf(e.target)
      let lastIndex = this.index
      this.showPage(curIndex, lastIndex)  
      this.setDot(curIndex)  
    }

    this.pre.onclick = e => {
      this.showPage(this.preIndex, this.index)  
      this.setDot(this.preIndex)       
    }

    this.next.onclick = e => {
      this.showPage(this.nextIndex, this.index)  
      this.setDot(this.nextIndex)      
    }
  }

  setDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }

  showPage(toIndex, fromIndex) {
    console.log('to from', toIndex, fromIndex)
    
    //this.panels[toIndex].style.zIndex = 1
    this.animation(this.panels[fromIndex], this.panels[toIndex], () => {
      console.log('finish')
      this.panels.forEach(panel => panel.style.zIndex = 0)
      this.panels[toIndex].style.zIndex = 10
    }) 
  }
}

function fade(fromNode, toNode, onFinish) {
  console.log(fromNode, toNode)
  let opacityOffset1 = 1
  let opacityOffset2 = 0
  let step = 0.04
  fromNode.style.zIndex = 10
  toNode.style.zIndex = 9

  function fromNodeAnimation(){
    if(opacityOffset1 > 0){
      opacityOffset1 -= step
      fromNode.style.opacity = opacityOffset1
      requestAnimationFrame(fromNodeAnimation)
    } else {
      fromNode.style.opacity = 0
    } 
  }

  function toNodeAnimation(){
    if(opacityOffset2 < 1){
      opacityOffset2 += step
      toNode.style.opacity = opacityOffset2
      requestAnimationFrame(toNodeAnimation)
    }else {
      toNode.style.opacity = 1
      onFinish()
    }
    
  }

  fromNodeAnimation()
  toNodeAnimation()
}

function slide(fromNode, toNode, onFinish) {
  fromNode.style.zIndex = 10
  toNode.style.zIndex = 10

  let width = parseInt(getComputedStyle(fromNode).width)
  let offsetX = width  //要水平移动的举例
  let offset1 = 0  //第一个元素已经移动的举例
  let offset2 = 0 //第二个元素已经移动的举例
  let step = 10   //每次移动的举例

  toNode.style.left = width + 'px'

  function fromNodeAnimation(){
    if(offset1 < offsetX){
      fromNode.style.left = parseInt(getComputedStyle(fromNode).left) - step + 'px'
      offset1 += step
      requestAnimationFrame(fromNodeAnimation)
    }
  }

  function toNodeAnimation(){
    if(offset2 < offsetX){
      toNode.style.left = parseInt(getComputedStyle(toNode).left) - step + 'px'
      offset2 += step
      requestAnimationFrame(toNodeAnimation)
    }else {
      onFinish()
      fromNode.style.left = 0
      toNode.style.left = 0
    }
  }

  fromNodeAnimation()
  toNodeAnimation()
}

const  carousel = new Carousel(document.querySelector('.carousel'), slide)
console.log(carousel)

*/


class Carousel {
  constructor(root, animation) {
    this.animation = animation || ((from, to, callback) => callback())
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.pre = root.querySelector('.pre')
    this.next = root.querySelector('.next')

    this.bind()
  }

  get index() {
    return this.dots.indexOf(this.root.querySelector('.dots .active'))
  }

  get preIndex() {
    return (this.index - 1 + this.dots.length) % this.dots.length
  }

  get nextIndex () {
    return (this.index + 1) % this.dots.length
  }
  
  bind() {
    this.dotCt.onclick = e => {
      if(e.target.tagName !== 'SPAN') return
      let curIndex = this.dots.indexOf(e.target)
      let lastIndex = this.index
      this.showPage(curIndex, lastIndex)  
      this.setDot(curIndex)  
    }

    this.pre.onclick = e => {
      this.showPage(this.preIndex, this.index)  
      this.setDot(this.preIndex)       
    }

    this.next.onclick = e => {
      this.showPage(this.nextIndex, this.index)  
      this.setDot(this.nextIndex)      
    }
  }

  setDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }

  showPage(toIndex, fromIndex) {
    console.log('to from', toIndex, fromIndex)
    
    //this.panels[toIndex].style.zIndex = 1
    this.animation(this.panels[fromIndex], this.panels[toIndex], () => {
      console.log('finish')
      this.panels.forEach(panel => panel.style.zIndex = 0)
      this.panels[toIndex].style.zIndex = 10
    }) 
  }

  setAnimation(animation) {
    this.animation = animation
  }
}


const Animation = {
  fade(step = 0.04) {
    return function(fromNode, toNode, onFinish) {
      console.log(fromNode, toNode)
      let opacityOffset1 = 1
      let opacityOffset2 = 0
      fromNode.style.zIndex = 10
      toNode.style.zIndex = 9
    
      function fromNodeAnimation(){
        if(opacityOffset1 > 0){
          opacityOffset1 -= step
          fromNode.style.opacity = opacityOffset1
          requestAnimationFrame(fromNodeAnimation)
        } else {
          fromNode.style.opacity = 0
        } 
      }
    
      function toNodeAnimation(){
        if(opacityOffset2 < 1){
          opacityOffset2 += step
          toNode.style.opacity = opacityOffset2
          requestAnimationFrame(toNodeAnimation)
        }else {
          fromNode.style.opacity = 1
          toNode.style.opacity = 1
          onFinish()
        }
        
      }
    
      fromNodeAnimation()
      toNodeAnimation()
    }
  },
  
  slide(step = 10) {
    return function(fromNode, toNode, onFinish){
      fromNode.style.zIndex = 10
      toNode.style.zIndex = 10
    
      let width = parseInt(getComputedStyle(fromNode).width)
      let offsetX = width  //要水平移动的举例
      let offset1 = 0  //第一个元素已经移动的举例
      let offset2 = 0 //第二个元素已经移动的举例
      //let step = 10   //每次移动的举例
    
      toNode.style.left = width + 'px'
    
      function fromNodeAnimation(){
        if(offset1 < offsetX){
          fromNode.style.left = parseInt(getComputedStyle(fromNode).left) - step + 'px'
          offset1 += step
          requestAnimationFrame(fromNodeAnimation)
        }
      }
    
      function toNodeAnimation(){
        if(offset2 < offsetX){
          toNode.style.left = parseInt(getComputedStyle(toNode).left) - step + 'px'
          offset2 += step
          requestAnimationFrame(toNodeAnimation)
        }else {
          onFinish()
          fromNode.style.left = 0
          toNode.style.left = 0
        }
      }
    
      fromNodeAnimation()
      toNodeAnimation()
    }

  },

  cssSlide(during = .3) {
    const css = (node, styles) => Object.entries(styles).forEach(([key, value]) => node.style[key] = value)
    
    return function(fromNode, toNode, onFinish){
      let width = parseInt(getComputedStyle(fromNode).width)
      let fromNodeIndex = Array.from(fromNode.parentElement.children).indexOf(fromNode)
      let toNodeIndex = Array.from(toNode.parentElement.children).indexOf(toNode)

      css(fromNode, {
        zIndex: 10,
        transition: `transform ${during}s`,
        transform: `translateX(${fromNodeIndex < toNodeIndex ? '-' : ''}100%)`
      })
      css(toNode, {
        zIndex: 10,
        left: `${fromNodeIndex < toNodeIndex ? '' : '-'}${width}px`,
        transition: `transform ${during}s`,
        transform: `translateX(${fromNodeIndex < toNodeIndex ? '-' : ''}100%)`
      })

      setTimeout(() => {
        css(fromNode, {
          transition: 'none',
          transform: `translateX(0)`
        })

        css(toNode, {
          left: 0,
          transition: 'none',
          transform: `translateX(0)`          
        })

        onFinish()
      }, during * 1000)

    }

  

  },

  cssZoom(during = .3) {
    const css = (node, styles) => Object.entries(styles).forEach(([key, value]) => node.style[key] = value)
    
    return function(fromNode, toNode, onFinish){
      css(fromNode, {
        zIndex: 10,
        transition: `all ${during}s`,
        transform: `scale(5)`,
        opacity: 0
      })

      css(toNode, {
        zIndex: 9
      })

      setTimeout(() => {
        css(fromNode, {
          transition: 'none',
          transform: `none`,
          opacity: 1
        })
        onFinish()
      }, during * 1000)

    }
  }

}





const  carousel = new Carousel(document.querySelector('.carousel'),  Animation.fade())
console.log(carousel)

document.querySelector('select').onchange = function() {
  console.log(this.value)
  carousel.setAnimation(Animation[this.value]())
}