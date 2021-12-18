import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {API_URL} from glo;

function App() {
  return (
    <div className="App">

     <RecipeList/>
       
    </div>
  );
}

function RecipeList()
{

  // http://localhost:8000/recipes

  const [recipe,setRecipe]=useState([])

  useEffect(()=>
  {
    fetch("http://localhost:8000/recipes")
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
