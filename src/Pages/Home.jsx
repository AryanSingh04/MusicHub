import React, { useEffect, useState ,Suspense} from 'react'
import HomePageApi from '../HomePageApi'
import AlbumWrapper from '../Components/AlbumWrapper'
import HomeFallback from '../Components/HomeFallback'
import backend, { homePage } from '../HomePageApi/backend'
import ArtistCard from '../Components/ArtistCard'
import CarasouelArtists from '../Components/CarasouelArtists'
const Home =() => {
   const [Data,setData]=useState(null)
   const [loading,setLoading]=useState(true)
   useEffect(()=>{
   const fetchData=async()=>{
    try{
        const result= await homePage();
        setData(result)
        setLoading(false)
    }
    catch(err){
        console.error('Error fetching data:', err);
    }
   }
   fetchData();
  //  homePage();
   
   },[])
  if(loading){
    return <HomeFallback/>
  }
 
 
  return (
    <div className=''>
      <AlbumWrapper list={Data?.["new_trending"]} name={"Trending Albums"} />
      <AlbumWrapper list={Data?.["new_albums"]} name={"New Releases"} />
      <AlbumWrapper list={Data?.["charts"]} name={"Top Charts"}/>
      <CarasouelArtists list={Data?.["artist_recos"]} title={"Some Artirst Stations"}/>
  
  </div>
  )
}

export default Home;