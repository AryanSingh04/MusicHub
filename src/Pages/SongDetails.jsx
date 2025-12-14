import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'
import CarasouelArtists from '../Components/CarasouelArtists'
import { FaPause, FaPlay } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { setActiveSong,playPause } from '../Redux/feature/PlayerSlice'
import decode from '../Hooks/decode'
import DetailFallback from '../Components/DetailFallback'
import { songDetail } from '../HomePageApi/backend'
const SongDetails = () => {
  const dispatch=useDispatch()
  const {ActiveSong,isPlaying}=useSelector((s)=>s.player)
    const {id:songId}=useParams()
    const [Data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const handleClick=()=>{
  if(ActiveSong?.id===songId){
   dispatch(playPause(!isPlaying))
  }
  else{
  dispatch(setActiveSong({list:[Data],song:Data,i:0}))
  }
    }
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    
    useEffect(()=>{
      setData(null)
      const data=async()=>{
        const res= await songDetail(songId);
        try{
        console.log(res)
        setData(res)
        setLoading(false);
       
        }
        catch(err){
          console.log("Some Error",err)
        }
      }
      data()
    },[songId])

    if(loading){
      return <DetailFallback/>
    }

    
  return (
    <div className='w-full text-white bg-[rgba(30,29,29,0.5)]'>
      
        <div className='lg:h-[90vh] flex items-center justify-between flex-col lg:flex-row gap-4 md:gap-0'>
          <div className='w-full h-1/2 lg:w-2/5 lg:h-full flex flex-col items-center justify-center gap-4 pt-8 md:pt-0'>
          <img src={Data?.image.replace("150x150","500x500")} alt="" className='w-2/5  lg:w-3/5 ' />
           
            <h1  className='w-4/5 lg:w-3/5 font-bold text-white text-2xl lg:text-4xl'>{Data?.title}</h1>        
            <Link to={Data?.perma_url
} className='w-40 overflow-hidden bg-[#67D5AE] hover:bg-[#52b391] px-8 py-2 rounded-full' target='blank'>
                <img src="https://meghdhanush.in/wp-content/uploads/2022/08/jio-saavan-1024x308.png" alt="" />
            
            </Link>
          </div>
          <div className='w-full lg:w-3/5  h-screen lg:h-full py-8 relative'>
           <div className='px-12'>
            <h1 className='font-bold text-white lg:text-3xl my-2 text-2xl'>{decode({str:Data?.title})}</h1>
       {Data?.more_info?.album && <h1 className='font-semibold text-white lg:text-2xl my-2 text-xl'>From:- <Link to={"/album/"+Data?.more_info?.album_id} className=' cursor-pointer hover:underline underline-offset-4'>{decode({str:Data?.more_info?.album})}</Link> </h1>}
       <h1 className='my-2'>{Data?.copyright}</h1>
       <div className='w-full  flex items-center justify-between lg:pr-40 my-2'>
        <h1 className='font-lightbold text-white text-lg'>Duration:- {formatTime(Data?.more_info.duration)}</h1>
        <h1 className='font-lightbold text-white text-lg'>Playcount:- {Data?.play_count}</h1>
       </div>
       <div className='w-full  flex items-center justify-between lg:pr-40  my-4'>
        <div className='text-4xl cursor-pointer hover:scale-105 hover:text-[#52b391]' onClick={handleClick}>{ActiveSong?.id===songId && isPlaying ? <FaPause/>:<FaPlay/>}</div>
        {/* <div className=' bg-[#67D5AE] hover:bg-[#52b391] px-8 py-2 rounded-full font-bold cursor-pointer '>Lyrics</div> */}
       </div>
    {/* lyrics */}
           </div>
           
          <div className='w-full absolute bottom-0 min-h-40'>
          <CarasouelArtists list={Data?.more_info.artistMap?.artists} title={"Artists From The Song"}/>
          </div>
         
          </div>
        </div>
        
    </div>
  )
}

export default SongDetails