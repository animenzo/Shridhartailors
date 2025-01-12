import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto border-b-[1px] border-zinc-800 justify-between py-2 flex items-center'>
      <div className=' flex items-center'>
      <img className='w-[4vw]' src="https://files.oaiusercontent.com/file-RAHVjYQBDhnsZs82mfjLgM?se=2025-01-12T10%3A57%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De7177ba1-099b-46f9-8d0d-8db3f3cb8db7.webp&sig=T%2BcBSnFpNSBROx5Y02VKnI0UDc2F9no0lUbiJ9juFTU%3D" alt="" />
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
