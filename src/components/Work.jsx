import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
const Work = () => {
  const [images, setImages] = useState([{
    url:"https://www.bespokesuits.london/public/design/images/FATHER-&-SON-BESPOKE-SUITS.jpg",
    top:"30%",
    left:"40%",
    isActive:false
},
{
    url:"https://assets2.andaazfashion.com/media/catalog/product/p/e/peach-art-silk-men-kurta-pajama-with-jacket-mkpa01926-1.jpg",
    top:"32%",
    left:"44%",
    isActive:false
},
{
    url:"https://i.pinimg.com/originals/ec/85/d1/ec85d1aa08a6194d31542066b2e270dc.jpg",
    top:"28%",
    left:"36%",
    isActive:false
},
{
    url:"https://i.pinimg.com/originals/1d/f4/74/1df474e1980a5fc037291b51c9405d31.jpg",
    top:"21%",
    left:"33%",
    isActive:false
},
{
    url: "https://rajanyas.com/cdn/shop/files/MAK3270.jpg?v=1715423624&width=1946",
    top: "33%",
    left: "40%",
    isActive: false,
  },
  {
    url: "https://i.pinimg.com/236x/a8/76/df/a876df23222df6d8c93a0d7a10aa4f8e.jpg", 
    top: "35%",
    left: "45%",
    isActive: false,
  },

])
const { scrollYProgress } = useScroll()

// useMotionValueEvent(scrollYProgress,"change",(latest)=>{
//   showHideImages(Math.floor(latest*100))
// })

scrollYProgress.on("change",(data)=>{
  function imagesShow(arr){
    setImages(prev => (
      prev.map((item, index)=>(
        arr.indexOf(index) === -1 ? ({...item, isActive: false}) : {...item,isActive:true}
      ))
    ))
  }

  switch(Math.floor(data*100)){
    case 0:
      imagesShow([])
      break;
    case 1:
      imagesShow([0])
      break;
    case 2:
      imagesShow([0, 1])
      break;
    case 3:
      imagesShow([0, 1, 2])
     break;
    case 4:
      imagesShow([0, 1, 2, 3])
      break;
    case 6:
      imagesShow([0, 1, 2, 3, 4])
        break;
    case 8:
      imagesShow([0, 1, 2, 3, 4, 5])
        break;

  }
})




  return (
    <div className='w-full  '>
      <div className='relative max-w-screen-xl mt-10 mx-auto text-center'>
        <h1 className='text-[16vw] leading-none font-medium tracking-tight select-none'>Shreedhar Atelior</h1>
      <div className='w-full absolute top-0  h-full '>
        {
            images.map((elem,index)=>elem.isActive && ( <img className='absolute translate-x-[30%] translate-y-[10%] w-60 rounded-lg' key={index} src={elem.url} alt="my work" style={{top: elem.top, left: elem.left}} /> ))
        }
      </div>

      </div>
    </div>
  )
}

export default Work
