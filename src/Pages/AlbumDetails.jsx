import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import decode from '../Hooks/decode'
import { Link } from 'react-router-dom'
// import { FaPlay,FaPause } from 'react-icons/fa6'
import CarasouelArtists from '../Components/CarasouelArtists'
import Carasouel from '../Components/Carasouel'
// import { setActiveSong, } from '../Redux/feature/PlayerSlice'
import { useSelector } from 'react-redux'
import { albumDetail } from '../HomePageApi/backend'
import MusicTab from '../Components/MusicTab'
import DetailFallback from '../Components/DetailFallback'
const AlbumDetails = () => {
  const [data,setData]=useState(null)
  const [rec,setRec]=useState(null)
  const [trending,setTrending]=useState(null)
  const [playCount,setPlayCount]=useState(0);
  const [duration,setDuration]=useState(0);
  const [loading,setLoading]=useState(true);
  const {id:albumId}=useParams()
  const {ActiveSong}=useSelector((s)=>s.player)
  useEffect(()=>{
   const fetchAlbum=async()=>{
     const res=await albumDetail(albumId);
     console.log(res)
     window.scrollTo(0,0)
     setData(res.albumDetails)
     setLoading(false);
     setRec(res?.albumRecommendations)
     setTrending(res?.trendingAlbums)
     console.log(res.albumRecommendations)
     let sum=0
     res?.albumDetails?.list.map((el)=>{
      sum+=Number((el.play_count));
     })
     setPlayCount(sum)
      let dur=0
      res?.albumDetails?.list.map((el)=>{
        dur+=Number((el.more_info.duration));
      })
      setDuration(dur)
   }
   fetchAlbum()
  },[albumId])

  if(loading){
    return <DetailFallback/>
  }
  
  return (
    <div className='w-full text-white bg-[rgba(30,29,29,0.5)]'>
     
        <div className='lg:h-[90vh] flex items-center justify-between flex-col lg:flex-row gap-4 md:gap-0'>
          <div className='w-full h-1/2 md:w-2/5 md:h-full flex flex-col items-center justify-center gap-4 pt-8'>
          <img src={data?.image.replace("150x150","500x500")} alt="" className='w-4/5  md:w-3/5 ' />     
            <h1  className='w-4/5 lg:w-3/5 font-bold text-white text-center text-2xl lg:text-4xl '>{decode({str:data?.title})}</h1>  
            <p>BY:- {data?.subtitle}</p>     
            <Link to={data?.perma_url} className='w-40 overflow-hidden bg-white/50 hover:bg-white/30 px-8 py-2 rounded-full' target='blank'>
                <img src="https://meghdhanush.in/wp-content/uploads/2022/08/jio-saavan-1024x308.png" alt="" />  
            </Link>
          </div>
          <div className='w-full lg:w-3/5  h-screen lg:h-full relative '>
           <div className='py-2  h-[27%]'>
            <h1 className='font-bold hidden lg:block text-white lg:text-3xl my-2 text-2xl'>{decode({str:data?.title})}</h1>
       
       <h1 className='my-2'>{decode({str:data?.description})}</h1>
       <div className='w-full pl-8 sm:pl-0 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-around lg:pr-40 my-2'>
        <h1 className='font-lightbold text-white text-lg'>Duration:- {Math.floor(duration/60)}:{duration%60<10?"0":""}{duration%60 }</h1>
        <h1>Song Count:-{data?.list_count}</h1>
        <h1 className='font-lightbold text-white text-lg'>Playcount:- {
          playCount
        }
</h1>
       </div>
      
           </div> 
           <div className='w-full h-[74%] overflow-y-scroll flex flex-col no-scrollbar items-center lg:items-start  gap-4 py-2'>
           {
            data?.list.map((el,i)=>(
          <MusicTab el={el} key={i} i={i} ActiveSong={ActiveSong} list={data?.list}/>
           ))}
           </div>
          {/* <div className='w-full absolute bottom-0 min-h-44'>
          <CarasouelArtists list={data?.artists?.primary} title={"Artists From The Song"}/>
          </div> */}
          </div>
        </div>
        <CarasouelArtists list={data?.more_info?.artistMap?.primary_artists} title={"Artists From The Album"}/>
        <Carasouel list={rec} title={"Album Recommendations"}/>
        <Carasouel list={trending} title={"Album Trending"}/>
    </div>
  )
}

export default AlbumDetails