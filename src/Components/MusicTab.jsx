import React from 'react'
import { playSong } from '../HomePageApi/backend';
import { setActiveSong } from '../Redux/feature/PlayerSlice';
import { useDispatch, useSelector } from 'react-redux';

const MusicTab = ({el,i,ActiveSong,list,link}) => {

  const dispatch=useDispatch()
   const handleClick=()=>{
     const src=playSong(el?.id);
     console.log(list,el,i)
     dispatch(setActiveSong({list:list,song:el,i}));
     
     console.log(src)
   }

  return (
        <div key={i} className={`w-[95%]  flex h-24  items-center rounded-lg justify-between px-4 py-2  bg-[rgba(255,255,255,0.06)] hover:bg-white/30 ${ActiveSong?.id===el?.id?"bg-[rgba(255,255,255,0.1)]":""}`} onClick={handleClick}>
                <div className='flex gap-4 w-full '>
                   <img src={el?.image} alt="" className='w-16 aspect-square rounded-full' />
                <div className='w-[calc(100%-8rem)]  '>
                  <h1 className='font-bold text-lg w-4/5'>{el?.title}</h1>
                  <div className='w-2/5'>
<p className=' h-fit text-ellipsis overflow-hidden whitespace-nowrap'>{el?.subtitle}</p>
                  </div>
                  
                </div>
                <div className='w-16 h-full self-center flex flex-col items-end justify-between py-2'>
                  {
                    el?.more_info?.duration && <h1 className='text-md'>{Math.floor(el?.more_info.duration/60)}:{Math.floor(el?.more_info.duration%60)<10?"0":""}{Math.floor(el?.more_info.duration%60)}</h1>
                  }
                </div>
                </div>
              </div>
  )
}

export default MusicTab