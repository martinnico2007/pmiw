class paredes {
  constructor(posX, posY, tamaño) {
    this.PosY = posY;
    this.PosX = posX;
    this.tamaño = tamaño;
  }
  dibujar() {
    fill(64,63,144); 
    stroke(88,88,126); 
    rect(this.PosX, this.PosY, this.tamaño, this.tamaño);
  }
}
