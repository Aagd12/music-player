let songs = [{
        song_name: "YoutubeRemix",
        artist: " Honeysingh",
        name: "saurabh8"


    }, {
        song_name: "Mini Land",
        artist: "MiniRoc",
        name: "saurabh7"

    }, {
        song_name: "Hello Hello",
        artist: "TheLaurets",
        name: "saurabh2"

    }, {
        song_name: "Close your eyes",
        artist: "Honey singh",
        name: "saurabh3"

    }, {
        song_name: "Youtube Remix",
        artist: "Jospan",
        name: "saurabh4"

    }, {
        song_name: "audio Remix",
        artist: "Bobyreachards",
        name: "saurabh5"

    }, {
        song_name: "Youtube Remix3",
        artist: "Joshu",
        name: "saurabh6"

    }, {
        song_name: "Bhojpuri",
        artist: "khesari",
        name: "saurabh1"

    }, {
        song_name: " Bhojpuri ",
        artist: "khesari",
        name: "saurabh9"

    }, {
        song_name: "Hindi Songs ",
        artist: "Khesari",
        name: "saurabh10"

    }, {
        song_name: "Arjit ",
        artist: "Arjit",
        name: "sarabi"

    }

]
let play = document.getElementById("play");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let music = document.querySelector("audio");
let song_name = document.getElementById("song_name");
let artist = document.getElementById("artist");
let img1 = document.getElementById("img1");
let current_time = document.getElementById("current_time");
let total_time = document.getElementById("duration");
let progress_bar = document.getElementById("progress_bar");
let current_progress_bar = document.getElementById("current_progress_bar");

let isPlaying = false;

function play_music() {
    isPlaying = true;
    img1.classList.add(`anime`);
    music.play();
    play.classList.replace("fa-play", "fa-pause");
}

function pause_music() {
    isPlaying = false;
    img1.classList.remove(`anime`);
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
}

function loadsong(songs) {
    // console.log(songs);
    music.src = `music/${songs.name}.mp3`;
    song_name.innerText = `${songs.song_name}`;
    artist.innerText = `${songs.artist}`;
    img1.src = `images/saurabh${index+1}.jpg`;
    play_music();
}
let index = 0;
play.addEventListener("click", () => {

    isPlaying ? pause_music() : play_music();

})
next.addEventListener("click", () => {

    index = (index + 1) % songs.length;
    loadsong(songs[index]);
})
prev.addEventListener("click", () => {

    index = (index - 1 + songs.length) % songs.length;
    loadsong(songs[index]);
})
progress_bar.addEventListener("click", (event) => {

    let touch = ((event.offsetX / 288) * 100);
    // console.log(event);
    let tt = music.duration;
    let t = ((tt / 100) * touch);
    // console.log(t, tt);
    music.currentTime = t;
});
music.addEventListener("timeupdate", (event) => {
    let ct = event.srcElement.currentTime;
    let tt = event.srcElement.duration;
    let pt = (ct / tt) * 100;
    current_progress_bar.style.width = `${pt}%`
    let m = Math.floor(ct / 60);
    let s = Math.floor(ct % 60);
    let mt = Math.floor(tt / 60);
    let st = Math.floor(tt % 60);
    // console.log(m, s, mt, st);
    if (tt) {
        if (st < 10) {
            total_time.innerText = `${mt}:0${st}`;
        } else {
            total_time.innerText = `${mt}:${st}`;
        }
    }

    if (s < 10) {
        current_time.innerText = `${m}:0${s}`;


    } else {
        current_time.innerText = `${m}:${s}`;

    }
    music.addEventListener("ended", () => {
        index = (index + 1) % songs.length;
        loadsong(songs[index]);
    })

})