class jugador {
  constructor() {
    this.PosY = 460;
    this.PosX = 340;
    this.vida = 1;
    this.velocidad = 20;
    this.ancho = 38;
    this.alto = 38;
 
  }
  
  dibujar() {
    fill(0); 
    ellipse(this.PosX, this.PosY, this.ancho, this.alto);
  }

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
      return true; // Devuelve 'true' porque se movió
    }
    return false; // Devuelve 'false' porque chocó
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
    this.PosY += this.velocidad;
  }
}
 
 
