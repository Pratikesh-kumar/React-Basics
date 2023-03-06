import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../Store/Cart-Context';


const HeaderCartButton=(props)=>{
   const cartCtx= useContext(CartContext);
   const numberOfItemInCart= cartCtx.items.reduce((currentNum,item) =>{
    return currentNum + item.amount
   },0);
    return(
        <>
        <button onClick={props.onClickHeaderBtn} className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span> view cart</span>
            <span className={classes.badge}>{numberOfItemInCart}</span>
        </button>
        </>
    )
}
export  default HeaderCartButton;