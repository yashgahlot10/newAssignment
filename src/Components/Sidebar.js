import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsersBetweenLines,
  faTag,
  faHouse,
  faPercent,
  faShieldHalved,
  faMoneyBill,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const url = window.location.pathname;
  return (
    <div className="SidebarContainer">
      <div className="headcontainer">
        <FontAwesomeIcon
          icon={faShieldHalved}
          size="lg"
          style={{ color: 'white', padding: '1vh' }}
        />
        <h2>Dashboard</h2>
      </div>
      <div>
        <ul>
          <li className={url === '/' ? 'active' : ''}>
            <a href="/">
              <FontAwesomeIcon
                icon={faHouse}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Dashboard
            </a>
          </li>
          <li className={url === '/products' ? 'active' : ''}>
            <a href="/products">
              <FontAwesomeIcon
                icon={faTag}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Products
            </a>
          </li>
          <li className={url === '/customers' ? 'active' : ''}>
            <a href="/customers">
              <FontAwesomeIcon
                icon={faUsersBetweenLines}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Coustomers
            </a>
          </li>
          <li className={url === '/income' ? 'active' : ''}>
            <a href="/income">
              <FontAwesomeIcon
                icon={faMoneyBill}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Income
            </a>
          </li>
          <li className={url === '/promote' ? 'active' : ''}>
            <a href="/promote">
              <FontAwesomeIcon
                icon={faPercent}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Promote
            </a>
          </li>
          <li className={url === '/help' ? 'active' : ''}>
            <a href="/help">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                size="lg"
                style={{ marginRight: '1vw' }}
              />
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
