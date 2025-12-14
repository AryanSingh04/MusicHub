import React,{useEffect, useState} from 'react'
import MusicInfo from './MusicInfo';
import MusicControl from './MusicControl';
import MusicFeature from './MusicFeature';
import { prevSong,nextSong,cancelMusic } from '../../Redux/feature/PlayerSlice';
import { useSelector,useDispatch } from 'react-redux';
import { playPause } from '../../Redux/feature/PlayerSlice';
import {motion }from "framer-motion"
import { playSong } from '../../HomePageApi/backend';
import { RxCross2 } from 'react-icons/rx';

const MusicPlayer = ({}) => {
  const dispatch=useDispatch()
  const{ isPlaying,ActiveSong,isActive}=useSelector((state)=>state.player)
  const [loading,setLoading]=useState(false);
  const handlePlayPause=()=>{
    dispatch(playPause(!isPlaying))
  }
  const cancelMusi=()=>{
    dispatch(cancelMusic())
  }
  const handlePrev=()=>{
    dispatch(prevSong())
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
   <MusicInfo image={ActiveSong?.image} artists={ActiveSong?.subtitle} name={ActiveSong?.title}isPlaying={isPlaying} id={ActiveSong?.id}/>
   <MusicControl handleNext={handleNext} nextId="2" prevId="5" handlePrev={handlePrev} audio={playSong(ActiveSong?.id)
} currentTime={currentTime} setCurrentTime={setCurrentTime} duration={duration} setDuration={setDuration} isPlaying={isPlaying} handlePlayPause={handlePlayPause} volume={volume}/>
<div className='hidden lg:block  w-1/5'>
<MusicFeature volume={volume} SetVolume={SetVolume} cancelMusic={cancelMusi}/>

</div>
<RxCross2 className='lg:hidden text-2xl hover:scale-125 transition-all duration-100 absolute top-4 right-10' onClick={cancelMusi}/>
    </motion.div>
  )
}

export default MusicPlayer;