const moods = {
    happy: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    ],
    sad: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    ],
    calm: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    ],
    energetic: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    ]
};

let currentPlaylist = [];
let currentIndex = 0;

const audioPlayer = document.getElementById("audio-player");
const nowPlaying = document.getElementById("now-playing");



function playCurrent() {
    if (currentPlaylist.length > 0) {
        audioPlayer.src = currentPlaylist[currentIndex];
        audioPlayer.play();
        nowPlaying.innerText = "Now Playing: " + audioPlayer.src.split("/").pop();
    }
}

function nextSong() {
    if (currentPlaylist.length > 0) {
        currentIndex = (currentIndex + 1) % currentPlaylist.length;
        playCurrent();
    }
}

function prevSong() {
    if (currentPlaylist.length > 0) {
        currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        playCurrent();
    }
}

document.querySelectorAll(".mood-card").forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.getAttribute("data-mood");
        currentPlaylist = moods[mood];
        currentIndex = 0;
        playCurrent();
    });
});

document.getElementById("play").addEventListener("click", () => {
    audioPlayer.play();
});

document.getElementById("pause").addEventListener("click", () => {
    audioPlayer.pause();
});

document.getElementById("next").addEventListener("click", () => {
    nextSong();
});

document.getElementById("prev").addEventListener("click", () => {
    prevSong();
});