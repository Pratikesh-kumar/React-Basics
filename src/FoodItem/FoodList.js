import Card from '../UI/Card';
import classes from './FoodList.module.css';


const DUMMY_LIST = [
    {
      id: 'a1',
      name: 'Black Chicken',
      description: 'blended in black sauce',
      price: 300,
    },
    {
      id: 'a2',
      name: 'white chicken',
      description:'blended in white sauce',
      price: 340,
    },
    {
      id: 'a3',
      name: 'chicen curry',
      description: 'with indian spices',
      price: 400,
    },
    {
      id: 'a4',
      name: 'chicken red',
      description: 'blended in red sauces',
      price: 230,
    },
   
    {
      id: 'a5',
      name: 'boiled chicken',
      description: 'made in hot Water',
      price: 230,
    },
  ];
  
const FoodList=()=>{
   const List= DUMMY_LIST.map((food)=><li>{food.name}</li>)
    return(
      <Card>
    <section  className={classes.description}>
        <ul>{List}</ul>
    </section>
    </Card>
    )
}
export default FoodList;