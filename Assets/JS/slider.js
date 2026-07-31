const swiper = new Swiper(".resourceSwiper",{

loop:true,

spaceBetween:30,

autoplay:{

delay:3500,

disableOnInteraction:false,

},

pagination:{

el:".swiper-pagination",

clickable:true,

},

breakpoints:{

0:{

slidesPerView:1

},

768:{

slidesPerView:2

},

1200:{

slidesPerView:3

}

}

});