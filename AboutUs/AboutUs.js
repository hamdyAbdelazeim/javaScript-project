/* starting footer*/
let btn = document.getElementById('back')
function scrollToTop() {
  window.scrollTo(0, 0)
}
//starting navbar
let increment = document.getElementById('span'),
  btnCart = document.getElementsByClassName('cart')
var u = 0
function incrementSpan() {
  increment.value = u++
}
btnCart.addEventListener('click', incrementSpan())
