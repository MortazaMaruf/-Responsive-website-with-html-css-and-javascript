let hideMenu = document.querySelector(".ri-close-line");
let showMenu = document.querySelector(".ri-menu-5-line");
let navMenus = document.querySelector("#navmenus")
showMenu.addEventListener("click",function() {
    navMenus.style.right = "0px";
})
hideMenu.addEventListener("click",function() {
    navMenus.style.right = "-220px";
})