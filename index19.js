var mySwiper = new Swiper('.swiper-container', {
  // 슬라이드를 버튼으로 움직일 수 있습니다.
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
  // 현재 페이지를 나타내는 스크롤이 생깁니다. 클릭하면 이동합니다.
    /*scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },*/
      
  // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
    /*autoplay: {
      delay: 3000,
    },*/

    

  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  //초기값 설정 모바일값이 먼저!!
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    
    breakpoints: {
    
      
      
      768: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
        spaceBetween: 0,
      },

        // 화면의 넓이가 320px 이상일 때
320: {
  slidesPerView: 1,
  spaceBetween: 0
  },
  // 화면의 넓이가 640px 이상일 때
640: {
  slidesPerView: 1,
  spaceBetween: 0
  }
    },
  });


  // 영상의 경우

const handleLoadedData = () => {
  // window resize 이벤트 호출
  window.dispatchEvent(new Event('resize'));
};

/* ... */


var swiper = new Swiper('.swiper-container', {
	
  loop:true
});



//Javascript
//기본 세팅 

let vh = window.innerHeight * 0.01; 
document.documentElement.style.setProperty('--vh', `${vh}px`);

//화면 리사이즈시 변경 

window.addEventListener('resize', () => { let vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`); }); window.addEventListener('touchend', () => { let vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`); });


