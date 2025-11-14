class llaves {
  constructor(posX, posY, tamaño) {
    this.PosX = posX;
    this.PosY = posY;
    this.tamaño = tamaño;
  }

  dibujar() {
    // Dibuja la llave (ej. un rectángulo dorado)
    fill(255, 223, 0); // Color dorado
    noStroke();
    
    // Para que sea un item y no un bloque, lo hacemos más chico
    // y lo centramos en su casilla
    let itemSize = this.tamaño * 0.5; // La llave ocupa el 50% de la celda
    let offset = (this.tamaño - itemSize) / 2; // Centrar
    
    rect(this.PosX + offset, this.PosY + offset, itemSize, itemSize);
  }
}