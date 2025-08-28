import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./components/Welcome";
import { lazy } from "react";
import Products, {loader as productsLoader} from "./components/Products";
import ProductDetails, {loader as oneProductLoader} from "./components/ProductDetails";
import NotFoundPage from "./components/NotFoundPage";


// function App_12_1_old()
// {
// const jsx_code = <>
//    <BrowserRouter> 
//      <Layout>
//      </Layout>
//      <Routes>
//         <Route path="/" element={<Welcome />}></Route>
//         <Route path="/products" element={<Products />}></Route>
//         <Route path="/products/:productId" element={<ProductDetails />}></Route>
//      </Routes>
//    </BrowserRouter>
// </>

//    return jsx_code;
// }


function App_12_1()
{
   console.log('*********    App_12_1 ******************************');

// const Products = lazy( () => import('./components/Products')  );
// const ProductDetails = lazy( () => import('./components/ProductDetails'));
// const NotFoundPage = lazy( () => import('./components/NotFoundPage') );
   
const jsx_code = <>
   <BrowserRouter> 
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Welcome />}  index></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:productId" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
     </Routes>
   </BrowserRouter>
</>


const newRoutes = createBrowserRouter(
   createRoutesFromElements(
<>
        <Route path="/" element={<Layout />}>
          <Route element={<Welcome />}  index></Route>
          <Route path="/products" element={<Products />} loader={productsLoader}></Route>
          <Route path="/products/:productId" element={<ProductDetails />}  loader={oneProductLoader}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
</>
   )
);

   const jsx_code2 = <RouterProvider router={newRoutes} />


   //return jsx_code;
   return jsx_code2;
}

export default App_12_1;