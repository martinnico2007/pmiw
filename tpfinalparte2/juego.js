class juego {
  constructor(){
    this.jugador = new jugador();
    this.ui = new UI();
    this.paredes = [];
    this.llaves = [];
    this.tamañoCelda = 40;
    this.laberinto = [];
    this.estadodeljuego = "inicio";

    this.botonX = 0;
    this.botonY = 0;
    this.botonAncho = 0;
    this.botonAlto = 0;

    this.botonReinicioX = 0;
    this.botonReinicioY = 0;
    this.botonReinicioAncho = 0;
    this.botonReinicioAlto = 0;

    this.llavesRecogidas = 0;
    this.totalLlaves = 0;
    this.tiempoLimite = 45000;
    this.tiempoInicio = 0;
  }

  iniciar(){
    this.laberinto = Mapa.obtenerMapa();

    this.totalLlaves = 0;
    this.llaves = [];
    this.paredes = [];
    for (let fila = 0; fila < this.laberinto.length; fila++) {
      for (let col = 0; col < this.laberinto[fila].length; col++) {
        let x = col * this.tamañoCelda;
        let y = fila * this.tamañoCelda;
        if (this.laberinto[fila][col] === 1) {
          this.paredes.push(new paredes(x, y, this.tamañoCelda));
        }
        else if (this.laberinto[fila][col] === 2) {
          this.llaves.push(new llaves(x, y, this.tamañoCelda));
          this.totalLlaves++;
        }
      }
    }
    this.botonAncho = 200;
    this.botonAlto = 50;
    this.botonX = width / 2 - this.botonAncho / 2;
    this.botonY = height / 2 + 20;
    this.botonReinicioAncho = 200;
    this.botonReinicioAlto = 50;
    this.botonReinicioX = width / 2 - this.botonReinicioAncho / 2;
    this.botonReinicioY = height / 2 + 80;
  }

  actualizarYDibujar() {
    if (this.estadodeljuego === "jugando") {
      let tiempoTranscurrido = millis() - this.tiempoInicio;
      if (tiempoTranscurrido > this.tiempoLimite) {
        this.estadodeljuego = "derrota";
      }
    }
    this.ui.dibujar(this.estadodeljuego, this);
  }

  manejarClic(mouseX, mouseY) {
    if (this.estadodeljuego === "inicio") {
      if (mouseX > this.botonX &&
          mouseX < this.botonX + this.botonAncho &&
          mouseY > this.botonY &&
          mouseY < this.botonY + this.botonAlto) {
        this.estadodeljuego = "jugando";
        this.tiempoInicio = millis();
        sonidoBoton.play();
      }
    }
    else if (this.estadodeljuego === "victoria") {
      if (mouseX > this.botonReinicioX &&
          mouseX < this.botonReinicioX + this.botonReinicioAncho &&
          mouseY > this.botonReinicioY &&
          mouseY < this.botonReinicioY + this.botonReinicioAlto) {
        this.reiniciar();
        sonidoBoton.play();
      }
    }
    else if (this.estadodeljuego === "derrota") {
      if (mouseX > this.botonReinicioX &&
          mouseX < this.botonReinicioX + this.botonReinicioAncho &&
          mouseY > this.botonReinicioY &&
          mouseY < this.botonReinicioY + this.botonReinicioAlto) {
        this.reiniciar();
        sonidoBoton.play();
      }
    }
  }

  manejarTecla(keyCode) {
    if (this.estadodeljuego === "jugando") {
      let seMovio = this.jugador.moverjugador(keyCode, this);
      if (seMovio) {
        this.chequearColisionLlaves();
        this.chequearVictoria();
      }
    }
  }

  chequearColisionLlaves() {
    let pFila = Math.floor(this.jugador.PosY / this.tamañoCelda);
    let pCol = Math.floor(this.jugador.PosX / this.tamañoCelda);
    for (let i = this.llaves.length - 1; i >= 0; i--) {
      let llave = this.llaves[i];
      let lFila = Math.floor(llave.PosY / this.tamañoCelda);
      let lCol = Math.floor(llave.PosX / this.tamañoCelda);
      if (pFila === lFila && pCol === lCol) {
        this.llaves.splice(i, 1);
        this.llavesRecogidas++;
        console.log("Llaves recogidas: " + this.llavesRecogidas);
      }
    }
  }

  chequearVictoria() {
    let pFila = Math.floor(this.jugador.PosY / this.tamañoCelda);
    let pCol = Math.floor(this.jugador.PosX / this.tamañoCelda);
    if (pFila === 1 && pCol === 0 && this.llavesRecogidas === this.totalLlaves) {
      this.estadodeljuego = "victoria";
    }
  }

  esPosicionValida(pixelX, pixelY) {
    let col = Math.floor(pixelX / this.tamañoCelda);
    let fila = Math.floor(pixelY / this.tamañoCelda);
    if (fila < 0 || fila >= this.laberinto.length || col < 0 || col >= this.laberinto[0].length) {
      return false;
    }
    if (this.laberinto[fila][col] === 1) {
      return false;
    }
    return true;
  }

  reiniciar(){
    this.estadodeljuego = "inicio";
    this.jugador = new jugador();
    this.llavesRecogidas = 0;
    this.tiempoInicio = 0;
    this.iniciar();
  }
}


