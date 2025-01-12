import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {



  return (
    <div className='w-full py-20 h-[14rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-2'>{val.description}</p>
               <div className='items-center flex gap-5 '>
               {
                val.live && <Button></Button>
                }
                {
                    val.case && <Button title='Set Your Measurement Appointment'></Button>
                }
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Product
