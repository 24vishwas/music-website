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


// music
// List of local songs
const songs = [
  { name: "Song 1", duration: "3:15", src: "./assets/songs/1.mp3" },
  { name: "Song 2", duration: "4:05", src: "./assets/songs/1.mp3" },
  { name: "Song 3", duration: "2:45", src: "./assets/songs/1.mp3" }
];

const audioPlayer = document.getElementById('audio-player');
const songList = document.getElementById('song-list');
const seekSlider = document.getElementById('seek-slider');
const timeRemaining = document.getElementById('time-remaining');
const globalPlayPauseButton = document.getElementById('global-play-pause');
let currentlyPlayingButton = null;
let currentSongIndex = null; // Keep track of which song is currently playing

// Populate the song list
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.classList.add('music');
  
  const content = document.createElement('div');
  content.classList.add('content');

  const songName = document.createElement('h3');
  songName.textContent = `${song.name}`;
  
  const autherName = document.createElement('span');
  autherName.textContent = `${song.name}`;
  
  const songTime = document.createElement('span');
  songTime.textContent = ` (${song.duration})`;

  // Create play/pause button
  const controls = document.createElement('div');
  controls.classList.add('controls');
  
  const playPauseButton = document.createElement('div');
  playPauseButton.innerHTML = '<img src="./assets/play.svg" alt="Play">';

  playPauseButton.addEventListener('click', () => togglePlayPause(index, playPauseButton));

  content.appendChild(songName);
  content.appendChild(autherName);
  li.appendChild(content);
  controls.appendChild(playPauseButton);
  controls.appendChild(songTime);
  li.appendChild(controls);
  songList.appendChild(li);
});

// Load and play a song
function loadSong(index) {
  audioPlayer.src = songs[index].src;
  audioPlayer.load();
  
  // Reset the seek slider when a new song is loaded
  seekSlider.value = 0;
  seekSlider.style.background = `linear-gradient(to right, #007bff 0%, #ddd 0%)`;
}

// Toggle play/pause for the selected song
function togglePlayPause(index, button) {
  if (currentSongIndex !== index) {
    // Load and play a new song
    loadSong(index);
    playSong(button);
    currentSongIndex = index;
  } else if (audioPlayer.paused) {
    // Resume the currently paused song
    playSong(button);
  } else {
    // Pause the currently playing song
    pauseSong(button);
  }
}

// Play the song and update the play button to 'Pause'
function playSong(button) {
  if (currentlyPlayingButton && currentlyPlayingButton !== button) {
    pauseSong(currentlyPlayingButton); // Pause the previous song
  }
  
  audioPlayer.play();
  button.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
  globalPlayPauseButton.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
  currentlyPlayingButton = button; // Set the currently playing button
}

// Pause the song and update the play button to 'Play'
function pauseSong(button) {
  audioPlayer.pause();
  button.innerHTML = '<img src="./assets/play.svg" alt="Play">';
  globalPlayPauseButton.innerHTML = '<img src="./assets/play.svg" alt="Play">';
  currentlyPlayingButton = null; // Reset the currently playing button
}

// Event listener for global play/pause button
globalPlayPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused && currentSongIndex !== null) {
    playSong(currentlyPlayingButton);
  } else if (currentSongIndex !== null) {
    pauseSong(currentlyPlayingButton);
  }
});

// Format time in MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update the seek slider and time remaining
audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  seekSlider.value = progress || 0;

  const remaining = audioPlayer.duration - audioPlayer.currentTime;
  timeRemaining.textContent = formatTime(remaining);

  seekSlider.style.background = `linear-gradient(to right, #007bff ${progress}%, #ddd ${progress}%)`;
});

// Seek the song when dragging the slider
seekSlider.addEventListener('input', () => {
  const seekTo = (seekSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTo;

  seekSlider.style.background = `linear-gradient(to right, #007bff ${seekSlider.value}%, #ddd ${seekSlider.value}%)`;
});




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


