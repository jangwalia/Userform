import Adduser from "./components/users/Adduser";
import './App.css';
import { useState } from "react";
import UsersList from "./components/users/UsersList";

function App() {
  const [Availableusers,setAvailableusers] = useState([])
  const  handleSubmituser = (name,age)=>{
    setAvailableusers((prevState)=>{
      return [...prevState,{name,age,id : Math.random().toString()}]
    })
  }
  return (
    <div className="App">
     <Adduser onAdduser={handleSubmituser}/>
     <UsersList users = {Availableusers} />
    </div>
  );
}

export default App;
