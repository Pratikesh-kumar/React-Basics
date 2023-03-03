import { Fragment } from "react";
import classes from './ItemsHead.module.css'
const ItemsHead=()=>{
    return(
        <Fragment>
            <section className={classes.section}>
              <h2>Special Sea Food  </h2>
              <p>ഹോം ഡെലിവറി ലഭ്യമാണ്</p>
              </section>
        </Fragment>

    )
}
export  default ItemsHead;