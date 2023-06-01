import React from 'react'

import { useState } from 'react'

function Count() {

  const [count,setCount]= useState(0)

  const [isVisible,setIsVisible]= useState(false)


  const [array,setArray]= useState([
    {
      name:'Nishant',
      age:26
    },
    {
      name:'Uday',
      age:26
    }
  ])


  const [object,setObject]= useState({
    name:'Nishant',
    age:26,
  })

   const increment = ()  => {
    setCount(count+1)
    setIsVisible(!isVisible)
   }


  return (
    <div className='flex just-center'>
      <div >
        <h1>Counter</h1>
        {isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}
        <div > 
          {count}
        <p>Increse the count</p>
        <button onClick={increment}>Increment the Count</button>
        </div>

        </div>

    </div>
  )
}

export default Count