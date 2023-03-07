import { Fragment } from 'react';
import bgChaiImage from '../assets/baratie.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Baratie@SouP</h1>
        <HeaderCartButton onClickHeaderBtn={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={bgChaiImage} alt='Chai Shop background' />
      </div>
    </Fragment>
  );
};

export default Header;