import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-1'>
        <Card width={"basis-1/4"} start={false} para={true}></Card>
        <Card width={"basis-3/4"} start={true} hover="true" para={false}></Card>
        </div>


    </div>
  )
}

export default Cards
