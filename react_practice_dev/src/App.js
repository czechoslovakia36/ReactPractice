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
  .then(json => {
    // console.log(json)
    setUsers(json)
  }
  )
  
 

  // console.log(JSON.stringify(response))
 },[])

 const mapData = () => {
  let mappedArray = users.map((user) => user.id *2);
  console.log(mappedArray)
 }


//  Filter the name which starts with "A" or "a"


const filterData = () => {
  let filteredData= users.filter((user) => {
    // return user.name === "Leanne Graham"
    // return user.name === "A"
      // return user.name.toLowerCase().includes("a");

    // This will fetch all the data starting with A


    // OR 
    
    return user.id <= 5

    
    
   
  
  
  })
  setUsers(filteredData)
  console.log(filteredData)
}


  return (
  <div className='App'>
     <div className="card">

    {users.map((user)=> (

      <div className='innerCard' key={user.id}>
      <p>{user.name}</p>  
      <p> {user.email}</p>


      </div>

    ))}


    
     
  </div>
<button onClick={mapData} >Mapped Data</button>
<button onClick={filterData} >Filtered Data Data</button>

    </div>
  );
}

export default App;
