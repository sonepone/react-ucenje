import { Link, useLoaderData } from 'react-router-dom';
import {products} from '../data/dummy_data';
import classes from './Products.module.css';
function Products(){
   const productArray = products;
   // console.log(`Duzina niza bi treba bit: 3. A kolika je stvarno: ${productArray.length}`)
   const loaderData = useLoaderData();
   console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
   console.log(loaderData);
   // console.log(loaderData.responsObject.headers);
   // const staJeOvdje = loaderData.responsObject.headers.get('Content-Type');
   // console.log(staJeOvdje);
   // const aOvdje = loaderData.responsObject.headers['Content-Type'];
   // console.log(aOvdje);
   console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
   //const partition = products.map((element) => <li key={element.id}><Link>{element.title}</Link></li>);
   const jsx_code = <>
     <h1>Our products</h1>
     <ul className={classes.product_list}>
        {products.map((element) => <li key={element.id}><Link to={`/products/${element.id}`}>{element.title} (${element.price})</Link></li>)}
        {/* <li><Link>Proizvod skupa sa cijenom 1</Link></li>
        <li><Link>Proizvod skupa sa cijenom 2</Link></li>
        <li><Link>Proizvod skupa sa cijenom 3</Link></li> */}
     </ul>
   </>
   return jsx_code;
}

export function loader(paramObject) {
   // console.log('Ispucao sam se.');
   // console.log(paramObject);
      
   let myPromise = new Promise(
      (resolve, reject) => {
         let success;
         const response = new Response("Sve je u redu!"
            , {status: 200,
               statusText: "OK",
               headers: {"Content-Type" : "text/plain; charset=utf-8"}
            }
         );
         const responseWrapper = {responsObject_u_wrapperu: response};
         // const response = 
         //      {body: "Sve je u redu!",
         //       status: 200,
         //       statusText: "OK",
         //       //headers: {ContentType : "text/plain; charset=utf-8"}
         //    }

         setTimeout( () => 
             { success = true; 
               console.log("Okinuo timeout.");
               //resolve('Uspjesno setovana varijabla: success');
               resolve(responseWrapper);
             }
             , 300);
     }
   );
   return myPromise;
   //return 'Mozda mi nije dobar Promise';
}


export default Products;