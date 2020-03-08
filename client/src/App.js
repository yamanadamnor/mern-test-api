import React from "react";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <main className="App">
      <Navbar />
      <section className="section">
        <h2>Section 1</h2>
      </section>
      <section className="section">
        <h2>Section 2</h2>
      </section>
      <section className="section">
        <h2>Section 3</h2>
      </section>
      <footer className="section footer">
        <h2>Footer</h2>
      </footer>
    </main>
  );
}

export default App;
