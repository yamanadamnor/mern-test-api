import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Highlight from 'react-highlight';

function Snippet() {
  const [routes, setRoutes] = useState();
  async function fetchData() {
    // const url = 'http://10.120.8.238:3001/routes';
    const url = 'http://localhost:3001/routes';
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
}`;
  const response = `
{
  "_id": "5e64d2b0f58006418c679d8c",
  "name": "Sweden",
  "vat": 25,
  "__v": 0
}`;

  return (
    <>
      {
      routes ? routes.map((route, index) => (
        <div
          className="endpoint-ref"
          key={`${route.method} ${index}`}
        >
          <Tabs
            defaultActiveKey="response"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="response" title="Example response">
              <Highlight className="snippet json">
                {response}
              </Highlight>
            </Tab>

            <Tab eventKey="error" title="Example Error">
              <Highlight className="snippet json">
                {error}
              </Highlight>
            </Tab>
          </Tabs>

          <Highlight className="http snippet">{`${route.method} ${route.path} HTTP/1.1`}</Highlight>
        </div>
      ))
        : ''
}
    </>
  );
}

export default Snippet;
