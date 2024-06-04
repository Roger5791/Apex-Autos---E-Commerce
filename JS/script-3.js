
   /*=============== PRODUCTS TABS ===============*/
   const tabsc = document.querySelectorAll('[data-target]'),
   tabContentsc = document.querySelectorAll('[content]');
   
   tabsc.forEach((tab) => {
   tab.addEventListener('click', () => {
   const target = document.querySelector(tab.dataset.target);
   tabContentsc.forEach((tabContent) => {
       tabContent.classList.remove('active-prod');
   });
   
   target.classList.add('active-prod');
   
   tabsc.forEach((tab) => {
       tab.classList.remove('active-prod');
   });
   
   tab.classList.add('active-prod');
   
   });
   });