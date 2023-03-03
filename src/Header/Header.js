import React, { Fragment } from "react";
import HeaderCartButton from './HeaderCartButton'
import bgImage from '../assets/baratie.jpg' ;
import classes from './Header.module.css';




 const Header=(props)=>{
    return (
         <Fragment>
          <header className={classes.header}>
             <h2>BARATIE ONBOARD</h2>
            <HeaderCartButton/>
          </header>
          <div className={classes['main-image']}>
            <img src={bgImage} alt="Shop"/>
          </div>
         </Fragment>
    )
 }
 export default Header;