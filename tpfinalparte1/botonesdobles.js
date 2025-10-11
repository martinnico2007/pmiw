function botonesDobles(opcion1, opcion2, yPos = 400) {
  let ancho = 150
    let alto = 40;

  // Botón Izquierdo (Opción 1)
  let x1 = width * 0.25 - ancho / 2;

  push();
  fill('#BFA757');
  stroke('#F7ECC5');
  strokeWeight(1);
  rect(x1, yPos, ancho, alto, 8);
  fill('#F7ECC5');
  textSize(12);
  textFont('Arial');

  textAlign(CENTER, CENTER);

  //el dibujo del texto
  text(opcion1, x1 + ancho / 2, yPos + alto / 2);
  pop();

  // Botón Derecho (Opción 2)
  let x2 = width * 0.75 - ancho / 2;

  push();
  fill('#BFA757');
  stroke('#F7ECC5');
  strokeWeight(1);
  rect(x2, yPos, ancho, alto, 8);
  fill('#F7ECC5');
  textSize(12);
  textFont('Arial');
  textAlign(CENTER, CENTER);

  // dibujo del texto del otro cuadrito
  text(opcion2, x2 + ancho / 2, yPos + alto / 2);
  pop();
}
