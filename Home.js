// starting with slider
//define
var mySlider = document.getElementById('img'),
  imgs = [
    './img/blog/b1.jpg',
    './img/blog/b2.jpg',
    './img/blog/b3.jpg',
    './img/blog/b4.jpg',
  ]
var slidPrev = document.getElementById('prev'),
  slidNext = document.getElementById('next'),
  myP = document.querySelectorAll('p')
mySlider.src = imgs[0]
myP[0].style.backgroundColor = 'gray'
var i = 0
function next() {
  if (i === imgs.length - 1) {
    i = 0
    myP[3].style.backgroundColor = ' rgb(107, 141, 107)'
    myP[i].style.backgroundColor = 'gray'
    mySlider.src = imgs[0]
  } else {
    i++
    mySlider.src = imgs[i]
    for (var j = 0; j <= myP.length - 1; j++) {
      myP[j].style.backgroundColor = ' rgb(107, 141, 107)'
    }

    myP[i].style.backgroundColor = 'gray'
  }
}
function prev() {
  if (i === 0) {
    i = imgs.length - 1
    myP[0].style.backgroundColor = ' rgb(107, 141, 107)'
    myP[i].style.backgroundColor = 'gray'
    mySlider.src = imgs[3]
  } else {
    i--
    mySlider.src = imgs[i]
    for (var j = 0; j <= myP.length - 1; j++) {
      myP[j].style.backgroundColor = ' rgb(107, 141, 107)'
    }
    myP[i].style.backgroundColor = 'gray'
  }
}
slidNext.addEventListener('click', next)
slidPrev.addEventListener('click', prev)
// play
let btnPlay = document.getElementById('play')
let x
x = setInterval('next()', 4000)
// ending slider
/*---------------------------------------------------------------------------------*/
// filter section
let all = document.getElementById('All'),
  shirts = document.getElementById('shirts'),
  pants = document.getElementById('pants')
console.log(all, shirts, pants)
const container = document.getElementsByClassName('pro-container')
const pro = document.getElementsByClassName('pro')
console.log(pro)
console.log(pro[6])
function selectShirts() {
  pro[6].classList.add('d-none')
  pro[7].classList.add('d-none')
  pro[0].classList.remove('d-none')
  pro[1].classList.remove('d-none')
  pro[2].classList.remove('d-none')
  pro[3].classList.remove('d-none')
  pro[4].classList.remove('d-none')
  pro[5].classList.remove('d-none')
}
function selectAll() {
  pro[6].classList.remove('d-none')
  pro[7].classList.remove('d-none')
  pro[0].classList.remove('d-none')
  pro[1].classList.remove('d-none')
  pro[2].classList.remove('d-none')
  pro[3].classList.remove('d-none')
  pro[4].classList.remove('d-none')
  pro[5].classList.remove('d-none')
}
function selectPants() {
  pro[0].classList.add('d-none')
  pro[1].classList.add('d-none')
  pro[2].classList.add('d-none')
  pro[3].classList.add('d-none')
  pro[4].classList.add('d-none')
  pro[5].classList.add('d-none')
  pro[6].classList.remove('d-none')
  pro[7].classList.remove('d-none')
}
/*--------------------------------------------------------------------------------------*/
/* starting footer*/
let btn = document.getElementById('back')
function scrollToTop() {
  window.scrollTo(0, 0)
}
// ending footer
/*----------------------------------------------------------------------------------*/
//starting navbar
let increment = document.getElementById('span'),
  btnCart = document.getElementsByClassName('cart')
var u = 0
function incrementSpan() {
  increment.value = ++u
}
