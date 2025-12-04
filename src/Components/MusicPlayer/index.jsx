import React,{useEffect, useState} from 'react'
import MusicInfo from './MusicInfo';
import MusicControl from './MusicControl';
import MusicFeature from './MusicFeature';
import Music from "../Music";
import { setActiveSong,prevSong,nextSong,cancelMusic } from '../../Redux/feature/PlayerSlice';
import Data from '../Data';
import { useSelector,useDispatch } from 'react-redux';
import { playPause } from '../../Redux/feature/PlayerSlice';
import {motion }from "framer-motion"
import axios from 'axios';

const MusicPlayer = ({}) => {
  const dispatch=useDispatch()
  const{ isPlaying,ActiveSong,ActiveList,isActive}=useSelector((state)=>state.player)
  useEffect(()=>{
   console.log(ActiveSong)
  },[ActiveSong])
  const handlePlayPause=()=>{
    dispatch(playPause(!isPlaying))
  }
  const cancelMusi=()=>{
    dispatch(cancelMusic())
  }
  const handlePrev=()=>{
    dispatch(prevSong())
    // if(!ActiveSong?.downloadUrl){
    //   const a=async()=>{
    //     const res= await  axios.get(`https://saavan-api-psi.vercel.app/api/songs/${ActiveSong?.id}`)
    //   try{
    //  const song=res.data.data?.[0]
    //  dispatch(setActiveSong({list:ActiveList,song,i}))
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    //   }
    //   a()
  // }
}
  
  const handleNext=()=>{
    dispatch(nextSong())
  }
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume,SetVolume]=useState(100)

  useEffect(()=>{
    if(currentTime.toFixed(1) === duration.toFixed(1)){
      dispatch(nextSong())
    }
  },[currentTime])
  return (
    <motion.div className={`w-screen h-24 bg-[rgba(255,255,255,0.25)] backdrop-blur-sm fixed bottom-0 rounded-b-none rounded-[2rem] px-6 md:px-12 flex items-center justify-between z-20`}  
    initial={{ y: 98 }}
      animate={isActive ? { y: 0 } : {y: 98}}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
   <MusicInfo image={ActiveSong?.image?.[2]} artists={ActiveSong?.artists} name={ActiveSong?.name}isPlaying={isPlaying} id={ActiveSong?.id}/>
   <MusicControl handleNext={handleNext} nextId="2" prevId="5" handlePrev={handlePrev} audio={ActiveSong?.
downloadUrl?.[ActiveSong.
  downloadUrl.length -1]?.url
} currentTime={currentTime} setCurrentTime={setCurrentTime} duration={duration} setDuration={setDuration} isPlaying={isPlaying} handlePlayPause={handlePlayPause} volume={volume}/>
<div className='hidden lg:block  w-1/5'>
<MusicFeature volume={volume} SetVolume={SetVolume} cancelMusic={cancelMusi}/>
</div>

    </motion.div>
  )
}

export default MusicPlayer;