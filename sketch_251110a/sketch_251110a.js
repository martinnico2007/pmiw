let mijuego; // Esta es la ÚNICA variable global, la instancia de tu juego.

function setup() {
  createCanvas(640, 480);
  mijuego = new juego(); // Creamos la instancia del juego.
  mijuego.iniciar(); // Llamamos a su setup interno.
}

function draw() {
  // En lugar de tener el IF aquí, llamamos a un método de la clase.
  mijuego.actualizarYDibujar();
}

function keyPressed() {
  // Delegamos el evento de tecla a la clase.
  mijuego.manejarTecla(keyCode);
}

function mousePressed() {
  // Delegamos el evento de clic a la clase.
  mijuego.manejarClic(mouseX, mouseY);
}