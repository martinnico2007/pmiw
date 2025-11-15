class llaves {
  constructor(posX, posY, tamaño) {
    this.PosX = posX;
    this.PosY = posY;
    this.tamaño = tamaño;
  }

  dibujar() {
    // La imagen se dibuja más pequeña que la celda
    let itemSize = this.tamaño * 0.6;  // 60% del tamaño de la casilla
    let offset = (this.tamaño - itemSize) / 2;

    image(imgllave, this.PosX + offset, this.PosY + offset, itemSize, itemSize);
  }
}
