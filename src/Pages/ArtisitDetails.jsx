import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { artistDetail } from '../HomePageApi/backend';
import MusicTab from '../Components/MusicTab';
import { useSelector } from 'react-redux';
import Carousel from '../Components/Carasouel';
import DetailFallback from '../Components/DetailFallback';

const ArtisitDetails = () => {
    
    const {id:artistId}=useParams();
    const {ActiveSong}=useSelector((s)=>s.player)
    const [loafing,setLoading]=useState(true);
    const [artist,setArtist]=useState(null);
    //

    useEffect(()=>{
    const fetchArtistDetails=async()=>{
        const res=await artistDetail(artistId);
        setArtist(res)
        setLoading(false);
    }
    fetchArtistDetails();
    },[])

    if(loafing){
        return <DetailFallback/>
    }

  return (
      <div className='w-full text-white bg-[rgba(30,29,29,0.5)]'>
     
        <div className='lg:h-[90vh] flex items-center justify-between flex-col lg:flex-row gap-4 md:gap-0'>
          <div className='w-full h-1/2 lg:w-2/5 lg:h-full flex flex-col items-center justify-center gap-4 pt-8 md:pt-0'>
          <img src={artist?.image.replace("150x150","500x500")} alt="" className='w-2/5  lg:w-3/5 ' />     
            <h1  className='w-4/5 lg:w-3/5 font-bold text-white text-center text-2xl lg:text-4xl '>{artist?.name}</h1>       
            <Link to={artist?.perma_url} className='w-40 overflow-hidden bg-white/50 hover:bg-white/30 px-8 py-2 rounded-full' target='blank'>
                <img src="https://meghdhanush.in/wp-content/uploads/2022/08/jio-saavan-1024x308.png" alt="" />  
            </Link>
          </div>
          <div className='w-full lg:w-3/5  h-screen lg:h-full relative overflow-hidden'>
           <div className='py-2  h-[27%] flex flex-col justify-center'>
            <h1 className='font-bold text-white lg:text-3xl my-2 text-2xl'>{artist?.name}</h1>
       {artist?.subtitle && <h1 className='font-semibold text-white lg:text-2xl my-2 text-xl'>{artist?.subtitle}</h1>}
       <h1 className='my-0'> Follower :- {artist?.follower_count}</h1>
           </div> 
           <div className='w-full h-[74%] overflow-scroll no-scrollbar flex flex-col items-center md:items-start  gap-4 pt-2'>
           {
            artist?.topSongs?.map((el,i)=>(
          <MusicTab el={el} key={i} i={i} ActiveSong={ActiveSong} list={artist?.list}/>
           ))}
           </div>
          
          </div>
        </div>
        <div>
     
        <Carousel list={artist?.singles} title={"Singles"}/>
        <Carousel list={artist?.latest_release} title={"Latest Releases"}/>
        </div>
    </div>
  )
}

export default ArtisitDetails