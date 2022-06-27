import React from 'react'
import Card from '../shared/Card';
import Button from '../shared/Button';
export default function Adduser() {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id = "username" />
        <label htmlFor="age">Age</label>
        <input type="number" id = "age" />
        <Button type = "submit">Add User</Button>
    </form>
    </Card>
   
  )
}
