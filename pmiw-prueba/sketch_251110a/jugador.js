class jugador {
  constructor() {
    this.PosY=455;
    this.PosX=350;
    this.vida=1;
    this.velocidad = 20;
  }
  dibujar() {
    ellipse(this.PosX, this.PosY, 40, 50);
  }

  moverjugador(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverizquierda();
    }
    if (keyCode == RIGHT_ARROW) {
      this.moverderecha();
    }
    if (keyCode == UP_ARROW) {
      this.moverarriba();
    }
    if (keyCode == DOWN_ARROW) {
      this.moverabajo();
    }
}
moverizquierda(){
  this.PosX -= this.velocidad;
}

moverderecha(){
  this.PosX += this.velocidad;
}

moverarriba(){
  this.PosY -= this.velocidad;
}

moverabajo(){
  this.PosY +=this.velocidad;

  let radioX = 40 / 2;
    let radioY = 50 / 2;
    
    // El canvas es 640x480 (definido en sketch_251110a.js)
    let anchoCanvas = 640;
    let altoCanvas = 480;

    // constrain(valor, minimo, maximo)
    this.PosX = constrain(this.PosX, radioX, anchoCanvas - radioX);
    this.PosY = constrain(this.PosY, radioY, altoCanvas - radioY);
}
}




 
 
