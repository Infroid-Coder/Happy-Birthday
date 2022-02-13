let ytmusic = "https://youtu.be/_z-1fTlSDF0";

function Wish() {
    let balloons = document.getElementById("balloons");
    let happybday = document.getElementById("hb");
    let play = document.getElementById("play-div");
    let audioCon = document.getElementById("aud-spn");
    let cake = document.getElementById("cake");

    balloons.style.display = "inline-block";
    balloons.style.animationName = "balloons";
    balloons.style.animationDuration = "5s";
    audioCon.innerHTML = "<audio src='Happy Birthday song.mp3' autoplay loop>"
    happybday.style.display = "block";
    happybday.style.animationName = "happybday";
    happybday.style.animationDuration = "5s";
    play.style.display = "none";
    cake.style.animationName = "cake";
    cake.style.animationDuration = "7s";
    cake.style.display = "inline-block";
    document.body.style.animationName = "bgplay";
    document.body.style.animationDuration = "5s"
    document.body.style.animationIterationCount = "infinite";
    document.body.style.animationTimingFunction = "linear";
}