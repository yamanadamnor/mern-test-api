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

  const returnParent = (route) => {
    const trimmed = route.path.split('/');
    trimmed.shift();
    return trimmed[0] ? trimmed[0] : null;
  };

  const newRoutes = routes.map((route) => ({ path: route.path, methods: route.method, parent: returnParent(route) }));

  const makeParents = (arr) => {
    const parents = [];
    arr.forEach((c) => {
      if (parents.includes(c.parent) === false) {
        parents.push(c.parent);
      }
    });
    return parents;
  };


  const makeTree = (parentsArr, arr) => {
    const node = [];


    parentsArr.forEach((singleParent) => {
      node.splice(-1, 0,
        {
          parent: singleParent,
          children: arr.filter((c) => c.parent === singleParent),
        });
    });

    return node;
  };


  const parents = makeParents(newRoutes);
  const tree = makeTree(parents, newRoutes);
  // console.log('parents', parents);
  console.log('tree', tree);


  return (
    <div className="sidebar">
      <ul>

        <li className="sidebar-item sidebar-title">Movies</li>

        <li className="sidebar-item sidebar-sublist">
          <ul>
            <li> GET Movies</li>
            <li> POST Movies</li>
            <li> PATCH Movies</li>
            <li> DELETE Movies</li>
          </ul>
        </li>

        <li className="sidebar-item sidebar-title">TV-Shows</li>

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

export default Sidebar;
