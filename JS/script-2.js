
 /*=============== Shop Page Tabs ===============*/

 const tabItems = document.querySelectorAll('[data-target]'),
 tabContentItems = document.querySelectorAll('[content]');
 
 tabItems.forEach((tab) => {
     tab.addEventListener('click', () => {
         const target = document.querySelector(tab.dataset.target);
         tabContentItems.forEach((tabContent) => {
             tabContent.classList.remove('active-item');
         });
 
         target.classList.add('active-item');
 
         tabItems.forEach((tab) => {
             tab.classList.remove('active-item');
         });
 
         tab.classList.add('active-item');
 
     });
 });



 function openPage(pageUrl){
  window.location.href=pageUrl
};




 /*================About Page==================*/
    
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




    /*================Feedback================ */

    var swiperfeedback = new Swiper(".feedback-con", {
  
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
      spaceBetween:15,
    },
    568: {
      slidesPerView: 1,
      spaceBetween:15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:15,
    },
      992: {
        slidesPerView: 2,
        spaceBetween:15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween:15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween:25,
      },
    },
});





    var swipercars = new Swiper(".brand-swiper", {
  
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


var swiperitems = new Swiper(".product-swiper", {
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
      slidesPerView: 3,
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



/*==========Video-Popup============*/

var video = document.querySelector(".popup-video");
var videoCon = document.querySelector(".i-vid");
var closeVid = document.querySelector("body");

video.addEventListener("click", (eb) => {
  videoCon.classList.toggle("iframe-show");
    eb.stopImmediatePropagation();
});

closeVid.addEventListener("click", (eg) => {
  videoCon.classList.remove("iframe-show");
    eg.stopImmediatePropagation();
});

