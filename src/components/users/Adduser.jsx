import React,{useState} from 'react'
import Card from '../shared/Card';
import Button from '../shared/Button';
export default function Adduser() {
  const [username,setUsername] = useState('');
  const [age,setAge] = useState('');
  const handleChangename = (e)=>{
    setUsername(e.target.value);
  }
  const handleChangeage = (e)=>{
    setAge(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(username,age)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id = "username" onChange = {handleChangename} />
        <label htmlFor="age">Age</label>
        <input type="number" id = "age" onChange = {handleChangeage} />
        <Button type = "submit">Add User</Button>
    </form>
    </Card>
   
  )
}
