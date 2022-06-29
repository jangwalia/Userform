import React from 'react'
import Card from '../shared/Card'
import '../../App.css'
export default function UsersList({users}) {
  return (
    <Card>
      <ul>
      {users.map(user => 
        <li key = {user.id}>

          {user.name} ({user.age} Years Old) 
        </li>
        )}
    </ul>
  
    </Card>
   
  )
}
