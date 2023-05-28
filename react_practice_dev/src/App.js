import logo from './logo.svg';
import './App.css';

import React, {useEffect,useState} from 'react';




function App() {
 const [users,setUsers]= useState([])

 useEffect( ()=> {

  let response= fetch("https://jsonplaceholder.typicode.com/users")
  // let json = response.json()
  // console.log(json)
  .then(response => response.json())
  .then(json => {console.log(json)
    setUsers(json)
  }
  )
  
 

  // console.log(JSON.stringify(response))
 },[])

  return (
  <div className='App'>
     <div className="card">

    {users.map((user)=> (

      <div className='innerCard'>
      <p>{user.name}</p>  
      <p> {user.email}</p>


      </div>

    ))}


    
     
  </div>

    </div>
  );
}

export default App;
