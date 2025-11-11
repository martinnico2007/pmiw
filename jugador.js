class jugador {
  constructor() {
    this.PosY=455;
    this.PosX=350;
    this.vida=1;
    this.velocidad = 5;
  }
  dibujar() {
    ellipse(this.PosX, this.PosY, 40, 50);
  }

  moverjugador() {
    if (keyIsDown(LEFT_ARROW)) {
      this.PosX -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.PosX += this.velocidad;
    }
    if (keyIsDown(UP_ARROW)) {
      this.PosY -= this.velocidad;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.PosY += this.velocidad;
    }
}

}
 
 
