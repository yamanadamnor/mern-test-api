import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Highlight from "react-highlight";

function Snippet(props) {
  const [routes, setRoutes] = useState();

  async function fetchData() {
    const url = "http://localhost:3001/routes";
    const res = await fetch(url);
    const data = await res.json();
    setRoutes(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

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
    <>
      {routes
        ? routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.methods.map((method, index) => {
                  return (
                    <div
                      className="endpoint-ref"
                      key={`${route.path} ${index}`}
                    >
                      <Tabs
                        defaultActiveKey="response"
                        id="uncontrolled-tab-example"
                      >
                        <Tab eventKey="response" title="Example response">
                          <Highlight className="snippet">{response}</Highlight>
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
    </>
  );
}

export default Snippet;
