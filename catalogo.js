/* =====================================================================
   CATÁLOGO DE STICKERS Y ROMPECABEZAS
   Este archivo es la ÚNICA fuente de datos: lo leen AR.html y Album.html.

   ► LA CANTIDAD DE PIEZAS DEL ROMPECABEZAS = CANTIDAD DE STICKERS en STICKERS.
     Agrega o quita bloques { ... } y el wallpaper se vuelve a dividir solo.

   ► WALLPAPER: la imagen que se divide en piezas y se desbloquea al completar.

   Campos de cada sticker:
   - id:          nombre único, sin espacios (se guarda en el celular del visitante)
   - nombre:      nombre visible
   - imagen:      foto del sticker; es la que la cámara AR reconoce
   - video:       animación que aparece sobre el sticker al escanearlo
   - autor / descripcion / enlaces: lo que se ve al tocar una pieza desbloqueada
   - pista:       ayuda que se ve al tocar una pieza bloqueada
   ===================================================================== */

const WALLPAPER = {
  imagen: "Wallpaper.jpg",                 // ← sube aquí la imagen que se va a dividir
  nombre: "Wallpaper del Espejismo",       // título al completar el rompecabezas
  archivoDescarga: "wallpaper-espejismo"   // nombre del archivo al descargarlo (sin extensión)
};

// Clave donde se guarda el progreso en el celular (la usan AR.html y Album.html)
const CLAVE_GUARDADO = "galeria_desbloqueados";

