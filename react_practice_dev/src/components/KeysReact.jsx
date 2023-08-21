import React from 'react'

function Keys() {

    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const details= [
        {
            name:"Nishant",
            age:26,
        },
        {
            name:"Shailesh",
            age:29
        },
        {
            name:"Abhishek",
            age:27,
        },
        {
            name:"Mayank",
            age:25
        }

    ]
  return (


    <div>

        <ul>
        {numbers.map((number)=>{
            return <li>{number}</li>
        })}    
        </ul>       
    <ul>
        {details.map((detail)=>{
            return 
            <>
              <li>{detail.name}</li>
              <li>{detail.age}</li>
            </>
          
        })
    }
          
      
    </ul>
    </div>
  )
}

export default Keys