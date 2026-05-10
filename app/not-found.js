export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "32rem" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 3rem)" }}>404</h1>
        <p style={{ margin: "12px 0 0", lineHeight: 1.7 }}>
          The page you are looking for could not be found.
        </p>
      </div>
    </main>
  );
}
