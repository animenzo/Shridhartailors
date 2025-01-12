import React, { useRef, useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

import one from '../assets/1.webm'
import two from '../assets/2.webm'
import four from '../assets/5.webm'
import three from '../assets/4.webm'

const Products = () => {
    var products = [
        {
            title:"Formals",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto labore quo doloribus adipisci accusamus velit quia ea tempore rerum.",
            live:true,
            case:false,
        },
        {
            title:"Wool",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto labore quo doloribus adipisci accusamus velit quia ea tempore rerum.",
            live:true,
            case:false,
        },
        {
            title:"Traditionals",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto labore quo doloribus adipisci accusamus velit quia ea tempore rerum.",
            live:true,
            case:true,
        },
        {
            title:"Designer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto labore quo doloribus adipisci accusamus velit quia ea tempore rerum.",
            live:true,
            case:true,
        },
     
    ]

   
    const [pos,setPos] =  useState(0)
    const mover = (val)=>{
       
            setPos(val*14)
      
    }


  return (
    <div className='mt-40 relative '>
        {
            products.map((val, index) => (
                <Product key={index} val={val} mover={mover} count={index}></Product>
            ))
        }
        <div className='w-full h-full absolute top-0 pointer-events-none '>
            <motion.div initial={{y:pos, x:"-50%"}} 
            animate={{y:pos+`rem`}}
            className='w-[25rem] window  absolute left-[40%]  overflow-hidden rounded-lg h-[14rem] '>
                <motion.div animate={{y: -pos+`rem`}} 
                transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}}
                className='w-full bg-zinc-400  h-full'>
                   
                   
                            <video autoPlay muted loop>
                                <source src={four} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        
                    
                </motion.div>
                <motion.div animate={{y: -pos+`rem`}}  
                 transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}} className='w-full bg-zinc-500  h-full'>
                     <video autoPlay muted loop>
                                <source src={two} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                 </motion.div>
                <motion.div animate={{y: -pos+`rem`}}  
                 transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}}
                className='w-full bg-zinc-600  h-full'>
                     <video autoPlay muted loop>
                                <source src={three} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                </motion.div>
                <motion.div  transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}} animate={{y: -pos+`rem`}}  className='w-full bg-zinc-700  h-full'>
                <video autoPlay muted loop>
                                <source src={one} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                </motion.div>
            
            </motion.div>
        </div>
    </div>
  )
}

export default Products
