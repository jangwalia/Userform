import React from 'react'
import '../../App.css'
import classNames from "classnames";
export default function Card({children}) {

  return (
    <div className= 'Card'>
      {children}
    </div>
  )
}
