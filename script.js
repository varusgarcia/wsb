var svgContainer = document.getElementById("svgContainer");
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'wsb.json'
});
var audio = new Audio('sick_short.mp3');
var muted = false

animItem.addEventListener('DOMLoaded', function(e) {
  resizeSVG()

  audio.play();
})

animItem.addEventListener('loopComplete', function (e) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
})

var muteBtn = document.getElementById("muteBtn");
var description = document.getElementById("description")
function mute(){
  if (muted == false){
    audio.muted = true
    muted = true
    muteBtn.src = "muted.svg"
    description.style.opacity = "0"
  }else {
    audio.muted = false
    muted = false
    muteBtn.src = "unmuted.svg"
    description.style.opacity = "1"
  }

}

window.addEventListener('resize', function(event){

  var svg = document.getElementsByTagName('svg')[0];


  if (window.innerWidth/window.innerHeight <= 1.77){
    //height bigger"
    svg.style.height = "100%"
    svg.style.width = "auto"
    var offset = (svg.getBoundingClientRect().width - window.innerWidth)/-2
    svg.style.transform = "translateX(" + offset + "px)"

  } else {
    //console.log("width bigger");

    svg.style.height = "auto"
    svg.style.width = "100%"
    var offset = (svg.getBoundingClientRect().height - window.innerHeight)/-2
    svg.style.transform = "translateY(" + offset + "px)"
  }
});

function resizeSVG(){
  var svg = document.getElementsByTagName('svg')[0];


  if (window.innerWidth/window.innerHeight <= 1.77){
    //height bigger"
    svg.style.height = "100%"
    svg.style.width = "auto"
    var offset = (svg.getBoundingClientRect().width - window.innerWidth)/-2
    svg.style.transform = "translateX(" + offset + "px)"

  } else {
    //console.log("width bigger");

    svg.style.height = "auto"
    svg.style.width = "100%"
    var offset = (svg.getBoundingClientRect().height - window.innerHeight)/-2
    svg.style.transform = "translateY(" + offset + "px)"
  }
}
