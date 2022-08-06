import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    let incrementOne = () =>{
        setcounterOne(counterOne+1)
    }

    let incrementTwo = () =>{
        setcounterTwo(counterTwo+1)
    }

    let isEven = useMemo(() =>{
        console.log("isEven executed");
        let i =0;
        while(i < 2000000000) i++;
        return counterOne %2 ===0;
    },[counterOne]);
    //isEven();
  return (
    <div>
        {isEven?"even":"odd"}
        <button onClick={incrementOne}>counter 1 : {counterOne}</button>
        <button onClick={incrementTwo}>counter 2 : {counterTwo}</button>
    </div>
  )
}

export default Counter