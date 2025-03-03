
let currentAudio = null;
function flipAlbum(element) {
    element.classList.toggle('flipped');
}

function toggleAudio(event, songSrc) {
    event.stopPropagation(); // Prevent album flip when clicking the song
    let audio = document.getElementById("audioPlayer");
    if (currentAudio === songSrc) {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            currentAudio = null;
         }
    } else {
        audio.src = songSrc;
        audio.play();
        currentAudio = songSrc;
    }
}    

