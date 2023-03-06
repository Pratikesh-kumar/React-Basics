import classes from './ListItem.module.css';
import ListForm from './ListForm';
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';




const ListItem=(props)=>{
  const cartCtx = useContext(CartContext)
  
   const addToCartHandler= (amount) => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price: props.price

    })

   }
    // console.log(props)
    return (
    <li className={classes.main}>
        <div >
          <h3>{props.name}</h3> 
          <div className={classes.description}>{props.description}</div>   
          <div className={classes.price}>{props.price}</div>
        </div>
        <div> <ListForm onAddToCart={addToCartHandler}/></div>
    </li>
      
    ) 
}
export default ListItem;