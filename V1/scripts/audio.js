//Background music
let muted = false;
function toggleMute(){
  muted = muted? false : true;
}

//Image toggle
function muteAudio(img){
  toggleMute();
  var audioMute = document.getElementById("playBGM");
  audioMute.muted = muted;
  //image toggle
  if (muted == false){
    img.src = "images/mute.png"
  }
  else {
    img.src = "images/unmute.png"
  }
  //img.src = img.src == "images/mute.png" ? "images/mute.png" : "images/unmute.png";
  console.log("twea")
}

//Button click sound
var sound = new Audio();
sound.src = "audio/click.mp3";
sound.volume = 1;

function playSound(){
  sound.currentTime = 0;
  sound.play();
}
