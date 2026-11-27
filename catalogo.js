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
   - deteccion:   cómo se escanea ESTE sticker en la cámara AR (ver abajo)

   ► deteccion: { tipo, forma, fondo, sensibilidad }   (todos opcionales)
     forma:        "circulo" ignora las esquinas (chapas redondas); "rect" usa toda la imagen.
     tipo:         "normal"  stickers con buen contraste (valor por defecto)
                   "claro"   colores claros o pasteles, sobre todo en fondos blancos
                   "oscuro"  colores muy oscuros o sobre fondos oscuros
     fondo:        color del lugar donde se pega el sticker ("#ffffff" blanco, "#000000" negro...).
                   Importante si la imagen es PNG con partes transparentes: se rellenan con este color.
     sensibilidad: 1 = normal. Sube (1.2, 1.4...) si no lo reconoce; baja (0.8) si lo
                   confunde con otros stickers o aparece sin querer. Rango útil: 0.5 a 2.

   ► AJUSTES_AR.exposicion: brillo de la cámara. -1 más oscura, 0 neutra, 1 más clara.
     Si TODOS tus stickers son claros y la cámara los "quema", baja este valor.
   ===================================================================== */

const WALLPAPER = {
  imagen: "Wallpaper.jpg",                 // ← sube aquí la imagen que se va a dividir
  nombre: "Wallpaper leyendas legendarias",       // título al completar el rompecabezas
  archivoDescarga: "wallpaper-leyendas-legendarias"   // nombre del archivo al descargarlo (sin extensión)
};

// Ajustes globales de la cámara AR
const AJUSTES_AR = {
  exposicion: 0.2   // -1 a 1 (ajustado para evitar reflejos/sobreexposición en chapas brillantes)
};

// Clave donde se guarda el progreso en el celular (la usan AR.html y Album.html)
const CLAVE_GUARDADO = "galeria_desbloqueados";

const STICKERS = [
  {
    id: "NukaQuantum",
    nombre: "NukaQuantum",
    imagen: "NukaQuantum.png",
    video: "Calavera.mp4",
    deteccion: { tipo: "normal", forma: "circulo", sensibilidad: 1 },
    pista: "Pista1."
  },
  {
    id: "NukaCherry",
    nombre: "NukaCherry",
    imagen: "Nukacherry.png",
    video: "Calavera.mp4",
    deteccion: { tipo: "normal", forma: "circulo", sensibilidad: 1 },
    pista: "Pista2"
  },
  {
    id: "NukaCola",
    nombre: "NukaCola",
    imagen: "Nukacola.png",
    video: "Calavera.mp4",
    deteccion: { tipo: "normal", forma: "circulo", sensibilidad: 1 },
    pista: "Pista3"
  }
];

/* =====================================================================
   División automática del wallpaper (no hace falta tocar nada de aquí)
   Devuelve exactamente STICKERS.length piezas como fracciones 0..1 de la
   imagen: [{ x, y, w, h }]. Si el número no cuadra en una cuadrícula
   exacta (7, 11, 13...), algunas filas llevan una columna más.
   ===================================================================== */
function calcularPiezas(cantidad, proporcion) {   // proporcion = ancho / alto de la imagen
  if (cantidad < 1) return [];
  let filas = 1, mejor = Infinity;
  for (let f = 1; f <= cantidad; f++) {
    const colsMedias = cantidad / f;
    const forma = Math.abs(Math.log((proporcion * f) / colsMedias));
    if (forma < mejor) { mejor = forma; filas = f; }
  }
  const base = Math.floor(cantidad / filas), extra = cantidad % filas;
  const piezas = [];
  for (let r = 0; r < filas; r++) {
    const cols = base + (Math.floor(((r + 1) * extra) / filas) - Math.floor((r * extra) / filas));
    for (let c = 0; c < cols; c++) {
      piezas.push({ x: c / cols, y: r / filas, w: 1 / cols, h: 1 / filas });
    }
  }
  return piezas;
}