// form validation
let myName = document.getElementById('name'),
  myEmail = document.getElementById('email'),
  phone = document.getElementById('phone'),
  form = document.getElementById('form'),
  theErrors = document.getElementById('error'),
  smallName = document.getElementById('small-name'),
  smallPassword = document.getElementById('small-password'),
  smallEmail = document.getElementById('small-email'),
  smallSports = document.getElementById('small-sports'),
  smallGender = document.getElementById('small-gender'),
  smallCountry = document.getElementById('small-country'),
  radios = document.getElementsByName('Gender'),
  checkbox = document.getElementsByName('sports')

console.log(checkbox)

form.addEventListener('submit', (e) => {
  if (!/^[a-zA-Z ]{8,}$/gm.test(myName.value)) {
    e.preventDefault()
    smallName.innerHTML = 'Name is required and must be at least 8 characters'
    myName.style.border = '1px solid red'
  }

  if (!/^01[0125][0-9]{8}$/gm.test(phone.value)) {
    e.preventDefault()
    smallPassword.innerHTML =
      'Phone Number is required and must be at least 11 Numbers'
    password.style.border = '1px solid red'
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myEmail.value)) {
    smallEmail.innerHTML = 'please enter valid  email address'
    myEmail.style.border = '1px solid red'
  }
  // validation of the radio inputs
  var formValid = false
  var i = 0
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true
    i++
  }

  if (!formValid) {
    e.preventDefault()
    smallGender.innerHTML = 'please select at least one option'
  }
})

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
