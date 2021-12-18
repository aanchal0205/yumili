import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';

// export const API="https://movieapp-aanchal.herokuapp.com";
const API="http://localhost:8000";

function App() {
  const token=localStorage.getItem("token")
  return (
    <div className="App">
     <Login/> 
     {token?<RecipeList/>:""}
       
    </div>
  );
}

function RecipeList()
{

  // http://localhost:8000/recipes

  const [recipe,setRecipe]=useState([])

  useEffect(()=>
  {
    fetch(`${API}/recipes`,{method: "GET",headers:{"x-auth-token": localStorage.getItem("token")}})
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
  const{handleSubmit,values,handleChange,handleBlur,errors,touched}=
  useFormik({
    initialValues:{username:"Aanchal",password:"password@123"},
    onSubmit:(user)=>
    {
      console.log("Sending server values",user);
      signIn(user);
    },
  });
  const signIn=(user)=>
  {
    // http://localhost:8000/users/login
    fetch(`${API}/users/login`, {
      method:"POST",
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify(user),
       })
    .then(data=>data.json())
    .then(data=>localStorage.setItem("token",data.token))
    
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input placeholder='Enter your name'
      id="username"
      name="username"
      value={values.username}
      onChange={handleChange}
      onBlur={handleBlur}>

      </input>
      <input type="text" placeholder='Enter password'
      id="password"
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}></input>
      <button type="submit" >Login</button>
    </form>

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
