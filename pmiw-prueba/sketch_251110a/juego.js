class juego {
  constructor(){
    this.jugador= new jugador
    this.barbaazul;
    this.paredes = [];
    this.tamañoCelda = 40;
  }
 iniciar(){

  let laberinto = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
    ];

    // Recorremos el mapa y creamos las paredes
    for (let fila = 0; fila < laberinto.length; fila++) {
      for (let col = 0; col < laberinto[fila].length; col++) {
        // Si hay un 1, creamos una pared
        if (laberinto[fila][col] === 1) {
          let x = col * this.tamañoCelda;
          let y = fila * this.tamañoCelda;
          this.paredes.push(new paredes(x, y, this.tamañoCelda));
 }
}
    }
  }

  
  reiniciar(){

  }

  moverjugador(keyCode) {
    this.jugador.moverjugador(keyCode);
  }

  
  dibujar(){
      for (let i = 0; i < this.paredes.length; i++) {
      this.paredes[i].dibujar()
  }
    this.jugador.dibujar()
}
}