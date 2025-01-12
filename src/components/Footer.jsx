import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl flex gap-32 mx-auto py-10'>
            <div className='basis-1/2'>
            <h1 className='text-[6rem] font-semibold leading-none tracking-tight'>Shridhar Atelior.</h1>
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
                    <img src="https://files.oaiusercontent.com/file-RAHVjYQBDhnsZs82mfjLgM?se=2025-01-12T10%3A57%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De7177ba1-099b-46f9-8d0d-8db3f3cb8db7.webp&sig=T%2BcBSnFpNSBROx5Y02VKnI0UDc2F9no0lUbiJ9juFTU%3D" className='w-32 mt-10' alt="some image" />
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
