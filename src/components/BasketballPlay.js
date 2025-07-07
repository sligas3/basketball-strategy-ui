import React, { useState } from "react";
import { POSITIONS } from "./playersPositions";
import BasketballCourt from "./BasketballCourt";

export default function BasketballPlay() {
  const [strategy, setStrategy] = useState("");
  const [players, setPlayers] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [courtPositions, setCourtPositions] = useState(POSITIONS["default"]);

  // Fuente Montserrat para toda la UI
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const submitPlay = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!strategy) {
      setFormError("Debes seleccionar una estrategia.");
      return;
    }
    setLoading(true);
    setResult("");
    const start = Date.now();
    try {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/basketball/play`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          strategy,
          players: players
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });
      const data = await resp.text();
      const elapsed = Date.now() - start;
      const minDuration = 1000;
      setCourtPositions(POSITIONS[strategy] || POSITIONS["default"]);
      if (elapsed < minDuration) {
        setTimeout(() => setResult(data), minDuration - elapsed);
        setTimeout(() => setLoading(false), minDuration - elapsed);
      } else {
        setResult(data);
        setLoading(false);
      }
    } catch (e) {
      setResult("❌ No se pudo conectar al backend");
      setLoading(false);
    }
  };

  // Loader visual (balón girando)
  function BasketballLoader() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1.5rem 0",
        }}
      >
        <div className="basketball-loader" />
        <style>
          {`
          .basketball-loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, #ff9800 85%, #d2691e 100%);
            position: relative;
            animation: spin-basket 1s linear infinite;
            box-shadow: 0 2px 12px #0005;
          }
          .basketball-loader::before,
          .basketball-loader::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
          }
          .basketball-loader::before {
            left: 50%;
            top: 0;
            width: 4px;
            height: 100%;
            background: #552700;
            transform: translateX(-50%);
          }
          .basketball-loader::after {
            top: 50%;
            left: 0;
            width: 100%;
            height: 4px;
            background: #552700;
            transform: translateY(-50%);
          }
          @keyframes spin-basket {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Montserrat', Arial, sans-serif",
        background: "#fff2",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 16px #0002",
        maxWidth: "560px", // Ajuste para la cancha horizontal
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontFamily: "'Montserrat', Arial, sans-serif",
          textAlign: "center",
        }}
      >
        Simulador de Jugada
      </h2>
      <form
        onSubmit={submitPlay}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "1rem 0" }}>
          <label>
            Estrategia:{" "}
            <select
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
              required
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              <option value="" disabled>
                Selecciona una estrategia...
              </option>
              <optgroup label="Ofensiva">
                <option value="ofensiva-pickandroll">
                  Ofensiva: Pick and Roll
                </option>
                <option value="ofensiva-aislamiento">
                  Ofensiva: Aislamiento
                </option>
                <option value="ofensiva-movimientobalon">
                  Ofensiva: Movimiento de balón
                </option>
              </optgroup>
              <optgroup label="Defensiva">
                <option value="defensiva-zona">Defensiva: Zona</option>
                <option value="defensiva-presion">
                  Defensiva: Presión total
                </option>
                <option value="defensiva-hombre">
                  Defensiva: Hombre a hombre
                </option>
              </optgroup>
            </select>
          </label>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label>
            Jugadores (separados por coma):
            <br />
            <input
              type="text"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              placeholder="Ej: Juan, Pedro, Lucas"
              style={{
                width: "90%",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #bbb",
                fontFamily: "'Montserrat', Arial, sans-serif",
              }}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            background: "#00c853",
            color: "#fff",
            border: "none",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            fontFamily: "'Montserrat', Arial, sans-serif",
            minWidth: "140px", // Nuevo: ancho mínimo más natural
            alignSelf: "center", // Nuevo: centra el botón en el form
          }}
          disabled={loading}
        >
          {loading ? "Simulando..." : "Simular"}
        </button>
        {loading && <BasketballLoader />}
        {formError && (
          <div
            style={{
              color: "#d32f2f",
              fontWeight: "bold",
              marginTop: "1rem",
              fontFamily: "'Montserrat', Arial, sans-serif",
            }}
          >
            {formError}
          </div>
        )}
      </form>
      {result && (
        <div
          style={{
            background: "#fff",
            marginTop: "1.5rem",
            padding: "1rem",
            borderRadius: "8px",
            color: "#2e3192",
            fontWeight: "bold",
            minHeight: "2rem",
            fontFamily: "'Montserrat', Arial, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {result}
        </div>
      )}

      {/* Cancha horizontal debajo */}
      <BasketballCourt positions={courtPositions} />
    </div>
  );
}
