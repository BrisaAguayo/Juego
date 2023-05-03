// Crear una variable para el jugador
var jugador;

// Crear un array para las plataformas
var plataformas = [];

function setup() {
  // Crear el lienzo
  createCanvas(640, 480);

  // Crear un jugador en la posición (100, 100)
  jugador = new Jugador(50, 100);

  // Crear algunas plataformas y agregarlas al array de plataformas
  plataformas.push(new Plataforma(50, 200, 100, 20));
  plataformas.push(new Plataforma(150, 300, 100, 20));
  plataformas.push(new Plataforma(260, 250, 100, 20));
  plataformas.push(new Plataforma(375, 300, 100, 20));
  plataformas.push(new Plataforma(475, 250, 100, 20));

}

function draw() {
  // Dibujar el fondo
  background(200, 200, 255);

  // Mover al jugador
  jugador.mover();

  // Dibujar al jugador
  jugador.dibujar();

  // Dibujar las plataformas
  for (var i =0; i < plataformas.length; i++) {
    plataformas[i].dibujar();

    // Si el jugador toca la plataforma, hacer que el jugador esté en la parte superior de la plataforma
    if (jugador.tocaPlataforma(plataformas[i])) {
      jugador.y = plataformas[i].y - jugador.altura;
    }
  }
}

// Clase Jugador
function Jugador(x, y) {
  // Propiedades del jugador
  this.x = x;
  this.y = y;
  this.velocidad = 3;
  this.altura = 40;
  this.ancho = 20;

  // Método para mover al jugador
  this.mover = function() {
    // Mover al jugador hacia la izquierda si se presiona la tecla izquierda
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    // Mover al jugador hacia la derecha si se presiona la tecla derecha
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }
    // Hacer que el jugador salte si se presiona la tecla de espacio
    if (keyIsDown(32) && this.tocaPlataforma()) {
      this.y -= 50;
    }
    // Aplicar la gravedad al jugador
    this.y += 5;
  }

  // Método para dibujar al jugador
  this.dibujar = function() {
    fill(52, 73, 94);
    rect(this.x, this.y, this.ancho, this.altura);
  }

  // Método para detectar si el jugador toca una plataforma
  this.tocaPlataforma = function(plataforma) {
    // Si no se proporciona ninguna plataforma, buscar una plataforma debajo del jugador
    if (!plataforma) {
      for (var i = 0; i < plataformas.length; i++) {
        if (this.x + this.ancho >plataformas[i].x && this.x < plataformas[i].x + plataformas[i].ancho && this.y + this.altura >= plataformas[i].y && this.y + this.altura <= plataformas[i].y + plataformas[i].altura) {
return true;
}
}
return false;
}
// Si se proporciona una plataforma, verificar si el jugador está sobre ella
else {
if (this.x + this.ancho > plataforma.x && this.x < plataforma.x + plataforma.ancho && this.y + this.altura >= plataforma.y && this.y + this.altura <= plataforma.y + plataforma.altura) {
return true;
}
return false;
}
}
}

// Clase Plataforma
function Plataforma(x, y, ancho, altura) {
// Propiedades de la plataforma
this.x = x;
this.y = y;
this.ancho = ancho;
this.altura = altura;

// Método para dibujar la plataforma
this.dibujar = function() {
fill(97, 106, 107);
rect(this.x, this.y, this.ancho, this.altura);
}
}
  
  
  