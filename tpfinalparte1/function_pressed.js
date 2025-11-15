function botonEstado(x, y, r) {
  let distancia = dist(mouseX, mouseY, x, y);
  
  if(distancia < r) {
    fill(172,144,108);
  }else{
    fill(187,144,102);
}

ellipse(x, y, r * 2, r * 2);
}
