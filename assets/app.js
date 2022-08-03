const navbar = document.querySelector('.header__navbar');
  
var animationEle = document.querySelectorAll('.show-on-scroll')
var buttonMobile = document.querySelector('.hamburger-menu')
var menuNavbarMobile = document.querySelector('.header__navbar-list')
console.log(menuNavbarMobile)
buttonMobile.addEventListener('click',changeMobileMenu)
var btn = false

function changeMobileMenu() {
  if(btn){
    btn=!btn
    buttonMobile.classList.add('active')
    menuNavbarMobile.classList.add('active')
  }else{
    btn=!btn
    menuNavbarMobile.classList.remove('active')
    buttonMobile.classList.remove('active')

  }

}
function toggleAnimationEleInWindow(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight
    
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }else{
        // element.classList.remove('start')

    }
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
}

function checkAnimation(){
    animationEle.forEach(el=>{
        toggleAnimationEleInWindow(el)
    })

}
window.onscroll =function(){
    checkAnimation()
    // scrollbtn()

}

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(4000, 1, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(430, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(300, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })
    animateNumber(5000000, 10, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('viewer-count').innerText = formattedNumber
      })
  })