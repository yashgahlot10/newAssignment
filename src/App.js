import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Product from './Components/Products';
import Customers from './Components/Customers';
import Promote from './Components/Promote';
import Help from './Components/Help';
import Income from './Components/Income';
import Sidebar from './Components/Sidebar';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="MainContainer">
        <Header />

        <div style={{ flex: 9, backgroundColor: 'rgb(245,246,248)' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Product />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/income" element={<Income />} />
              <Route path="/promote" element={<Promote />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [adminName, setAdminName] = useState('Yash');
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: 'rgb(245,246,248)',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          color: 'rgb(45, 45, 105)',
          marginLeft: '2vw',
          fontSize: '1.6vw',
          fontWeight: 'bolder',
        }}
      >
        Hello {adminName}
      </p>
      <div
        style={{
          marginRight: '2vw',
          backgroundColor: 'white',
          padding: '.4vw ',
          borderRadius: '20px 5px',
        }}
        className="SearchContainer"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          style={{
            backgroundColor: 'white',
            borderRadius: '20px 5px',
            color: 'rgb(45, 45, 105)',
          }}
        />
        <input
          type="text"
          placeholder="Search"
          name="search"
          style={{
            fontSize: '3vh',
            border: 'none',
            backgroundColor: 'white',
            outline: 'none',
            borderRadius: '20px 5px',
            paddingLeft: '1vw',
            width: '15vw',
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13 && !e.shiftKey) {
              e.preventDefault();
              alert('Submitted');
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
