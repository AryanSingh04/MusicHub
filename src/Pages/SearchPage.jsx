import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import SongCardWrapper from '../Components/SongCardWrapper'
import { searchPage } from '../HomePageApi/backend'
import HomeFallback from '../Components/HomeFallback'
const SearchPage = () => {
    const {query}=useParams()
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true);
    const q=query.replace(" ","+")
  useEffect(()=>{
    async function getResults(){
      const res= await searchPage(q) ;
      try{
       
         setData(res);
         setLoading(false)
       
      }
      catch(e){
       console.log("Error",e)
      }
     }
  getResults()
  },[query])

 if(loading){
  return <HomeFallback/>
 }
  
  return (
   <div className='w-full min-h-[90vh] '>
    <SongCardWrapper list={data}/>
   </div>
  )
}

export default SearchPage;