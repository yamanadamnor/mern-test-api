// TODO: Split endpoint-ref into its own component

import React, { useState, useEffect } from "react";
import Highlight from "react-highlight";
import Navbar from "./components/Navbar";
import { Tabs, Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

function App() {
  const [routes, setRoutes] = useState();

  const getData = async () => {
    // const url = "http://localhost:3001/routes";
    const url = "http://192.168.0.115:3001/routes";
    const res = await fetch(url);
    const data = await res.json();
    setRoutes(data);
  };

  useEffect(() => {
    getData();
  });

  const error = `
{
  "message": {
    "error": "The error message"
  }
}
  `;

  const response = `
{
  "_id": "5e64d2b0f58006418c679d8c",
  "name": "Sweden",
  "vat": 25,
  "__v": 0
}
  `;

  return (
    <div className="App">
      <main>
        <header>
          <Navbar />
        </header>
        <section className="section">
          <h2>Endpoints</h2>
          {routes
            ? routes.map( (route, index) => {
                return (
                  <React.Fragment key={index}>
                    {route.methods.map((method, index) => {
                      return (
                        <div className="endpoint-ref" key={`${route.path} ${index}`}>
                          <Tabs
                            defaultActiveKey="response"
                            id="uncontrolled-tab-example"
                          >
                            <Tab eventKey="response" title="Example response">
                              <Highlight className="snippet">
                                {response}
                              </Highlight>
                            </Tab>
                            <Tab eventKey="error" title="Example Error">
                              <Highlight className="snippet">{error}</Highlight>
                            </Tab>
                          </Tabs>
                          <Highlight className="http snippet">{`${method} ${route.path} HTTP/1.1`}</Highlight>
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              })
            : ""}
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
