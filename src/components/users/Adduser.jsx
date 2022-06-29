import React,{useState} from 'react'
import Card from '../shared/Card';
import Button from '../shared/Button';
export default function Adduser() {
  const [enteredName,setEnteredname] = useState('');
  const [enteredAge,setEnteredage] = useState('');
  const handleChangename = (e)=>{
    setEnteredname(e.target.value);
  }
  const handleChangeage = (e)=>{
    setEnteredage(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
      return;
    }
    //convert age into number to check if its less than 0
    if(+enteredAge <= -1){
      return;
    }
   console.log(enteredName,enteredAge)
   setEnteredname('')
   setEnteredage('')
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id = "username" value={enteredName} onChange = {handleChangename} />
        <label htmlFor="age">Age</label>
        <input type="number" id = "age" value={enteredAge} onChange = {handleChangeage} />
        <Button type = "submit">Add User</Button>
    </form>
    </Card>
   
  )
}
