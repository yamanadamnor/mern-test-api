import React, { useState, useEffect } from 'react';
import '../styles/_sidebar.scss';

const Sidebar = () => {
  const [routes, setRoutes] = useState();
  const fetchRoutes = async () => {
    const response = await fetch('http://localhost:3001/routes');
    const data = await response.json();
    setRoutes([data]);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  console.log(routes);

  return (
    <div className="sidebar">
      hej
    </div>
  );
};

export default Sidebar;
