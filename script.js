let tocarSobreMi= document.querySelector("#sobre-mi-selector")
tocarSobreMi.onclick = aparecerSobreMi

function aparecerSobreMi () {
document.getElementById("sobre-mi").style.display = "block"; 
}

let tocarHabilidades= document.querySelector("#habilidades-selector")
tocarHabilidades.onclick = aparecerHabilidades

function aparecerHabilidades () {
document.getElementById("habilidades").style.display = "block"; 
}

let tocarResumen= document.querySelector("#resumen-selector")
tocarResumen.onclick = aparecerResumen

function aparecerResumen () {
document.getElementById("resumen").style.display = "block"; 
}

let tocarHome= document.querySelector("#home-selector")
tocarHome.onclick = aparecerHome

function aparecerHome () {
document.getElementById("home").style.display = "block"; 
}
