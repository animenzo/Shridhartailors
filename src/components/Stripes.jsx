import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    var data = [
        {
            url:"https://i.ibb.co/Xpq04Jq/Screenshot-505-removebg-preview.png" ,
            number:1
        },
        {
            url:"https://i.ibb.co/gvt1cR6/Screenshot-506-removebg-preview.png",
            number:2
        },
        {
            url:"https://i.ibb.co/QKpftF7/Screenshot-508-removebg-preview.png" ,
            number:3
        },
        {
            url:"https://i.ibb.co/Hz5K3b1/Screenshot-509-removebg-preview.png" ,
            number:4
        },
        {
            url:"https://i.ibb.co/V3TDR2X/Screenshot-510-removebg-preview.png" ,
            number:5
        },
        {
            url:"https://i.ibb.co/8r9X8d4/Screenshot-511-removebg-preview.png" ,
            number:6
        },
    ]
  return (
    <div className='flex items-center mt-20'>
           

      {
        data.map((elem,index)=>(
            <Stripe val={elem} key={index} ></Stripe>
        ))
      }

    </div>
  )
}

export default Stripes
