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


  return (
    <div className="sidebar">
      <ul>
        <SidebarItem type="title">
          Movies
        </SidebarItem>
        <li className="sidebar-item sidebar-sublist">
          <ul>
            <li> GET Movies</li>
            <li> POST Movies</li>
            <li> PATCH Movies</li>
            <li> DELETE Movies</li>
          </ul>
        </li>
        <li>


          <SidebarItem type="title">
            TV-shows
          </SidebarItem>
          <ul className="sidebar-item sidebar-sublist">
            <li> GET Shows</li>
            <li> POST Shows</li>
            <li> PATCH Shows</li>
            <li> DELETE Shows</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const SidebarItem = ({ type, children }) =>
// console.log(children);

  (
    <li className={` sidebar-item ${type === 'title' ? 'sidebar-title' : ''}`}>
      <h3>

        {children}
      </h3>
    </li>
  );
export {
  Sidebar,
  SidebarItem,
};
