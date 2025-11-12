let mijuego;
let estadodeljuego = "inicio";
let botonX, botonY, botonAncho, botonAlto;
function setup() {
  mijuego = new juego();
   mijuego.iniciar();
  createCanvas(640, 480);
 botonAncho = 200;
  botonAlto = 50;
  botonX = width / 2 - botonAncho / 2;
  botonY = height / 2 + 20;
}

  function mousePressed() {
  if (estadodeljuego === "inicio") {
    if (mouseX > botonX && 
        mouseX < botonX + botonAncho && 
        mouseY > botonY && 
        mouseY < botonY + botonAlto) {
      estadodeljuego = "jugando";
    }
  }
}

function draw() {
  background(250)
;
if (estadodeljuego === "inicio") {
    stroke(0);
    fill(230); 
    rect(botonX, botonY, botonAncho, botonAlto);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER); 
    text("Iniciar Juego", botonX + botonAncho / 2, botonY + botonAlto / 2);
  }
else if (estadodeljuego === "jugando") { 
    mijuego.dibujar();
}
}







function keyPressed(){
if (estadodeljuego === "jugando") {
    mijuego.moverjugador(keyCode);
}
}
