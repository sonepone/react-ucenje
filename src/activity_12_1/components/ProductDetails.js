import { useNavigate, useParams } from 'react-router-dom';
import {products} from '../data/dummy_data';
function ProductDetails() {
   //const params = useParams();
   const {productId} = useParams();
   const navigate = useNavigate();

   const productDetails = products.find( (element) => element.id == productId );
   let jsx_code = <>
      {productDetails &&  <div>
        <h3>{productDetails.title}</h3>
        <h2>{`$${productDetails.price}`}</h2>
        <p>{productDetails.description}</p>
      </div>}
   </>
   if (productDetails == undefined)
   {
      jsx_code = <h3>Product "{productId}" is not found.</h3>
   }


   return jsx_code;

}


export default ProductDetails;

export function loader({params})
{
   console.log('*********    ProductDetails-loader ******************************');
   console.log(params);
   console.log(`Spare me the gorey details >${params['productId']}<`);
   console.log('*****************************************************************');   
   return params.id;
}