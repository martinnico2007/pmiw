class juego {
  constructor(){
    this.jugador= new jugador
    this.barbaazul;
    this.paredes;
  }
 iniciar(){

 }
 
  
  reiniciar(){

  }

  moverjugador(keyCode) {
    this.jugador.moverjugador(keyCode);
  }

  
  dibujar(){
    this.jugador.dibujar()

  }
}