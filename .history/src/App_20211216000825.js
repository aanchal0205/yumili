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

  const recipe=
  [{"picture": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
  "name": "Panner butter masala"},
  {"picture": "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
  "name": "Parotta shawarma"},
  {"picture": "https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
  "name": "Chicken tandoori"},
  {"picture": "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
  "name": "Briyani"},
  {"picture": "https://www.kannammacooks.com/wp-content/uploads/baked-gobi-manchurian-recipe-1.jpg",
  "name": "Gobi machurian"}]

  return (
  <div className='recipe-list'>
    {recipe.map((rec)=>(

    <Recipe/>
    ))}

  
  </div>
  );
  
}

function Recipe()
{
  return <div className='recipe-container'>
    <img
    className="recipe-picture"
    src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x375.jpg"
    alt="Paneer Butter Masala"/>
    <p className='recepi-name'>Paneer Butter Masala</p>
  </div>
}

export default App;
