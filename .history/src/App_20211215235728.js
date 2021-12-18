import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

     <Recipe/>
       
    </div>
  );
}

function RecipeList()
{
  return
  <Recipe/>
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
