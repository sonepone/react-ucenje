import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
   const classNameFunc = ({isActive}) => isActive ? classes.active : undefined;

{/* <NavLink to="/" activeClassName="active"></NavLink> */}

   const jsx_code = <>
      <header className={classes.header}>
          <nav>
              <ul className={classes.links}>
                <li>
                  <NavLink to="/" className={classNameFunc}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" className={classNameFunc}>
                    Orders
                  </NavLink>
                </li>
              </ul>
          </nav>

      </header>
   </>;

   return jsx_code
}

export default MainNavigation;