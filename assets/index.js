
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
// splide

document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        heightRatio: 0.5,          
        pagination: true,      
        arrows    : false,        
        autoplay : true,          
        interval : 3000,          
        direction: 'rtl',                 
    });

    splide.mount();
});










