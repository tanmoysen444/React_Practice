import React from 'react'
import { UserConsumer } from '../context/Context';

function ComponentC(props) {
    console.log("props C",props);
  return (
    <div>

        <UserConsumer>
            {/* callback fn userData as argument */}
            {(userData) => {
                return <h1> uname from context : {userData}</h1>;
            }}
        </UserConsumer>


        <h1> uname from props drilling : {props.uname}</h1>
    </div>
  )
}

export default ComponentC