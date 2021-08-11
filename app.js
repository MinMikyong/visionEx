let menuIcon = document.querySelector(".menu-icon")
let sideBar = document.querySelector(".side-bar")
let container = document.querySelector(".container")
let userIcon = document.querySelector(".user-icon")
let myDropdown = document.querySelector("#myDropdown")


menuIcon.onclick = function() {
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}

userIcon.addEventListener('click',function(){
    myDropdown.classList.toggle("show")
})