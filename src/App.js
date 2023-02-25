import React,{useState} from 'react';
import './App.css';

function App() {
  const[NameInput,setValue]=useState("rahul")
  // let  NameInput= "pratikesh";
  const onClickHandler =()=>{
    console.log("hello");
    setValue('pk');

  }
  return(
    <>
    <div className='container'>
      <p>hello{NameInput}</p>
     <button className="btn" onClick={onClickHandler}>click me </button>
    
     </div>
    </>
  )
}


export default App;
