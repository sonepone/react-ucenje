import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';
import OrderDetail from './routes/OrderDetail';

import classes from './App.module.css';
import Layout from './components/shared/Layout';

function App_old1() {
  const [counter, setCounter] = useState(0);
  function incCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }


  const nekeFunkcija = ({isActive}) => {
     return (isActive) ? { fontWeight: 'bold'} : undefined

  };



  const opetFunkcija = (objekat) => 
  (objekat.isActive) ? {fontWeight: 'bold'} : undefined;

  return (
    
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={ ({isActive}) =>  (isActive) ? { fontWeight: 'bold'} : undefined  }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/orders" style={opetFunkcija}>All Orders</NavLink>
          </li>
          <li>
            <NavLink to="/borders" style={opetFunkcija}>Borders</NavLink>
          </li>
        </ul>
      </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <button onClick={incCounterHandler}>Uvecaj brojac - {counter}
      </button>
    </BrowserRouter>
  );
}

function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;