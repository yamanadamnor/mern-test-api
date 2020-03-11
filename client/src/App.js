import React from "react";
import Navbar from "./components/Navbar";
import Snippet from "./components/Snippet";
import Snippets from "./components/Snippet copy";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <Navbar />
        </header>
        <section className="section">
          <h2>Endpoints</h2>
          <Snippet />
          {/* <Snippets /> */}
        </section>
        <footer className="section footer">
          <h2>Footer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            assumenda aspernatur repellat nihil! Voluptatem ipsum mollitia
            architecto, iusto nemo sed?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            assumenda aspernatur repellat nihil! Voluptatem ipsum mollitia
            architecto, iusto nemo sed?
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
