import Card from '../UI/Card';
import classes from './AvailableTeas.module.css';
import TeaItem from './TeaItem/TeaItem';
const DUMMY_TEAS = [
  {
    id: 'a1',
    name: 'Black Soup',
    description: ' enjoy black Soup',
    price: 100,
  },
  {
    id: 'a2',
    name: 'white Soup',
    description: 'enjoy white soup',
    price: 140,
  },
  {
    id: 'a3',
    name: 'green soup',
    description: 'Enjoy green soup with fresh morning and stay healty',
    price: 200,
  },
  {
    id: 'a4',
    name: 'Herbal soup',
    description: 'Herbal soup is good for health, enjoy it every day',
    price: 230,
  },
  {
    id: 'a5',
    name: 'Lemmon soup',
    description: 'Lemmon soup is good for health, enjoy it every day',
    price: 270,
  },
  {
    id: 'a6',
    name: 'Plain Soup',
    description: 'Normal Soup is good for health, enjoy it every day',
    price: 190,
  },
  {
    id: 'a7',
    name: 'hot vegetable soup',
    description: 'Normal Soup is good for health, enjoy it every day',
    price: 40,
  },
];
const AvailableTeas = () => {
  const teaList = DUMMY_TEAS.map((tea) => (
    <TeaItem
      key={tea.id}
      id={tea.id}
      name={tea.name}
      description={tea.description}
      price={tea.price}
    />
  ));

  return (
    <section className={classes.teas}>
      <Card>
        <ul>{teaList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTeas;