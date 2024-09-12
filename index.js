function toggleFunction() {
   
    var topnav = document.getElementById("topnav");
    var topnav_socials = document.getElementById("topnav-socials");
    
    topnav.classList.toggle("expanded");
    topnav_socials.classList.toggle("expanded");
}

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) { // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }


    } else {}
}

// disk slider 
var swiper = new Swiper(".disk-slider", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// waveform animation
window.addEventListener("load", () => {
    const soundWave = document.querySelector(".sound-wave");
  
    // Function to set number of bars based on screen size
    function setBars() {
      // Clear existing bars
      soundWave.innerHTML = '';
  
      let barCount;
  
      // Adjust the number of bars based on screen size
      if (window.innerWidth >= 1200) {
        barCount = 260;  // Large screens
      } else if (window.innerWidth >= 768) {
        barCount = 140;  // Medium screens
      } else if (window.innerWidth >= 480) {
        barCount = 120;  // Small screens
      } else {
        barCount = 80;  // Extra small screens
      }
  
      // Create bars dynamically based on barCount
      for (let i = 0; i < barCount; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        // bar.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`;
        bar.style.animationDuration = `${Math.random()  + 1}s`;
        soundWave.appendChild(bar);
      }
    }
  
    // Run once when the page loads
    setBars();
  
    // Re-run the function when the window is resized
    window.addEventListener('resize', setBars);
  });

  // slider for services
  var swiper = new Swiper(".services-wrapper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // brands carousel
  // const carousel = document.querySelector('.brand-carousel');

// Clone the slides for infinite effect
// const slides = carousel.children;
// for (let i = 0; i < slides.length; i++) {
//   let clone = slides[i].cloneNode(true);
//   carousel.appendChild(clone);
// }


//testimonial wrapper
var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 80,
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  },
});