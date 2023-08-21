import React from 'react'
import {useState} from 'react';




function Forms() {

    const [objData,setObjData]= useState({})



    const getInputs= (value,name) => {

        let data= {[name]:value};

        
        // const obj= {
 // }
        // obj[name]=value
        // console.log(obj)

       
       
    }



  return (
    <div className='form'>
<input placeholder='Write your name'
name="name"
type="text"
 onChange={(event)=> getInputs(event.target.value,event.target.name)} />
<input
 placeholder='Write your Age'
 name="age"
 type="number"
 onChange={(event)=> getInputs(event.target.value,event.target.name)}
 />
<input 
placeholder='Write your Hobbies' 
name="hobbies"
type="text"
onChange={(event)=> getInputs(event.target.valuse,event.target.name)}
/>
<input 
placeholder='Write a Date'
name="date"
type="date"
onChange={(event)=> getInputs(event.target.value,event.target.name)}
/>
<button>Submit</button>

    </div>
  )
}

export default Forms