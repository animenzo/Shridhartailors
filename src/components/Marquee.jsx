import { motion } from 'framer-motion'
import React from 'react'
const Marquee = ({imagesurl, direction}) => {
  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div initial={{x:direction === 'left'?'0':'-100%'}} animate={{x:direction === 'left'?'-100%':'0'}} transition={{ease:"linear", duration:20, repeat: Infinity}} className='flex gap-32 w-[100%] mb-20 mt-20 h-[5vh] shrink-0'>
      {
        imagesurl.map((url,index) => (<img src={url} key={index} className='' alt="" />) )
        
      }
      </motion.div>
      <motion.div initial={{x:direction === 'left'?'0':'-100%'}} animate={{x:direction === 'left'?'-100%':'0'}} transition={{ease:"linear", duration:20, repeat: Infinity}} className='flex gap-40 w-20 h-10 shrink-0'>
      {
        imagesurl.map((url,index) => (<img src={url} key={index} className='' alt="" />) )
        
      }
      </motion.div>
  
    </div>
  )
}

export default Marquee
