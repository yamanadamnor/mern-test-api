import React from 'react';
import Navbar from './components/Navbar';
// import Snippet from './components/Snippet';
import Sidebar from './components/Sidebar';
// import Snippets from './components/Snippet copy';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <header>
          <Navbar />
        </header>

        <section>
          <h2>Sidebar</h2>
          <Sidebar />
        </section>

        <section className="section">
          <h2>Endpoints</h2>
          {/* <Snippet /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
