// useCallBack is a performance optimization hook which is used to memorize the callback function
import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';

function ParentComp() {
    const [age, setage] = useState(10)
    const [salary, setsalary] = useState(10000)

    // increment Age variable will be reassigned with the function only
    // when the age value is changed (which is passed as depenedency)
    // let incrementAge =() =>{
    //     setage(age+1);
    // }
    //useCallBack
    let incrementAge =useCallback(() =>{
        setage(age+1);
    },[age]);
    /* incrementSalary variable will be reassigned with the function only
     when the salary value is changed (which is passed as dependency) */
    //  let incrementSalary =() =>{
    //      setsalary(salary+1000);
    //  }
         let incrementSalary =useCallback(() =>{
         setsalary(salary+1000);
     },[salary]);

  return (
    <div>
        <Count text='Age' count={age} />
        <Button handleClick= {incrementAge}>increment Age</Button>

        <Count text='salary' count={salary} />
        <Button handleClick= {incrementSalary}>increment salary</Button>
    </div>
  )
}

export default ParentComp