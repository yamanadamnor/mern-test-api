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
          <h3>
            Movies
          </h3>
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

const SidebarItem = (props) => {
  // console.log(children);

  return (
    <li className= {` sidebar-item ${ props.type == "title" ? "sidebar-title" : ""` }>
      {props.children}
    </li>
  );
};
export {
  Sidebar,
  SidebarItem,
};
