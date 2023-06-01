import React from 'react'
import Child from './Child'

import { useState } from 'react'

function Parent() {
    const [name,setName]= useState("TangoCharlie123")
    const [age,setAge]= useState(27)
  return (
    <div>
        <hr></hr>
        Parent


<Child name={name} myAge={age} />

{/* Props are dynamic */}
<button onClick={()=> setName("Vivek")}>Change my Name</button>
    </div>
   
  )
}

export default Parent