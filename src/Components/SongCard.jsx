import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, setActiveSong } from '../Redux/feature/PlayerSlice';
import { FaPlay } from "react-icons/fa";
import { FaPause } from 'react-icons/fa6';
import axios from 'axios';
import { Link } from 'react-router-dom';
const SongCard = ({name,artists,img,list,id,i,}) => {
    const {ActiveSong,isPlaying,ActiveList}=useSelector((s)=>s.player)
    const dispatch=useDispatch();
    const handleClick=async()=>{
      if(ActiveSong?.id==id){
      if(isPlaying){
        dispatch(playPause())
        return
      }
      }
        const res=await  axios.get(`https://saavan-api-psi.vercel.app/api/songs/${id}`)
          try{
     const song=res.data.data?.[0]
    dispatch(setActiveSong({list,song,i}))


}
catch(err){
 console.log(err)
}
    }
  return (
    <div  className='w-36 p-3 bg-white/10 rounded-md text-white flex-none' >
    <div  className='w-full bg-black aspect-square  relative group'>
    <img src={img} alt="song poster" className='w-full h-full group-hover:opacity-20'/>
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 aspect-square rounded-full hidden items-center  bg-black justify-center text-2xl group-hover:flex hover:scale-110 transition-all duration-100' onClick={handleClick}>
  {ActiveSong?.id==id && isPlaying ? <FaPause/>: <FaPlay />}
    </div>
    </div>

  <Link className='w-full ' to={"/song/"+id}>
      <p className='text-lg font-semibold w-full text-ellipsis overflow-hidden line-clamp-1  overflow-x-hidden'>{name}</p>
      <p  className='text-white text-sm w-full  text-ellipsis overflow-hidden line-clamp-1  overflow-x-hidden' >
      {Array.isArray(artists) ? artists.map((e,i) =>{ if(i==artists.length-1){ return( <span key={e.id}>{e.name}.</span>)} else{
      return ( <span key={e.id}>{e.name},</span>)}
      }) : artists}
        </p>
       
  </Link>
  </div>
  )
}

export default SongCard