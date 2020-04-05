import React, { useState, useEffect } from 'react';
import {
  Nav, Tab, Row, Col,
} from 'react-bootstrap';
import Highlight from 'react-highlight';

function Snippets() {
  const [routes, setRoutes] = useState();

  async function fetchData() {
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
        ? routes.map((route, index) => (
          <React.Fragment key={index}>
            {route.methods.map((method) => (
              <div
                className="endpoint-ref"
                key={`${route.path} ${index}`}
              >
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="response"
                >
                  <Row>
                    <Col sm={3}>
                      <Nav variant="tabs" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="response">
                            Example response
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="error">
                            Example error
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="response">
                          <Highlight className="snippet json">
                            {response}
                          </Highlight>
                        </Tab.Pane>
                        <Tab.Pane eventKey="error">
                          <Highlight className="snippet json">
                            {error}
                          </Highlight>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                <Highlight className="http snippet">{`${method} ${route.path} HTTP/1.1`}</Highlight>
              </div>
            ))}
          </React.Fragment>
        ))
        : ''}
    </>
  );
}

export default Snippets;
