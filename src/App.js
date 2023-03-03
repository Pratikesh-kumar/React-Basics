import React from 'react';
import './App.css';
import Header from './Header/Header';
import Items from './FoodItem/Items';

function App() {
  return(
  <div>
   <Header/>
       <main>
        <Items/>
        </main>
   </div>
  )
}


export default App;