const STICKERS = [
  {
    id: "Calavera",
    nombre: "Calavera",
    imagen: "Calavera.png",
    video: "Calavera.mp4",
    autor: "Ilustrador anonimo",
    descripcion: "Sin descripcion.",
    pista: "Un hermoso esqueleto mientras una mujer lo observa.",
    enlaces: [ /* { texto: "Instagram", url: "https://instagram.com/usuario" } */ ]
  },
  {
    id: "Charro",
    nombre: "El Charro Negro",
    imagen: "CharroNegro.jpg",
    video: "CharroNegro.mp4",
    autor: "Grecia Morales (Suki)",
    descripcion: "Las monedas de oro que brillan en la penumbra, son pagadas con el precio del alma.",
    pista: "Una inigualable leyenda mexicana.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/suki_owo_" }]
  },
  {
    id: "Osito",
    nombre: "Mi corazon te lo regalo",
    imagen: "Osito.png",
    video: "Osito.mp4",
    autor: "Bombon Skylos",
    descripcion: "Trata de retratar de forma cruda y literal a mi personaje regalando su corazon.",
    pista: "No hay nada mas tierno que alguien regalando su corazon.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/bombon_skylos" }]
  },
  {
    id: "Retrato",
    nombre: "Retrato Oval",
    imagen: "Retrato.jpeg",
    video: "Retrato.mp4",
    autor: "Fatima Belem Villanueva Martinez",
    descripcion: "Al final de la noche, el hambre prevalece.",
    pista: "Un retrato de una persona formal.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/just_an_emo_bird" }]
  },
  {
    id: "Silend",
    nombre: "Hinako",
    imagen: "Hinako.jpg",
    video: "Hinako.mp4",
    autor: "Leslie synyster",
    descripcion: "Una ilustración de la protagonista de Silent hill F en estilo fotografía vintage.",
    pista: "Piensa en lo que te atormenta y en lirios rojos.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/digitalpeperonni" }]
  },
  {
    id: "MM",
    nombre: "Michael Myers",
    imagen: "MM.jpeg",
    video: "MM.mp4",
    autor: "Merrybunx",
    descripcion: "Michael de chill despues de la chamba",
    pista: "Despierta cada año en halloween",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/merrybunx" }]
  },
  {
    id: "Calabaza",
    nombre: "PUMPKIN — Trick or Treat?",
    imagen: "Calabaza.jpg",
    video: "Calabaza.mp4",
    autor: "Mahun Herrera",
    descripcion: "Entre sombras y espíritus, una sonrisa brillante anuncia que Halloween ha llegado.",
    pista: "Las almas al servicio de la gran calabaza",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/mahun_doodles" }]
  },
  {
    id: "Cena",
    nombre: "Huesos y todo",
    imagen: "Cena.jpg",
    video: "Cena.mp4",
    autor: "Aiden Ramos Ceniceros",
    descripcion: "En realidad ambos están de acuerdo con esta desición, uno dando más que él otro",
    pista: "Una deliciosa cena",
    enlaces: []
  },
  {
    id: "Transformers",
    nombre: "Autobot a sustar",
    imagen: "Transformers.jpg",
    video: "Transformers.mp4",
    autor: "Karen Itzel Cedillo Chavez",
    descripcion: "Este dibujo esta basado en un capitulo de transformers animated una de mis series favoritas del capitulo y llego la araña el cual es uno de mis favoritos por la temática",
    pista: "Hasta los mejores motores piden dulce o travesura",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/kirby_cedillo" }]
  },
  {
    id: "Alucard",
    nombre: "Alucard",
    imagen: "Alucard.jpg",
    video: "Alucard.mp4",
    autor: "Santihrz",
    descripcion: "Te amaré hasta que no quede nada de ti, y aun entonces, ni la muerte te concederá la libertad de olvidarme",
    pista: "El reino de los vampiros",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/santi_goes_on" }]
  },
  {
    id: "Mariposa",
    nombre: "Mariposa",
    imagen: "Mariposa.png",
    video: "Mariposa.mp4",
    autor: "GhostBun12",
    descripcion: "Criatura de la obscuridad de ojos alados",
    pista: "Esos ojos te ven siempre",
    enlaces: []
  },
  {
    id: "Myheard",
    nombre: "Myheard",
    imagen: "Myheard.jpg",
    video: "Myheard.mp4",
    autor: "Karla Vivar",
    descripcion: "Se basa en el sentimiento de extrañar a una persona que se fue de la nada y los sentimientos desde la tristeza hasta el enojo del porqué no saber el porqué esa persona se fue",
    pista: "Un pobre corazón",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/__hey_kvr_?rpxt=MTg4bjFlY2hycjMwMQ%3D%3D" }]
  }
  /* Para agregar otro sticker, escribe una coma después de la llave anterior y pega:
  ,{
    id: "NuevoSticker",
    nombre: "Nombre visible",
    imagen: "NuevoSticker.jpg",
    video: "NuevoSticker.mp4",
    autor: "Nombre del autor",
    descripcion: "Descripción.",
    pista: "Pista para encontrarlo.",
    enlaces: []
  }
  */
];

/* =====================================================================
   División automática del wallpaper (no hace falta tocar nada de aquí)
   Devuelve exactamente STICKERS.length piezas como fracciones 0..1 de la
   imagen: [{ x, y, w, h }]. Si el número no cuadra en una cuadrícula
   exacta (7, 11, 13...), algunas filas llevan una columna más.
   ===================================================================== */
function calcularPiezas(cantidad, proporcion) {   // proporcion = ancho / alto de la imagen
  if (cantidad < 1) return [];
  // Elige el número de filas que deja las piezas lo más cuadradas posible
  let filas = 1, mejor = Infinity;
  for (let f = 1; f <= cantidad; f++) {
    const colsMedias = cantidad / f;
    const forma = Math.abs(Math.log((proporcion * f) / colsMedias));   // 0 = pieza cuadrada
    if (forma < mejor) { mejor = forma; filas = f; }
  }
  const base = Math.floor(cantidad / filas), extra = cantidad % filas;
  const piezas = [];
  for (let r = 0; r < filas; r++) {
    // reparte las columnas extra de forma pareja entre las filas
    const cols = base + (Math.floor(((r + 1) * extra) / filas) - Math.floor((r * extra) / filas));
    for (let c = 0; c < cols; c++) {
      piezas.push({ x: c / cols, y: r / filas, w: 1 / cols, h: 1 / filas });
    }
  }
  return piezas;
}
