
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
        type   : 'loop',
    });

    splide.mount();
});

//date

        // تابع تبدیل تاریخ میلادی به شمسی
        function gregorianToJalali(gy, gm, gd) {
            const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            const jMonths = [
                "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
                "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
            ];
            let jy = gy <= 1600 ? 0 : 979;
            gy -= gy <= 1600 ? 621 : 1600;
            const gy2 = gm > 2 ? gy + 1 : gy;
            let days = 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + g_d_m[gm - 1];
            jy += 33 * Math.floor(days / 12053);
            days %= 12053;
            jy += 4 * Math.floor(days / 1461);
            days %= 1461;
            jy += Math.floor((days - 1) / 365);
            if (days > 365) days = (days - 1) % 365;
            const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
            const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
            return { jy, jm, jd, jMonthName: jMonths[jm - 1] };
        }

        // تابع دریافت نام روز هفته
        function getDayName(dayIndex) {
            const days = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
            return days[dayIndex];
        }

        // تابع دریافت نام ماه میلادی
        function getGregorianMonthName(monthIndex) {
            const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            return months[monthIndex];
        }

        // دریافت تاریخ جاری میلادی
        const currentDate = new Date();
        const gy = currentDate.getFullYear();
        const gm = currentDate.getMonth() + 1; 
        const gd = currentDate.getDate();
        const dayIndex = currentDate.getDay(); 

        // تبدیل تاریخ به شمسی
        const jalaliDate = gregorianToJalali(gy, gm, gd);

        // دریافت نام روز هفته
        const dayName = getDayName(dayIndex);

        // دریافت نام ماه میلادی
        const monthName = getGregorianMonthName(currentDate.getMonth());

        // قالب‌بندی تاریخ شمسی
        const formattedJalaliDate = `${dayName} ${jalaliDate.jd} ${jalaliDate.jMonthName} ${jalaliDate.jy}`;

        // قالب‌بندی تاریخ میلادی
        const formattedGregorianDate = `${monthName} ${gy} ${gd}`;

        // نمایش تاریخ‌ها در تگ‌های جداگانه
        document.querySelector(".date-shamsi").textContent = `${formattedJalaliDate}`;
        document.querySelector(".date-miladi").textContent = `${formattedGregorianDate}`;














