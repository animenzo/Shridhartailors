import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] py-5 px-10 border-t-[1.2px] flex justify-between border-r-[1.2px] border-b-[1px] border-zinc-600'>
     <img src={val.url} className='h-10' alt="" />
      <span className='font-semibold'>{val.number}</span>

    </div>
  )
}

export default Stripe
