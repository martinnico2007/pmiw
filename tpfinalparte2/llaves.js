class llaves {
  constructor(posX, posY, tamaño) {
    this.PosX = posX;
    this.PosY = posY;
    this.tamaño = tamaño;
  }

  dibujar() {
    let itemSize = this.tamaño * 0.6; 
    let offset = (this.tamaño - itemSize) / 2;

    image(imgllave, this.PosX + offset, this.PosY + offset, itemSize, itemSize);
  }
}

