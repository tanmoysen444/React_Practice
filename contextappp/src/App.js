import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/Context';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentD from './components/ComponentD';
import { LoginProvider } from './context/LoginContext';

function App() {
  const [uname, setuname] = useState("Google");

  let getDataFromComponentD = (data) => {
    console.log("data in parent" , data);
  };

  const [loginData, setloginData] = useState({
    username: "Mukesh",
    // aslo getDataFromComponentD is enough if the key & value are same
    getDataFromComponentD:getDataFromComponentD,
  });

  
  return (
    <div className="App">
      {/* context api way of sending props in order to over come props drilling
      <UserProvider value={uname}> */}

        {/* normal sending of props or Props Drilling */}
       {/* <ComponentA uname={uname} />
       </UserProvider> */}

       {/* on click of a button uname will change to flipkart */}
       {/* <button 
       onClick={()=>{
         setuname("Flipkart");
       }}
       >

         Change name
       </button> */}

       <LoginProvider value ={loginData}>
         <ComponentD />
       </LoginProvider>

    </div>
  );
}

export default App;
