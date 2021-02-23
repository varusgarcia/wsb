var svgContainer = document.getElementById("svgContainer");
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'wsb_square.json'
});
var audio = new Audio('sick_short.mp3');
audio.volume = 0.2;
var description = document.getElementById("description")
var infoDiv = document.getElementById("info")

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  createCookie("audioMuted", "true", 7)
  var infoBtn = document.getElementById("infoBtn")
  infoBtn.style.width = "44px"
  infoBtn.style.height = "44px"
  var muteBtn = document.getElementById("muteBtn")
  muteBtn.style.width = "44px"
  muteBtn.style.height = "44px"
  muteBtn.style.margin = "32px"

  infoDiv.style.fontSize = "20px"

}

animItem.addEventListener('DOMLoaded', function(e) {
  resizeSVG()
  audio.play();
  chechAudioCooke()
})



animItem.addEventListener('loopComplete', function (e) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
})
var muted = false
function chechAudioCooke(){

  if (getCookie("audioMuted") != ""){
    if (getCookie("audioMuted") == "true") {
      audio.muted = true
      muted = true
    }
  }else {
    createCookie("audioMuted", "false", 7)
  }
  if (muted == true){
    document.getElementById("muteBtn").src = "muted.png"
  }
}



infoDiv.style.right = - description.getBoundingClientRect().width + "px"

var infoShown = false;
function info(){
  if (infoShown == false){
    description.style.opacity = "1"
    infoShown = true
    infoDiv.style.right = "0px"
  }else {
    description.style.opacity = "0"
    infoShown = false
    infoDiv.style.right = - description.getBoundingClientRect().width + "px"
  }
}

var muteBtn = document.getElementById("muteBtn");

function mute(){
  if (muted == false){
    audio.muted = true
    muted = true
    muteBtn.src = "muted.png"
    createCookie("audioMuted", "true", 7)
  }else {
    audio.muted = false
    muted = false
    muteBtn.src = "unmuted.png"
    createCookie("audioMuted", "false", 7)
  }

}

window.addEventListener('resize', function(event){
  resizeSVG()
});

function resizeSVG(){
  var svg = document.getElementsByTagName('svg')[0];

  if (window.innerWidth/window.innerHeight <= 1){
    svg.style.height = "100%"
    svg.style.width = "auto"
    var offset = (svg.getBoundingClientRect().width - window.innerWidth)/-2
    svg.style.transform = "translateX(" + offset + "px)"

  } else {

    svg.style.height = "auto"
    svg.style.width = "100%"
    var offset = (svg.getBoundingClientRect().height - window.innerHeight)/-2
    svg.style.transform = "translateY(" + offset + "px)"
  }
}



function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
