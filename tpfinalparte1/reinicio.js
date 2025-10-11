let botonReinicioX = 480;
let botonReinicioY = 350;
let botonReinicioR = 30;
let botonReinicioX2 = 480;
let botonReinicioY2 = 440;
let botonReinicioR2 = 30;

function botonReinicio() {
fill(139,0,0);
if(dist(mouseX, mouseY, botonReinicioX, botonReinicioY)< botonReinicioR){
fill(178,34,34);
 }
ellipse(botonReinicioX, botonReinicioY, botonReinicioR*2);
}
function clickBoton(){
return dist(mouseX, mouseY, botonReinicioX, botonReinicioY)< botonReinicioR;

}

function botonReinicio2() {
fill(139,0,0);
if(dist(mouseX, mouseY, botonReinicioX2, botonReinicioY2)< botonReinicioR2){
fill(178,34,34);
 }
ellipse(botonReinicioX2, botonReinicioY2, botonReinicioR2*2);
}
function clickBoton2(){
return dist(mouseX, mouseY, botonReinicioX2, botonReinicioY2)< botonReinicioR2;

}
