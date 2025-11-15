class UI {
  constructor() {
     this.fuenteBotones = this.fuenteBotones;
  }
  
  cargarImagenes(imgInicio, imgVictoria, imgDerrota) {
  this.imgInicio = imgInicio;
  this.imgVictoria = imgVictoria;
  this.imgDerrota = imgDerrota;
}
cargarFuentes(botones) {
    this.fuenteBotones = botones;
}


  dibujar(estado, juego) {
    if (estado === "inicio") {
      background(250);
      this.dibujarMenuInicio(juego.botonX, juego.botonY, juego.botonAncho, juego.botonAlto);
    }
    else if (estado === "jugando") {
      this.dibujarJuego(juego);
    }
    else if (estado === "victoria") {
      this.dibujarPantallaVictoria();
      this.dibujarBotonReinicio(juego.botonReinicioX, juego.botonReinicioY, juego.botonReinicioAncho, juego.botonReinicioAlto);
    }
    else if (estado === "derrota") {
      this.dibujarPantallaDerrota();
      this.dibujarBotonReinicio(juego.botonReinicioX, juego.botonReinicioY, juego.botonReinicioAncho, juego.botonReinicioAlto);
    }
  }

  dibujarMenuInicio(x, y, ancho, alto) {
    if (this.fuenteBotones) {
      textFont(this.fuenteBotones);
    }
    if (this.imgInicio) {
    image(this.imgInicio, 0, 0, width, height);
  } else {
    background(250);
  }
    stroke(0);
    fill(50,70,120);
    rect(x, y, ancho, alto);
    fill(250);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Iniciar Juego", x + ancho / 2, y + alto / 2);
  }

  dibujarJuego(juego) {
    background(0);

    // Dibuja paredes
    for (let i = 0; i < juego.paredes.length; i++) {
      juego.paredes[i].dibujar();
    }

    // Dibuja llaves
    for (let i = 0; i < juego.llaves.length; i++) {
      juego.llaves[i].dibujar();
    }

    // Dibuja jugador
    juego.jugador.dibujar();

    //tiempo restante
    let tiempoTranscurrido = millis() - juego.tiempoInicio;
    let tiempoRestante = (juego.tiempoLimite - tiempoTranscurrido) / 1000;
    if (tiempoRestante < 0) tiempoRestante = 0;
    fill(250);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Tiempo: " + nf(tiempoRestante, 0, 1), 10, 10);

    // contador de llaves
    textAlign(RIGHT, TOP);
    text("Llaves: " + juego.llavesRecogidas + " / " + juego.totalLlaves, width - 10, 10);
  }

  dibujarPantallaVictoria() {
  if (this.fuenteBotones) {
      textFont(this.fuenteBotones);
    }
     if (this.imgVictoria) {
    image(this.imgVictoria, 0, 0, width, height);
  } else {
    background(50, 200, 50);
  }
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("¡HAS GANADO!", width / 2, height / 2);
  }

  dibujarBotonReinicio(x, y, ancho, alto) {
  if (this.fuenteBotones) {
      textFont(this.fuenteBotones);
    }
    stroke(0);
    fill(230);
    rect(x, y, ancho, alto);
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Volver a Jugar", x + ancho / 2, y + alto / 2);
  }

  dibujarPantallaDerrota() {
   if (this.fuenteBotones) {
      textFont(this.fuenteBotones);
    }
    if (this.imgDerrota) {
    image(this.imgDerrota, 0, 0, width, height);
  } else {
    background(200, 50, 50);
  }
  
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2);
  }
}

