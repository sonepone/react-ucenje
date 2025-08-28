import { BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';
import OrderDetail from './routes/OrderDetail';

import classes from './App.module.css';
//import Layout from './components/shared/Layout';
import Layout from './activity_12_1/Layout';
import Welcome from './activity_12_1/components/Welcome';
import Products, {loader as productsLoader} from './activity_12_1/components/Products';
import ProductDetails, {loader as oneProductLoader} from './activity_12_1/components/ProductDetails';
import NotFoundPage from './activity_12_1/components/NotFoundPage';

// import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Welcome from "./components/Welcome";
// import { lazy } from "react";
// import Products, {loader as productsLoader} from "./components/Products";
// import ProductDetails, {loader as oneProductLoader} from "./components/ProductDetails";
// import NotFoundPage from "./components/NotFoundPage";




  function App(){
    console.log('********* Renderujem App ******************************');

   const newRoutesFromArray = createBrowserRouter(
      [{
         path: "/",
         element: <Layout />,
         children: [
            { index: true, element: <Welcome /> },
            { path: "products", element: <Products />, loader: productsLoader },
            { path: "products/:productId", element: <ProductDetails />, loader: oneProductLoader },
            { path: "*", element: <NotFoundPage /> }
         ]
      }]
   );

   const jsx_code = <RouterProvider router={newRoutesFromArray} />

   return jsx_code;
    
  }

// function App_old() {
//     return (
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/orders/:id" element={<OrderDetail />} />
//           </Routes>
//         </Layout>
//     </BrowserRouter>
//   );

// }


// function App_old1() {
//   const [counter, setCounter] = useState(0);
//   function incCounterHandler() {
//     setCounter((prevCounter) => prevCounter + 1);
//   }


//   const nekeFunkcija = ({isActive}) => {
//      return (isActive) ? { fontWeight: 'bold'} : undefined

//   };



//   const opetFunkcija = (objekat) => 
//   (objekat.isActive) ? {fontWeight: 'bold'} : undefined;

//   return (
    
//     <BrowserRouter>
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/" style={ ({isActive}) =>  (isActive) ? { fontWeight: 'bold'} : undefined  }>Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/orders" style={opetFunkcija}>All Orders</NavLink>
//           </li>
//           <li>
//             <NavLink to="/borders" style={opetFunkcija}>Borders</NavLink>
//           </li>
//         </ul>
//       </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//       </Routes>
//       <button onClick={incCounterHandler}>Uvecaj brojac - {counter}
//       </button>
//     </BrowserRouter>
//   );
// }

export default App;