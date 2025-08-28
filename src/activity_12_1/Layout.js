import { NavLink, Outlet } from "react-router-dom";
import classes from './Layout.module.css';

function Layout()
{
    //    <header style={{border: 'solid blue 2px'}}></header>    
    const jsx_code = <>
       <header>
         <nav className={classes.navigator}>
            <ul className={classes.links}>
                <NavLink to="/"  className={ ({isActive}) =>  (isActive) ? classes.active : undefined}>Home</NavLink>
                <NavLink to="/products" className={ ({isActive}) =>  (isActive) ? classes.active : undefined}>Our Products</NavLink>
            </ul>
         </nav>
       </header>
       <main>
          <Outlet />
       </main>
    </>;


return jsx_code;

}

export default Layout;