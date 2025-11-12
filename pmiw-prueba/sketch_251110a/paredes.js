class paredes {
  constructor(posX, posY, tamaño) {
    this.PosY = posY;
    this.PosX = posX;
    this.tamaño = tamaño;
  }
  dibujar() {
    fill(140); 
    stroke(234); 
    rect(this.PosX, this.PosY, this.tamaño, this.tamaño);
  }
}

