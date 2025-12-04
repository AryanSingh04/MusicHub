import React from 'react'
import { Link } from 'react-router-dom'

const MoreWrapper = ({Comp,url}) => {
  return (
   <div className='relative w-full bg-black mt-2'>
    <Link className=' absolute right-14 top-4 text-white text-sm hover:underline hover:cursor-pointer' to={url}>See More</Link>
    <Comp/>
   </div>
  )
}

export default MoreWrapper