const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("laufey-song");
const imgContainer = document.querySelector(".img-container");
let isPlaying = false;
let currentRotation = 0;
let rotationInterval;

playPauseBtn.addEventListener("click", () => {
  const icon = playPauseBtn.querySelector("i");

  if (!isPlaying) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    isPlaying = true;

    rotationInterval = setInterval(() => {
      currentRotation += 3.5;
      imgContainer.style.transform = `rotate(${currentRotation}deg)`;
    }, 50);
  } else {
    audio.pause();
    clearInterval(rotationInterval);
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    isPlaying = false;
  }
});
