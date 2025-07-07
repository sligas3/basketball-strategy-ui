import BasketballPlay from "./components/BasketballPlay";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Montserrat', Arial, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2e3192 0%, #1bffff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          color: "#fff",
          marginBottom: "2rem",
          textShadow: "1px 2px 8px #0009",
        }}
      >
        🏀 Basket Strategy Simulator
      </h1>
      <BasketballPlay />
    </div>
  );
}
