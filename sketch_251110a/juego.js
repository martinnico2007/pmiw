class juego {
  constructor(){
    this.jugador = new jugador();
    this.barbaazul;
    this.paredes = [];
    this.tamañoCelda = 40;
    this.laberinto = [];
    this.llaves = [];
    this.estadodeljuego = "inicio";
    this.botonX = 0;
    this.botonY = 0;
    this.botonAncho = 0;
    this.botonAlto = 0;
    this.llavesRecogidas = 0;
    this.totalLlaves = 0;
  }
 
  iniciar(){
    // Definimos el laberinto
    let laberinto = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 2, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.laberinto = laberinto; // Guardamos el laberinto en la clase


this.totalLlaves = 0;
    for (let fila = 0; fila < this.laberinto.length; fila++) {
      for (let col = 0; col < this.laberinto[fila].length; col++) {
        
        let x = col * this.tamañoCelda;
        let y = fila * this.tamañoCelda;

        // Si es '1', crea una pared
        if (this.laberinto[fila][col] === 1) { // <-- CORRECCIÓN: Se añade {
          this.paredes.push(new paredes(x, y, this.tamañoCelda));
        } // <-- Esta llave ahora cierra el IF
        
        // Si es '2', crea una llave
        else if (this.laberinto[fila][col] === 2) {
          this.llaves.push(new llaves(x, y, this.tamañoCelda));
        }
        // (Las llaves '}' que cierran los 'for' loops están más abajo)
      }
    }
// ...

    // --- Lógica del botón (de setup()) MOVİDA AQUÍ ---
    this.botonAncho = 200;
    this.botonAlto = 50;
    this.botonX = width / 2 - this.botonAncho / 2;
    this.botonY = height / 2 + 20;
  }
  
  // --- NUEVA FUNCIÓN (Reemplaza el draw() de sketch.js) ---
  // Esta es la MÁQUINA DE ESTADOS que pidió tu profesor
  actualizarYDibujar() {
    background(250);

    if (this.estadodeljuego === "inicio") {
      this.dibujarMenuInicio();
    }
    else if (this.estadodeljuego === "jugando") { 
      this.dibujarJuego();
    }
  else if (this.estadodeljuego === "victoria") {
      this.dibujarPantallaVictoria();
  }
}

  // --- NUEVA FUNCIÓN (Reemplaza el mousePressed() de sketch.js) ---
  manejarClic(mouseX, mouseY) {
    if (this.estadodeljuego === "inicio") {
      if (mouseX > this.botonX && 
          mouseX < this.botonX + this.botonAncho && 
          mouseY > this.botonY && 
          mouseY < this.botonY + this.botonAlto) {
        this.estadodeljuego = "jugando";
      }
    }
  }

  // --- NUEVA FUNCIÓN (Reemplaza el keyPressed() de sketch.js) ---
  manejarTecla(keyCode) {
    if (this.estadodeljuego === "jugando") {
      this.jugador.moverjugador(keyCode, this); // Pasa 'this' (juego) para colisiones
    
    let seMovio = this.jugador.moverjugador(keyCode, this);
      if (seMovio) {
        this.chequearColisionLlaves();
        this.chequearVictoria();
      }
      }
    }
  
  dibujarMenuInicio() {
    stroke(0);
    fill(230); 
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER); 
    text("Iniciar Juego", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  // (Renombramos tu función 'dibujar' a 'dibujarJuego' para más claridad)
  dibujarJuego(){
    for (let i = 0; i < this.paredes.length; i++) {
      this.paredes[i].dibujar();
    }
    for (let i = 0; i < this.llaves.length; i++) {
      this.llaves[i].dibujar();
    }
    this.jugador.dibujar();
  }

  // (La función de colisión se queda igual, ya era POO)
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

  // (Tu método 'reiniciar' se queda igual)
  reiniciar(){

  }
}