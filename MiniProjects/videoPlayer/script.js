const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

const playPause = () => (video.paused ? video.play() : video.pause());
const stopVideo = () => (video.pause(), (video.currentTime = 0));

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  //    minutes
  let minutes = Math.round(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  //   seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
};

// a bit wonky but another way of doing it
function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

const updateIcon = () =>
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');

video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);
stop.addEventListener('click', stopVideo);
play.addEventListener('click', playPause);
progress.addEventListener('click', setProgress);
