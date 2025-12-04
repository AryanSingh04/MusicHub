import React, { useEffect, useRef, useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import formatTime from '../../Hooks/formatTime';
const MusicControl = ({ audio,handleNext,handlePrev,nextId,prevId,isPlaying,handlePlayPause,duration,setDuration,currentTime,setCurrentTime,volume }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl) {
      const setAudioData = () => {
        setDuration(audioEl.duration);
        setCurrentTime(audioEl.currentTime);
      };
      const setAudioTime = () => setCurrentTime(audioEl.currentTime);
      audioEl.addEventListener('loadedmetadata', setAudioData);
      audioEl.addEventListener('timeupdate', setAudioTime);
      return () => {
        audioEl.removeEventListener('loadedmetadata', setAudioData);
        audioEl.removeEventListener('timeupdate', setAudioTime);
      };
    }
    
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current.play();
    } else {
      audioRef?.current.pause();
    }
  }, [isPlaying,audio]);
  useEffect(()=>{
  if(audioRef){
    audioRef.current.volume=volume/100
  }
  },[volume])


 


  const handleRangeChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(Number(e.target.value ));
  };

  return (
    <div className='w-[75%]  md:w-[40%] h-24 py-4 flex flex-col gap-4'>
      <audio src={audio} ref={audioRef}></audio>
      <div className='flex items-center justify-center gap-8'>
        <div className={`${prevId ? "text-white" : "text-gray-500"} bg-black p-2 rounded-full cursor-pointer`} onClick={handlePrev}>
          <GrPrevious />
        </div>
        <div className='' onClick={handlePlayPause}>
          {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
        </div>
        <div className={`${nextId ? "text-white" : "text-gray-500"} bg-black p-2 rounded-full cursor-pointer`} onClick={handleNext}>
          <GrNext />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          className=' w-[70%] md:w-[80%] slider'
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleRangeChange}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};
export default MusicControl;
