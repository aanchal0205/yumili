import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

// export const API="https://movieapp-aanchal.herokuapp.com";
const API="http://localhost:8000";

function App() {
  return (
    <div className="App">
     <Login/> 
     {/* <RecipeList/> */}
       
    </div>
  );
}

function RecipeList()
{

  // http://localhost:8000/recipes

  const [recipe,setRecipe]=useState([])

  useEffect(()=>
  {
    fetch(`${API}/recipes`)
  .then(data=>data.json())
  .then(recepies=>setRecipe(recepies))

  });

  


  return (
  <div className='recipe-list'>
    {recipe.map((rec)=>(

    <Recipe recipe={rec}/>
    ))}

  
  </div>
  );
  
}


function Login()
{
  const signIn=()=>
  {
    // http://localhost:8000/users/login
    fetch(`${API}/users/login`, {method:'POST',body:JSON.stringify()})
    .then()
  };
  return (
    <div>
      <input placeholder='Enter your name'>
      </input>
      <input type="text" placeholder='Enter password'></input>
      <button onClick={signIn} >Login</button>
    </div>

  );
}

function Recipe({recipe})
{
  return <div className='recipe-container'>
    <img
    className="recipe-picture"
    src={recipe.picture}
    alt="Paneer Butter Masala"/>
    <p className='recepi-name'>{recipe.name}</p>
  </div>
}

export default App;
