

const moonPath = "M13 28C13 43.464 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 1.5 13 12.536 13 28Z";
const sunPath = "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z";

const darkModeToggle = document.querySelector("#darkMode");
const sun = document.querySelector(".sun");
let isDark = false;

const img=document.querySelector("img");




darkModeToggle.addEventListener("click", () => {
    anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    })
    .add({
        targets: sun,
        d: [{ value: isDark ? sunPath : moonPath }]
    })
    .add({
        targets: "#darkMode",
        rotate: isDark ? 0 : 320
    }, "-=500")
    .add({
        targets: "body",
        backgroundColor: isDark ? "#ffffff" : "	#1A1A1D",
        color: isDark ? "#161616" : "#ffffff"
    }, "-=700");

    isDark = !isDark;
});

// img.addEventListener("mouseover",()=>{
//     img.src="myimage8.png"
// });

img.addEventListener("mouseover", () => {
    img.src = "myphoto4.jpg";
    console.log("hover")
});
img.addEventListener("mouseout",()=>{
    img.src="myphoto3.jpg"
    console.log("not hover");
});



new Swiper('.card-wrapper', {
    
   
    loop: true,
  spaceBetween: 20,
    // pagination bullet
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true
      },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
//  Resposive breakpoints
breakpoints:{

    0:  {slidesPerView: 1
    },
   780 :{
        slidesPerView: 2
    },
    1024 :{
        slidesPerView:3
    }
    
}


  });


