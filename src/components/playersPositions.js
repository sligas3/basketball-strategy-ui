export const POSITIONS = {
  "ofensiva-pickandroll": [
    { x: 0.15, y: 0.5 }, // base (armador)
    { x: 0.35, y: 0.38 }, // pivot
    { x: 0.6, y: 0.38 }, // ala-pivot
    { x: 0.8, y: 0.65 }, // escolta
    { x: 0.8, y: 0.22 }, // alero
  ],
  "ofensiva-aislamiento": [
    { x: 0.25, y: 0.5 }, // jugador en aislamiento
    { x: 0.15, y: 0.2 }, // abierto en esquina izquierda
    { x: 0.15, y: 0.8 }, // abierto en esquina derecha
    { x: 0.8, y: 0.3 }, // abierto alto izquierda
    { x: 0.8, y: 0.7 }, // abierto alto derecha
  ],
  "ofensiva-movimientobalon": [
    { x: 0.2, y: 0.25 }, // esquina izquierda
    { x: 0.2, y: 0.75 }, // esquina derecha
    { x: 0.45, y: 0.5 }, // centro
    { x: 0.7, y: 0.3 }, // ala izquierda
    { x: 0.7, y: 0.7 }, // ala derecha
  ],
  "defensiva-zona": [
    { x: 0.45, y: 0.2 }, // central bajo
    { x: 0.35, y: 0.4 }, // lateral bajo izquierda
    { x: 0.35, y: 0.6 }, // lateral bajo derecha
    { x: 0.6, y: 0.3 }, // lateral alto izquierda
    { x: 0.6, y: 0.7 }, // lateral alto derecha
  ],
  "defensiva-presion": [
    { x: 0.7, y: 0.2 }, // adelantado izquierda
    { x: 0.7, y: 0.8 }, // adelantado derecha
    { x: 0.55, y: 0.35 }, // central izquierdo
    { x: 0.55, y: 0.65 }, // central derecho
    { x: 0.35, y: 0.5 }, // último hombre
  ],
  "defensiva-hombre": [
    { x: 0.25, y: 0.25 }, // marca hombre 1
    { x: 0.25, y: 0.75 }, // marca hombre 2
    { x: 0.45, y: 0.3 }, // marca hombre 3
    { x: 0.45, y: 0.7 }, // marca hombre 4
    { x: 0.65, y: 0.5 }, // marca hombre 5
  ],
  default: [
    { x: 0.2, y: 0.25 },
    { x: 0.2, y: 0.75 },
    { x: 0.5, y: 0.5 },
    { x: 0.8, y: 0.3 },
    { x: 0.8, y: 0.7 },
  ],
};
