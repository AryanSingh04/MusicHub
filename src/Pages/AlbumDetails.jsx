import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import decode from '../Hooks/decode'
import { Link } from 'react-router-dom'
// import { FaPlay,FaPause } from 'react-icons/fa6'
import CarasouelArtists from '../Components/CarasouelArtists'
import Carasouel from '../Components/Carasouel'
// import { setActiveSong, } from '../Redux/feature/PlayerSlice'
import { useSelector,useDispatch } from 'react-redux'
import { albumDetail } from '../HomePageApi/backend'
const AlbumDetails = () => {
  const [data,setData]=useState(null)
  const [rec,setRec]=useState(null)
  const [trending,setTrending]=useState(null)
  const [playCount,setPlayCount]=useState(0);
  const [duration,setDuration]=useState(0);
  const dispatch=useDispatch()
  const {id:albumId}=useParams()
  const {ActiveList,ActiveSong}=useSelector((s)=>s.player)
  useEffect(()=>{
   const fetchAlbum=async()=>{
     const res=await albumDetail(albumId);
     console.log(res)
     setData(res.albumDetails)
     setRec(res?.albumRecommendations)
     setTrending(res?.trendingAlbums)
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
  
  useEffect(()=>{

  },[data])
  return (
    <div className='w-full text-white bg-[rgba(30,29,29,0.5)]'>
        <div className='lg:h-[90vh] flex items-center justify-between flex-col lg:flex-row gap-4 md:gap-0'>
          <div className='w-full h-1/2 lg:w-2/5 lg:h-full flex flex-col items-center justify-center gap-4 pt-8 md:pt-0'>
          <img src={data?.image.replace("150x150","500x500")} alt="" className='w-2/5  lg:w-3/5 ' />     
            <h1  className='w-4/5 lg:w-3/5 font-bold text-white text-center text-2xl lg:text-4xl '>{decode({str:data?.title})}</h1>  
            <p>BY:- {data?.subtitle}</p>     
            <Link to={data?.perma_url} className='w-40 overflow-hidden bg-white/50 hover:bg-white/30 px-8 py-2 rounded-full' target='blank'>
                <img src="https://meghdhanush.in/wp-content/uploads/2022/08/jio-saavan-1024x308.png" alt="" />  
            </Link>
          </div>
          <div className='w-full lg:w-3/5  h-screen lg:h-full relative '>
           <div className='py-2  h-[27%]'>
            <h1 className='font-bold text-white lg:text-3xl my-2 text-2xl'>{decode({str:data?.title})}</h1>
       {data?.subtitle && <h1 className='font-semibold text-white lg:text-2xl my-2 text-xl'>From:- <Link to={"/album/"+data?.album?.id} className=' cursor-pointer hover:underline underline-offset-4'>{data?.subtitle}</Link> </h1>}
       <h1 className='my-2'>{decode({str:data?.description})}</h1>
       <div className='w-full   flex items-center justify-between lg:pr-40 my-2'>
        <h1 className='font-lightbold text-white text-lg'>Duration:- {Math.floor(duration/60)}:{duration%60<10?"0":""}{duration%60 }</h1>
        <h1>Song Count:-{data?.list_count}</h1>
        <h1 className='font-lightbold text-white text-lg'>Playcount:- {
          playCount
        }
</h1>
       </div>
      
           </div> 
           <div className='w-full h-[74%] overflow-y-scroll flex flex-col items-center md:items-start  gap-4 pt-2'>
           {
            data?.list.map((el,i)=>(
              <div key={i} className={`w-[95%]  flex h-24  items-center rounded-lg justify-between px-4 py-2  bg-[rgba(255,255,255,0.06)] hover:bg-white/30 ${ActiveSong?.id===el.id?"bg-[rgba(255,255,255,0.1)]":""}`} >
                <div className='flex gap-4 w-full '>
                   <img src={el?.image} alt="" className='w-16 aspect-square rounded-full' />
                <div className='w-[calc(100%-8rem)]  '>
                  <h1 className='font-bold text-lg w-4/5'>{el?.title}</h1>
                  <div className='w-2/5'>
<p className=' h-fit text-ellipsis overflow-hidden whitespace-nowrap'>{el.subtitle}</p>
                  </div>
                  
                </div>
                <div className='w-16 h-full self-center flex flex-col items-end justify-between py-2'>
                  {
                    el.more_info.duration && <h1 className='text-md'>{Math.floor(el.more_info.duration/60)}:{Math.floor(el.more_info.duration%60)<10?"0":""}{Math.floor(el.more_info.duration%60)}</h1>
                  }
                </div>
                </div>
              </div>
           ))}
           </div>
          {/* <div className='w-full absolute bottom-0 min-h-44'>
          <CarasouelArtists list={data?.artists?.primary} title={"Artists From The Song"}/>
          </div> */}
          </div>
        </div>
        <CarasouelArtists list={data?.more_info?.artistMap?.primary_artists} title={"Artists From The Album"}/>
        <Carasouel list={rec} title={"Song Recommendations"}/>
        <Carasouel list={trending} title={"Songs Trending"}/>
    </div>
  )
}

export default AlbumDetails