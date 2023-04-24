const hambugerIcon = document.querySelector('.nav-toggler')
const body = document.querySelector('html')
const navigation = document.querySelector("nav")

hambugerIcon.addEventListener("click", toggleNav)

function toggleNav(){
	hambugerIcon.classList.toggle("active")
	navigation.classList.toggle("active")
	body.classList.toggle("active")
}