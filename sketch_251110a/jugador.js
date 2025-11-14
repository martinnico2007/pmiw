class jugador {
  constructor() {
    this.PosY=455;
    this.PosX=340;
    this.vida=1;
    this.velocidad = 20;
    this.ancho = 30;
    this.alto = 30;
  }
  dibujar() {
    fill(0); 
    ellipse(this.PosX, this.PosY, this.ancho, this.alto);
  }

// ... (el constructor y dibujar() están bien)

// ... (el constructor y dibujar() están bien)

  moverjugador(keyCode, juego) {
  
    let nextX = this.PosX;
    let nextY = this.PosY;

    if (keyCode == LEFT_ARROW) {
      nextX -= this.velocidad;
    }
    if (keyCode == RIGHT_ARROW) {
      nextX += this.velocidad;
    }
    if (keyCode == UP_ARROW) {
      nextY -= this.velocidad;
    }
    if (keyCode == DOWN_ARROW) {
      nextY += this.velocidad;
    }


    let radioX = this.ancho / 2;
    let radioY = this.alto / 2;

    if (
      juego.esPosicionValida(nextX - radioX, nextY - radioY) && 
      juego.esPosicionValida(nextX + radioX, nextY - radioY) && 
      juego.esPosicionValida(nextX - radioX, nextY + radioY) && 
      juego.esPosicionValida(nextX + radioX, nextY + radioY)    
    ) {
   
      this.PosX = nextX;
      this.PosY = nextY;
    }
  }
}

 
 
