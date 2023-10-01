console.log("Welcome to SPOTIFY.");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('mastersongname');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Salama 1", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salama 2", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Salama 3", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Salama 4", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Salama 5", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Salama 6", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Salama 7", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Salama 8", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Salama 9", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "Salama 10", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" }
]

let playing = (i)=>{
    element[i].classList.add('fa-circle-pause');
    element[i].classList.remove('fa-circle-play');
}

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen the Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    console.log("hi")
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    // playing(songIndex)
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    console.log("hi")
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    // playing(songIndex)
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})