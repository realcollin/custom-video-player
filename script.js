const video = document.getElementById("video");
const play = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video
function toggleVideoStatus() {
  // This video element is connected to html5 tag
  // which is why we can call play and pause methods
  if (video.paused) {
    video.play();
  } else video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x>"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x>"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  return true;
}

// set video time to progress
function setVideoProgress() {
  return true;
}

// stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("click", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopBtn.addEventListener("click", stopVideo);

progress.addEventListener("click", setVideoProgress);
