var mobileToggler = document.querySelector(".mobileMenuToggle")
var icon = document.querySelector("#hamburger")
var menu = document.querySelector(".navigationList")
mobileToggler.addEventListener("click", ()=>{
   
    if(menu.ariaExpanded ==="false"){
        mobileToggler.classList.add("fixed")
        menu.classList.add("opened")
        menu.setAttribute("aria-expanded", "true")
        icon.src = "../starter-code/assets/shared/icon-close.svg"
    } else{
        mobileToggler.classList.remove("fixed")
        menu.classList.remove("opened")
        menu.setAttribute("aria-expanded", "false")
        icon.src = "../starter-code/assets/shared/icon-hamburger.svg"
    }
})