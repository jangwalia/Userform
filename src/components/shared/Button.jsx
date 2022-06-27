import React from 'react'

export default function Button({type,onClick,children}) {
  return (
   <button 
    className='main-button'
    type = {type || 'button'}
    onClick = {onClick}
    >
    {children}</button>
  )
}
