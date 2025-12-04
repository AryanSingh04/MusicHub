import React, { useState } from 'react'
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
const MusicFeature = ({volume,SetVolume,cancelMusic}) => {
  
    const handleMute=()=>{
        if(volume){
            SetVolume(0)
            return
        }
        SetVolume(50)
    }
    const handleVolume=(e)=>{
        SetVolume(e.target.value)
    }
  return (
    <div className='w-[10%] md:flex flex-col md:w-full h-24 justify-around'>
        <div className='w-full flex flex-col md:flex-row  h-1/3 items-center'>
       <div className='px-2 text-lg flex  items-center ' onClick={handleMute}>{volume>0 ? volume>50 ? <FaVolumeUp/>:<FaVolumeDown/> : <FaVolumeMute/>}</div>
       <input type="range" max={100} min={0} value={volume} onChange={(e)=>handleVolume(e)} className='w-4/5  rotate-[90deg] md:rotate-0' />
        </div>
        <div className='w-full h-1/3  flex items-center justify-around text-2xl '>
            <IoIosHeartEmpty/>
            <div >
            <RxCross2  onClick={cancelMusic}/>
            </div>
            {/* <div className=' hover:scale-[1.25]'> 
            <MdFullscreen/>
            </div> */}
     
        </div>
    </div>
  )
}

export default MusicFeature