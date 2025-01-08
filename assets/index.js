
// menu

let close = document.querySelector(".close")
let mobileMenu = document.querySelector(".mobile-menu")
let menu = document.querySelector(".menu")
menu.addEventListener("click", function(){
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
    }else{
        mobileMenu.classList.add('active')
    } 
})

close.addEventListener('click' , function(){
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
    }
    else{
        mobileMenu.classList.add('active')
    } 
})
// standard-menu-mobile
let submenus = document.querySelectorAll(".main-mobile-menu .have-submenu");  

submenus.forEach(submenu => {  
    let titleSubmenu = submenu.querySelector(".title-standard-menu");  
    titleSubmenu.addEventListener('click', function() {  
        submenu.classList.toggle('active');  
    });  
});
// splide

document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        heightRatio: 0.5,          
        pagination: true,      
        arrows    : false,        
        autoplay : true,          
        interval : 5000,          
        direction: 'rtl', 
        type   : 'loop'             
    });

    splide.mount();
});











