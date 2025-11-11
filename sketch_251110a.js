let mijuego;
function setup() {
  mijuego = new juego();
   mijuego.iniciar();
  createCanvas(640, 480);
}


function draw() {
  background(250)
  mijuego.mover();
mijuego.dibujar();

}
