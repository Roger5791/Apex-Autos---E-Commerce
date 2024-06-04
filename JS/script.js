var sideCartToggle = document.querySelector(".sideCartToggle");
var sideCartToggler = document.querySelector(".sideCartToggler");
var sideCartCon = document.querySelector(".sidemenu-content");
var mobileMenuToggler = document.querySelector(".mobile-toggler");
var mobileMenuCon = document.querySelector(".sidemenu-wrapper");
var searchBoxCon = document.querySelector(".popup-search-box");
var searchBoxToggle = document.querySelector(".searchIconToggle");
var closeMenu = document.querySelector(".cart-left");
var closeMenu2 = document.querySelector(".menu-right");


/*======Scroll-to-top-Btn==========*/

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#E01010 ${scrollValue}%, #ffff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



/*=======Search-Menu===========*/

function closeSearch(){
  searchBoxCon.classList.remove("show-search");
}

searchBoxToggle.addEventListener("click", (e) => {
  searchBoxCon.classList.toggle("show-search");
    e.stopImmediatePropagation();
});




/*=======Cart-Menu===========*/
function closeCart(){
  sideCartCon.classList.remove("side-menu-height");
}

sideCartToggle.addEventListener("click", (e) => {
  sideCartCon.classList.toggle("side-menu-height");
    e.stopImmediatePropagation();
});

sideCartToggler.addEventListener("click", (e) => {
  sideCartCon.classList.toggle("side-menu-height");
    e.stopImmediatePropagation();
});

closeMenu.addEventListener("click", (e) => {
  sideCartCon.classList.remove("side-menu-height");
    e.stopImmediatePropagation();
});




/*=======Mobile-Menu===========*/

function closeTab(){
  mobileMenuCon.classList.remove("mobile-menu-show");
}


mobileMenuToggler.addEventListener("click", (eb) => {
  mobileMenuCon.classList.toggle("mobile-menu-show");
    eb.stopImmediatePropagation();
});

closeMenu2.addEventListener("click", (eg) => {
  mobileMenuCon.classList.remove("mobile-menu-show");
    eg.stopImmediatePropagation();
});




  
  /*========slider===========*/
  
  let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 8000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 8000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});







/*=======filters===========*/



const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-fil');
        });

        target.classList.add('active-fil');

        tabs.forEach((tab) => {
            tab.classList.remove('active-fil');
        });

        tab.classList.add('active-fil');

    });
});





 /*=============== Popular TABS ===============*/

 const tabss = document.querySelectorAll('[data-target]'),
 tabContentss = document.querySelectorAll('[content]');
 
 tabss.forEach((tab) => {
     tab.addEventListener('click', () => {
         const target = document.querySelector(tab.dataset.target);
         tabContentss.forEach((tabContent) => {
             tabContent.classList.remove('active-fill');
         });
 
         target.classList.add('active-fill');
 
         tabss.forEach((tab) => {
             tab.classList.remove('active-fill');
         });
 
         tab.classList.add('active-fill');
 
     });
 });



 /*==============car-categories-swiper===================*/


var swipercat = new Swiper(".car-cat-swiper", {
  spaceBetween: 5,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween:35,
    },
    568: {
      slidesPerView: 3,
      spaceBetween:45,
    },
    768: {
      slidesPerView: 4,
      spaceBetween:55,
    },
      992: {
        slidesPerView: 5,
        spaceBetween:35,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween:25,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween:15,
      },
    },
});




/*===================Team-swiper===============*/




var swipermembers = new Swiper(".team-container", {
  spaceBetween: 25,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween:25,
    },
    568: {
      slidesPerView: 2,
      spaceBetween:25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:25,
    },
      992: {
        slidesPerView: 3,
        spaceBetween:20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween:25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween:25,
      },
    },
});





 /*============  Car-video-menu============*/

 function carVidMenuToggle(){
  const carVidMenu = document.querySelector('.banner-nav');
  const carVidNav = document.querySelector('.car-vid-menu');
  carVidMenu.classList.toggle('car-vid-menu-active');
  carVidNav.classList.toggle('car-vid-menu-active');
}

function changeVideo(name) {
  const bgVideoList = document.querySelectorAll('.bg-video');
  const trailers = document.querySelectorAll('.trailer');
  const carModels = document.querySelectorAll('.car-model');

  bgVideoList.forEach(video => {
    video.classList.remove('active-vid');
    if(video.classList.contains(name)){
      video.classList.add('active-vid');
    }
  });


  carModels.forEach(carModel => {
    carModel.classList.remove('active-vid');
    if(carModel.classList.contains(name)){
      carModel.classList.add('active-vid');
    }
  });

  trailers.forEach(video => {
    video.classList.remove('active-vid');
    if(video.classList.contains(name)){
      video.classList.add('active-vid');
    }
  });
}








/*==============Popular Product Swiper====================*/


var swiperpopular = new Swiper(".popular-swiper", {
  spaceBetween: 25,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween:25,
    },
    568: {
      slidesPerView: 2,
      spaceBetween:25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:25,
    },
      992: {
        slidesPerView: 3,
        spaceBetween:25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween:25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween:25,
      },
    },
});





/*==============Testimonies====================*/


var swipertesti = new Swiper(".testi-swiper", {
  spaceBetween: 5,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween:15,
    },
    568: {
      slidesPerView: 1,
      spaceBetween:15,
    },
    768: {
      slidesPerView: 1,
      spaceBetween:15,
    },
      992: {
        slidesPerView: 1,
        spaceBetween:5,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween:5,
      },
      1400: {
        slidesPerView: 1,
        spaceBetween:5,
      },
    },
});




/*==============Blog====================*/


var swiperblog = new Swiper(".blog-swiper", {
  spaceBetween: 5,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween:20,
    },
    568: {
      slidesPerView: 1,
      spaceBetween:20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:20,
    },
      992: {
        slidesPerView: 2,
        spaceBetween:20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween:20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween:20,
      },
    },
});


/*==============Brands====================*/


var swiperbrands = new Swiper(".brand-swiper", {
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween:0,
    },
    568: {
      slidesPerView: 3,
      spaceBetween:0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween:0,
    },
      992: {
        slidesPerView: 4,
        spaceBetween:0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween:0,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween:0,
      },
    },
});






var swipercars = new Swiper(".car-gallery", {
  
  spaceBetween: 15,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay:5000,
  },



  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween:15,
    },
    568: {
      slidesPerView: 2,
      spaceBetween:15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween:15,
    },
      992: {
        slidesPerView: 3,
        spaceBetween:25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween:25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween:25,
      },
    },
});






