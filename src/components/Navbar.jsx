import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto border-b-[1px] border-zinc-800 justify-between py-2 flex items-center'>
      <div className=' flex items-center'>
      <img className='w-[4vw]' src="https://i.ibb.co/x1K4ryz/DALL-E-2025-01-12-16-27-20-A-sophisticated-logo-design-for-Shridhar-Tailors-featuring-elegant-serif.png" alt="" />
      <div className='links flex ml-20 gap-14'>
        {["Home", "Work","Culture","","News"].map((elem,index)=>(
            elem.length === 0 ? (<span key={index} className='w-[2px] h-7 bg-zinc-700'></span>) : (
                <a key={index} className='font-regular text-sm flex items-center gap-1' href="#">
                {index ===1 && (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-200 rounded-full'></span>) } 
                 {elem}</a> 
            )))}
      </div>
      </div>
      <Button></Button>
    </div>
  )
}

export default Navbar
