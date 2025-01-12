import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width,start, para,hover="false"}) => {





  return (

    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={`${width}  bg-zinc-800 p-5 rounded-xl flex flex-col min-h-[30rem] justify-between`}>
      
      <div className='w-full'>
      <div className='w-full flex justify-between items-center'>
        <h3>Men's Fashion</h3>
        <IoIosArrowRoundForward />
      </div>
      <h1 className='text-3xl font-medium mt-5'></h1>
      </div>
      <div className='down w-full mt-60'>
       {
        start && (
            <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Tailor your Dress</h1>
            <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact us</button>
            </> ) 
       }
       {
        para && (
            <>
            <p className='text-sm text-zinc-500 font-medium mt-5'>Lorem ipsum dolor sit amet consectetur.</p>
            </>
        )
       }
        
      </div>
    </motion.div>
  )
}

export default Card
