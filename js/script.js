function popupOpen(n){if(n&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock();n.classList.add("open");n.addEventListener("click",function(n){n.target.closest(".popup__content")||popupClose(n.target.closest(".popup"))})}}function popupClose(n,t=true){unlock&&(n.classList.remove("open"),t&&bodyUnLock())}function bodyLock(){const n=window.innerWidth-document.querySelector(".container")+"px";if(lockPadding.length>0)for(let t=0;t<lockPadding.length;t++){const i=lockPadding[t];i.style.paddingRight=n}body.style.paddingRight=n;body.classList.add("lock");unlock=!1;setTimeout(function(){unlock=!0},timeout)}function bodyUnLock(){setTimeout(function(){for(let n=0;n<lockPadding.length;n++){const t=lockPadding[n];t.style.paddingRight="0px"}body.style.paddingRight="0px";body.classList.remove("lock")},timeout);unlock=!1;setTimeout(function(){unlock=!0},timeout)}const galleryPopups=document.querySelectorAll(".order-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=800;if(galleryPopups.length>0)for(let n=0;n<galleryPopups.length;n++){const t=galleryPopups[n];t.addEventListener("click",function(n){const i=t.getAttribute("href").replace("#",""),r=document.getElementById(i);popupOpen(r);n.preventDefault()})}const popupCloseIcon=document.querySelectorAll(".popup__closed");if(popupCloseIcon.length>0)for(let n=0;n<popupCloseIcon.length;n++){const t=popupCloseIcon[n];t.addEventListener("click",function(n){popupClose(t.closest(".popup"));n.preventDefault()})}document.addEventListener("keydown",function(n){if(n.which===27){const n=document.querySelector(".popup.open");popupClose(n)}});let menuBody=document.querySelector(".header__nav"),iconMenu=document.querySelector(".header__burger"),navLinks=document.querySelectorAll(".nav__link");if(iconMenu&&iconMenu.addEventListener("click",function(){body.classList.toggle("lock");iconMenu.classList.toggle("active");menuBody.classList.toggle("active")}),navLinks.length>0){navLinks.forEach(t=>{t.addEventListener("click",n)});function n(n){const t=n.target;iconMenu.classList.contains("active")&&(body.classList.remove("lock"),iconMenu.classList.remove("active"),menuBody.classList.remove("active"))}}let tl=gsap.timeline();tl.from(".hero__title",{opacity:0,duration:.5,y:100,ease:"power4.out"}).from(".hero__descr",{opacity:0,duration:.7,y:50,ease:"power4.out"}).fromTo(".hero__link",{opacity:0,y:50},{opacity:1,duration:.5,y:0,ease:"power4.out"});TweenMax.to(".hero__svg",1,{translateY:5,repeat:-1,yoyo:!0});const formPopup=document.querySelector(".popup__form"),formOrder=document.querySelector(".order__form"),telSelectorOrder=formOrder.querySelector('input[type="tel"]'),telSelectorPopup=formPopup.querySelector('input[type="tel"]'),inputMask=new Inputmask("+7 (999) 999-99-99");inputMask.mask(telSelectorOrder);inputMask.mask(telSelectorPopup);new window.JustValidate(".order__form",{rules:{tel:{required:!0,"function":()=>{const n=telSelectorOrder.inputmask.unmaskedvalue();return Number(n)&&n.length===10}}},colorWrong:"#ff0f0f",messages:{name:{required:"Введите имя",minLength:"Введите 3 и более символов",maxLength:"Запрещено вводить более 15 символов"},email:{email:"Введите корректный email",required:"Введите email"},tel:{required:"Введите телефон","function":"Здесь должно быть 10 символов без +7"}},submitHandler:function(n){let i=new FormData(n),t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===4)if(t.status===200){let n=gsap.timeline();n.fromTo(".order__form-sent",{autoAlpha:1},{duration:3,ease:"power4.out",autoAlpha:0},2)}else{let n=gsap.timeline();n.from(".order__form-error",{duration:3,ease:"power4.out",autoAlpha:1},2)}};t.open("POST","mail.php",!0);t.send(i);n.reset()}});new window.JustValidate(".popup__form",{rules:{tel:{required:!0,"function":()=>{const n=telSelectorPopup.inputmask.unmaskedvalue();return Number(n)&&n.length===10}}},colorWrong:"#ff0f0f",messages:{name:{required:"Введите имя",minLength:"Введите 3 и более символов",maxLength:"Запрещено вводить более 15 символов"},email:{email:"Введите корректный email",required:"Введите email"},tel:{required:"Введите телефон","function":"Здесь должно быть 10 символов без +7"}},submitHandler:function(n){let i=new FormData(n),t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===4)if(t.status===200){let n=gsap.timeline();n.fromTo(".popup__form-sent",{autoAlpha:1},{duration:3,ease:"power4.out",autoAlpha:0},2)}else{let n=gsap.timeline();n.from(".popup__form-error",{duration:3,ease:"power4.out",autoAlpha:1},2)}};t.open("POST","mail.php",!0);t.send(i);n.reset()}});const swiperGallery=document.querySelector(".gallery__swiper");let gallerySwiper=new Swiper(swiperGallery,{speed:300,slidesPerView:1,slidesPerGroup:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},spaceBetween:25,loop:!1});