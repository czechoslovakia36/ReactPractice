import React from 'react'

function EventHandling() {


    const getInput= (event) => {
        console.log(event.target.name)
        // console.log(event.target.value)
    }

    const addNums = (a,b) => {

        console.log(a+b)

    }
  return (
    <>
    <h1>EventHandling</h1>
    <input placeholder='Add Something...' onChange={getInput} name="input"></input>
    <button onClick={()=>addNums(2,2)}>Event</button>

    </>
  )
}

export default EventHandling