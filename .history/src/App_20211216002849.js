import logo from './logo.svg';
import './App.css';

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
