const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progressBar');

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = '⏸';
    } else {
        audioPlayer.pause();
        playButton.textContent = '▶';
    }
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});
