let currentIndex=0;const totalItems=document.querySelectorAll(".carousel-item").length,interval=3e3;let carouselInterval;function showSlide(index){const carouselInner=document.querySelector(".carousel-inner"),itemWidth=document.querySelector(".carousel-item").offsetWidth;currentIndex=(index+totalItems)%totalItems;const translateValue=-currentIndex*itemWidth;carouselInner.style.transform=`translateX(${translateValue}px)`}function prevSlide(){showSlide(currentIndex-1)}function nextSlide(){showSlide(currentIndex+1)}function startCarousel(){carouselInterval=setInterval(()=>{nextSlide()},interval)}function pauseCarousel(){clearInterval(carouselInterval)}function resumeCarousel(){startCarousel()}startCarousel();
//# sourceMappingURL=/s/files/1/0761/2458/6273/files/script_bf78f90d-04b9-4fb4-b9d5-dc91d8c97601.js.map?v=1700575463%3Fattachment%3D1