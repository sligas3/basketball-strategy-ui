import React from "react";

const courtStyle = {
  position: "relative",
  width: "520px",
  height: "360px",
  margin: "2rem auto",
  background: "radial-gradient(circle at 75% 50%, #fff 80%, #e0e0e0 100%)",
  border: "4px solid #e67300",
  borderRadius: "30px",
  boxShadow: "0 8px 40px #0003"
};

const playerStyle = {
  position: "absolute",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff9800 60%, #b45309 100%)",
  border: "3px solid #fff",
  boxShadow: "0 2px 12px #0003",
  transition: "left 0.8s cubic-bezier(.68,-0.55,.27,1.55), top 0.8s cubic-bezier(.68,-0.55,.27,1.55)",
  zIndex: 2,
  fontFamily: "'Montserrat', Arial, sans-serif",
  color: "#3a2e0c",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold"
};

export default function BasketballCourt({ positions = [] }) {
  // Parámetros del arco de triple
  const arcRadius = 120;
  const arcWidth = 4;
  const courtW = 520, courtH = 360;
  const arcCenterY = courtH / 2;

  // Dónde empiezan y terminan las líneas rectas de tres puntos (en pixeles)
  const line3Top = arcCenterY - arcRadius;
  const line3Bot = arcCenterY + arcRadius;

  return (
    <div style={courtStyle}>
      {/* Línea de mitad de cancha (vertical) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "0",
          height: "100%",
          borderLeft: "3px solid #e67300",
          zIndex: 1
        }}
      />

      {/* Círculo central */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "4px solid #e67300",
          background: "#fff8",
          transform: "translate(-50%, -50%)",
          zIndex: 1
        }}
      />

      {/* Línea de 3 puntos izquierda */}
      <svg
        style={{
          position: "absolute",
          left: 0,
          top: arcCenterY - arcRadius,
          pointerEvents: "none",
          zIndex: 1,
        }}
        width={arcRadius * 2}
        height={arcRadius * 2}
      >
        {/* Semicírculo de tres puntos (izquierda) */}
        <path
          d={`
            M 0 0
            A ${arcRadius} ${arcRadius} 0 0 1 0 ${arcRadius * 2}
          `}
          fill="none"
          stroke="#e67300"
          strokeWidth={arcWidth}
        />
      </svg>
      {/* Línea de 3 puntos derecha */}
      <svg
        style={{
          position: "absolute",
          left: courtW - arcRadius * 2,
          top: arcCenterY - arcRadius,
          pointerEvents: "none",
          zIndex: 1,
        }}
        width={arcRadius * 2}
        height={arcRadius * 2}
      >
        {/* Semicírculo de tres puntos (derecha) */}
        <path
          d={`
            M ${arcRadius * 2} 0
            A ${arcRadius} ${arcRadius} 0 0 0 ${arcRadius * 2} ${arcRadius * 2}
          `}
          fill="none"
          stroke="#e67300"
          strokeWidth={arcWidth}
        />
      </svg>
      {/* Líneas rectas verticales de tres puntos (derecha) */}
      <div
        style={{
          position: "absolute",
          left: courtW,
          top: line3Top,
          width: "0",
          height: `${arcRadius * 2}px`,
          borderRight: `${arcWidth}px solid #e67300`,
          zIndex: 1
        }}
      />

      {/* Jugadores */}
      {positions.map((pos, i) => (
        <div
          key={i}
          style={{
            ...playerStyle,
            left: `calc(${pos.x * 100}% - 16px)`,
            top: `calc(${pos.y * 100}% - 16px)`,
            transition: playerStyle.transition
          }}
          title={`Jugador ${i + 1}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}