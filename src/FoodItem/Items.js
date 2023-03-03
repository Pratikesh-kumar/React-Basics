import { Fragment } from "react";
import ItemsHead from "./ItemsHead";
import FoodList from "./FoodList";



const Items=()=>{
    return(
        <Fragment>
         <ItemsHead/>
         <FoodList/>
        </Fragment>
    )
}
export default Items;