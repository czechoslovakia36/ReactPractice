import '../App.css'
import {useEffect,useState} from 'react';


import React from 'react'

function Numbers() {


const [numbers,setNumbers]= useState([1,2,3,4,5,6,7,8,9,10])


const mapData= () => {


    let numberLessThan5= numbers.filter(number => {
        return number <=5
    }).map(filtered => {
        return filtered* filtered
    })

    console.log(numberLessThan5)

    setNumbers(numberLessThan5)

    // let square = numberLessThan5.map((number) => {
    //     return number*number
    // })


    // OR 
    /*

    let numberLessThan5 = numbers.filter(number => {
        return number <=5
    }).map(filteredNum => {
        return filteredNum
    })


    */

    // console.log(square )

}


  return (
<>
    <h1>Numbers 

    </h1>
    <div className='card'>
        {
            numbers.map((number) => (

                    <div className='innerCard'>
                            {number}
                    </div>

            ))

        }

        <button onClick={mapData}>Square Number less than 5</button>

    </div>

    </>
  )
}

export default Numbers
