import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "Customize your Attire"}) => {
  return (
    <div className='min-w-40 text-black flex items-center justify-between cursor-pointer rounded-full px-4 py-2 bg-zinc-100' >
      <span className='text-sm font-medium mr-1'>{title}</span>
      <IoIosReturnRight /> 
    </div>
  )
}

export default Button
