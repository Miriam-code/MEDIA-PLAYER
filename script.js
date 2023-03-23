
var container = document.createElement("div");
container.setAttribute("class","container");

// vidéo

var video = document.createElement("video");
video.setAttribute("id", "video");

var source = document.createElement("source");
source.setAttribute("src", "netflix.mp4");
source.setAttribute("type", "video/mp4");

// range

var seek = document.createElement("div");
seek.setAttribute("class","seek");

var input = document.createElement('input');
input.setAttribute("type", "range");
input.setAttribute("id","videoSeeker");
input.setAttribute("value","0")
input.setAttribute("min","0");
input.setAttribute("max","100");
input.setAttribute("onchange","seekTo()");

// buttons

var buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");

var left = document.createElement("div");
left.setAttribute("class","left");

var volume = document.createElement("div");
volume.setAttribute("class","volume");

var fullscreen =  document.createElement("div");
fullscreen.setAttribute("class","fullscreen");

var buttonPlay = document.createElement("i");
buttonPlay.setAttribute("class","fa fa-play");
buttonPlay.setAttribute("onclick","play_vid()");

var buttonPause = document.createElement("i");
buttonPause.setAttribute("class","fa fa-pause");
buttonPause.style.display="none"
buttonPause.setAttribute("onclick","pause_vid()");

var buttonReplay = document.createElement("i");
buttonReplay.setAttribute("class","fa fa-repeat");
buttonReplay.setAttribute("onclick","stop_vid()");

var buttonBack = document.createElement("i");
buttonBack.setAttribute("class","fa fa-backward");
buttonBack.setAttribute("onclick","skipBackward()");

var buttonFor = document.createElement("i");
buttonFor.setAttribute("class","fa fa-forward");
buttonFor.setAttribute("onclick","skipFor()");

var ward = document.createElement("div");
ward.setAttribute("class","ward")

var voldown = document.createElement("i");
voldown.setAttribute("class","fa fa-volume-down");

var range = document.createElement('input');
range.setAttribute("type", "range");
range.setAttribute("class","range");
range.setAttribute("min","0");
range.setAttribute("max","100");
range.setAttribute("onchange","change_vol()")

var volup = document.createElement("i");
volup.setAttribute("class","fa fa-volume-up");

var screen = document.createElement('i');
screen.setAttribute("class","fa fa-arrows-alt");
screen.setAttribute("onclick","toggleFullScreen(player)");

var chat = document.createElement('img');
chat.setAttribute("src","chat.png");

var fileInput = document.createElement('input');
fileInput.setAttribute("type", "file");
fileInput.setAttribute("id","videoFile");
fileInput.setAttribute("accept", "video/*");

volume.appendChild(voldown);
volume.appendChild(range);
volume.appendChild(volup);

ward.appendChild(buttonBack);
ward.appendChild(buttonPlay);
ward.appendChild(buttonPause);
ward.appendChild(buttonFor);

fullscreen.append(screen);
fullscreen.appendChild(buttonReplay);


left.appendChild(ward);
left.prepend(fullscreen);

buttons.appendChild(left);
buttons.appendChild(volume);

seek.appendChild(input);
video.appendChild(source);

container.appendChild(buttons);
container.prepend(seek);
container.prepend(video);
document.body.appendChild(chat);
document.body.appendChild(container);
document.body.appendChild(fileInput);

/*************************************************************/



let player  = document.getElementById("video");

fileInput.addEventListener('change', function() {
    var file = this.files[0];
    var fileURL = URL.createObjectURL(file);
    player.src = fileURL;
});

function play_vid() {

    player.play();
    let x = setInterval(() => {
        seekUpdate()
    },1000);
    document.querySelector('.fa-play').style.display="none"
    document.querySelector('.fa-pause').style.display="block"
}

function pause_vid() {
    player.pause();
    document.querySelector('.fa-play').style.display="block"
    document.querySelector('.fa-pause').style.display="none"
}

function stop_vid(){
    player.pause();
    player.currentTime = 0 ; 
    document.querySelector('.fa-play').style.display="block"
    document.querySelector('.fa-pause').style.display="none"    
}

function change_vol(){
    player.volume = document.querySelector('.range').value/100;
}

const seek_slider = document.getElementById('videoSeeker');

function seekUpdate() {

    let seekPosition = 0;

    if (!isNaN(player.duration)) {

        seekPosition = player.currentTime * (100 / player.duration)

        seek_slider.value = seekPosition;
}
}

function seekTo() {

    let seekTo = player.duration * (seek_slider.value/100)
    player.currentTime = seekTo;
}

function toggleFullScreen(player) {
    if (!document.fullscreenElement) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
}

function skipBackward() {

    player.currentTime -= 5;

}
  
function skipFor() {

    player.currentTime += 5;

}
    








