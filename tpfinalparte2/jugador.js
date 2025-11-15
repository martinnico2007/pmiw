class jugador {
  constructor() {
    this.PosY = 460;
    this.PosX = 340;
    this.vida = 1;
    this.velocidad = 20;
    this.ancho = 38;
    this.alto = 38;
    
    this.direccion = "abajo";
  }
  
  dibujar() {
    let img = esposaDown;

    if (this.direccion === "arriba")  img = esposaUp;
    if (this.direccion === "abajo")   img = esposaDown;
    if (this.direccion === "izquierda") img = esposaLeft;
    if (this.direccion === "derecha")   img = esposaRight;

    image(img, this.PosX - this.ancho/2, this.PosY - this.alto/2, this.ancho, this.alto);
  }

  moverjugador(keyCode, juego) {
    
    let nextX = this.PosX;
    let nextY = this.PosY;

    if (keyCode == LEFT_ARROW) {
      nextX -= this.velocidad;
      this.direccion = "izquierda";
    }
    if (keyCode == RIGHT_ARROW) {
      nextX += this.velocidad;
      this.direccion = "derecha";
    }
    if (keyCode == UP_ARROW) {
      nextY -= this.velocidad;
      this.direccion = "arriba";
    }
    if (keyCode == DOWN_ARROW) {
      nextY += this.velocidad;
      this.direccion = "abajo";
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
 
 
