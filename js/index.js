// 今日头条盒子
const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')
const ul = document.querySelector('.title-text')

const title_header = document.querySelector('.title-header')

let num = 0
arrowLeft.addEventListener('click', function () {
  changeLeft()
})
arrowRight.addEventListener('click', function () {
  const banner = function () {
    num++
    ul.style.top = -40 + num + 'px'
    if (num % 40 !== 0) {
      setTimeout(banner, 10)
    }

    if (num > 40) {
      num = -80
    }
  }
  banner()
})

function changeLeft() {
  const banner = function () {
    num--
    ul.style.top = -40 + num + 'px'
    if (num % 40 !== 0) {
      setTimeout(banner, 10)
    }
    if (num < -120) {
      num = -1
    }
  }
  banner()
}

let timer = setInterval(changeLeft, 2500)
title_header.addEventListener('mouseenter', function () {
  clearInterval(timer)
})
title_header.addEventListener('mouseleave', function () {
  timer = setInterval(changeLeft, 2500)
})

// banner

const imgUrls = [
  {
    url: './image/banenr1.jpg',
    title: '市政协委员调研“两区”规则制度创新 魏小东参加'
  },
  {
    url: './image/banenr2.jpg',
    title: '市政协机关团委召开换届选举大会'
  },
  {
    url: './image/banenr3.jpg',
    title: '双奥女村长！她为何要在村里筑起冰雪“长城”'
  },
  {
    url: './image/banenr4.jpg',
    title: '北京市政协党组召开会议'
  },
  {
    url: './image/banenr5.jpg',
    title: '全国政协领导在京调研 李斌魏小东参加'
  },
]
const img = document.querySelector('.fl-img img')
const a = document.querySelector('.fl-title a')
const uls = document.querySelector('.circle').children
const banner_fl = document.querySelector('.banner-fl')

let bannerIndex = 0
for (let i = 0; i < uls.length; i++) {
  uls[i].addEventListener('click', function () {
    img.src = `${imgUrls[i].url}`
    a.innerHTML = `${imgUrls[i].title}`
    for (let j = 0; j < uls.length; j++) {
      uls[j].className = ''
    }
    uls[i].className = 'selected'
    bannerIndex = i
  })
}
let timer2 = setInterval(bannerChange, 2500)
function bannerChange() {
  bannerIndex++
  bannerIndex = bannerIndex > 4 ? 0 : bannerIndex
  img.src = `${imgUrls[bannerIndex].url}`
  a.innerHTML = `${imgUrls[bannerIndex].title}`
  for (let j = 0; j < uls.length; j++) {
    uls[j].className = ''
  }
  uls[bannerIndex].className = 'selected'
}


banner_fl.addEventListener('mouseenter', function () {
  clearInterval(timer2)
})

banner_fl.addEventListener('mouseleave', function () {
  timer2 = setInterval(bannerChange, 2500)
})

// banner-fr
const uls2 = document.querySelector('.fr-title').children
const contents = document.querySelector('#uls').children
for (let i = 0; i < uls2.length; i++) {
  uls2[i].addEventListener('mouseenter', function () {
    for (let j = 0; j < contents.length; j++) {
      contents[j].style.display = 'none';
      uls2[j].className = ''
    }
    contents[i].style.display = 'block';
    uls2[i].className = 'selected'
  })
}




// 通知公告
const arrowLeft2 = document.querySelector('#arrowLeft')
const arrowRight2 = document.querySelector('#arrowRight')
const ul3 = document.querySelector('#ul')
const ul3Parent = ul3.parentNode

let num2 = 0
arrowLeft2.addEventListener('click', function () {
  change()
})
arrowRight2.addEventListener('click', function () {
  const banner = function () {
    num2++
    ul3.style.top = -40 + num2 + 'px'
    if (num2 % 40 !== 0) {
      setTimeout(banner, 10)
    }
    if (num2 == 40) {
      num2 = -120
    }
  }
  banner()
})

function change() {
  const banner = function () {
    num2--
    ul3.style.top = -40 + num2 + 'px'
    if (num2 % 40 !== 0) {
      setTimeout(banner, 10)
    }
    if (num2 < -160) {
      num2 = -1
    }
  }
  banner()
}

let timer3 = setInterval(change, 2500)
ul3Parent.addEventListener('mouseenter', function () {
  clearInterval(timer3)
})
ul3Parent.addEventListener('mouseleave', function () {
  timer3 = setInterval(change, 2500)
})

// media_report
const media_arrowLeft = document.querySelector('#media_arrowLeft')
const media_arrowRight = document.querySelector('#media_arrowRight')
const media_ul = document.querySelector('.media_ul')
const media_ul_Parent = document.querySelector('.media_ul').parentNode.parentNode

let mediaNum = 0
media_arrowLeft.addEventListener('click', function () {
  const banner = function () {
    if (mediaNum > -1) {
      return
    }
    mediaNum++
    media_ul.style.left = -260 + mediaNum + 'px'
    if (mediaNum % 260 !== 0) {
      setTimeout(banner, 5)
    }

  }
  banner()
})

media_arrowRight.addEventListener('click', function () {
  mediaRight()
})

function mediaRight() {
  const banner = function () {
    mediaNum--
    media_ul.style.left = -260 + mediaNum + 'px'
    if (mediaNum % 260 !== 0) {
      setTimeout(banner, 5)
    }
    if (mediaNum < -1300) {
      mediaNum = 260
    }

  }
  banner()
}

let timer4 = setInterval(mediaRight, 2500)
media_ul_Parent.addEventListener('mouseenter', function () {
  clearInterval(timer4)
})
media_ul_Parent.addEventListener('mouseleave', function () {
  timer4 = setInterval(mediaRight, 2500)
})

// 视听报道
const stbdUl_ul = document.querySelector('.stbdUl-ul').children
const stbdUl_items = document.querySelector('.stbdUl-items').children

for (let i = 0; i < stbdUl_ul.length; i++) {
  stbdUl_ul[i].addEventListener('mouseenter', function () {
    for (let j = 0; j < stbdUl_ul.length; j++) {
      stbdUl_ul[j].className = ''
      stbdUl_items[j].style.display = 'none'
    }
    stbdUl_ul[i].className = 'stbdUl-selected'
    stbdUl_items[i].style.display = 'flex'
  })
}

// 各地政协
const gdzx_ul = document.querySelector('.gdzx-ul').children
const gdzx_items = document.querySelector('.gdzx-items').children

for (let i = 0; i < gdzx_ul.length; i++) {
  gdzx_ul[i].addEventListener('mouseenter', function () {
    for (let j = 0; j < gdzx_ul.length; j++) {
      gdzx_ul[j].className = ''
      gdzx_items[j].style.display = 'none'
    }
    gdzx_ul[i].className = 'gdzx-selected'
    gdzx_items[i].style.display = 'block'
    gdzx_items[i].style.transition = 'all 0.3s'
  })
}

// 滚动监听
const goTop = document.querySelector('.gotoTop')
const body = document.body
console.log(body);
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 400) {
    goTop.style.display = 'block'
  } else {
    goTop.style.display = 'none'
  }
})

goTop.addEventListener('click', function () {
  let h = document.documentElement.scrollTop
  let num = 1
  let timer5 = setInterval(function () {
    h -= num
    if (h <= 0) {
      clearInterval(timer5)
    }
    scrollBy(0, -num)
    num++
  }, 1)
})