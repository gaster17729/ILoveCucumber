var divs = [document.getElementById("B1"),document.getElementById("B2"),document.getElementById("B3"),document.getElementById("B4")]
var Buttons = [document.getElementById("ButtB1"),document.getElementById("ButtB2"),document.getElementById("ButtB3"),document.getElementById("ButtB4"),document.getElementById("ButtB5")]
var Audios = ["m1.mp3","m2.mp3","m3.mp3"]
var Audio1 = document.getElementById("audio")
var AudioV = 0; 
function button(Var){
divs[Var].classList.remove("none")
for (let i = 0; i < 4; i++) {
    if(i!=Var){
        console.log(i)
        divs[i].classList.add("none")
    }
  }
}

function Play(){
    Audio1.src = Audios[AudioV]
     Audio1.play()
}
function stop(){
        Audio1.pause()
}
function Prev(){
    AudioV=AudioV-1
    Audio1.stop()
    Audio1.scr = Audios[AudioV]
    Audio1.play()
}
function Next(){
    AudioV=AudioV+1
    Audio1.pause()
    Audio1.scr = Audios[AudioV]
    Audio1.play()
}