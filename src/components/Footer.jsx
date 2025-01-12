import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl flex gap-32 mx-auto py-10'>
            <div className='basis-1/2'>
            <h1 className='text-[6rem] font-semibold leading-none tracking-tight'>Shreedhar Atelior.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                 <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials.</h4>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item,index)=>(
                        <a href="" key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>
                    ))}
                 </div>
                 <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials.</h4>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item,index)=>(
                        <a href="" key={index} className='block mt-3 tex-zinc-600 capitalize'>{item}</a>
                    ))}
                 </div>
                 <div className='basis-1/2 flex items-end flex-col'>
                    <p className='text-right'>Men's Fashion and others</p>
                    <img src="https://i.ibb.co/x1K4ryz/DALL-E-2025-01-12-16-27-20-A-sophisticated-logo-design-for-Shridhar-Tailors-featuring-elegant-serif.png" className='w-32 mt-10' alt="some image" />
                 </div>
            </div>

        </div>
        <div className='max-w-screen-xl mx-auto  py-10 flex gap-10 text-zinc-600'>
                    
                    {["Privacy Policy","Cookie Policy", "Terms & Conditions"].map((item,index)=>(
                        <a href="" key={index} className='block mt-3 tex-zinc-600 capitalize'>{item}</a>
                    ))}
                 </div>
    </div>
  )
}

export default Footer
