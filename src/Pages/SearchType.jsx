import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SongCardWrapper from '../Components/SongCardWrapper'
import AlbumWrapper from '../Components/AlbumWrapper'
import  HomeFallback from "../Components/HomeFallback"
const SearchType = () => {
    const {type,query}=useParams()
    const q=query.replace(" ","+")
    const [data,setData]=useState(null)
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        async function getResults(){
            setLoading(true)
            const res=await axios.get(`https://saavan-api-psi.vercel.app/api/search/${type}?query=${query}&limit=20`)
            try{
             if(res.status==200){
               setData(res.data.data.results)
               setLoading(false)
             }
            }
            catch(e){
             console.log("Error",e)
            }
           }
        getResults()
    },[type,query])
    if(loading){
        return <HomeFallback/>
    }
   else if(type=="songs"){
        return ( <div className=' min-h-[90vh] bg-[rgba(30,29,29,0.5)]'>
           <SongCardWrapper list={data} name={`Songs for ${query}`}/>
        </div>)
       
    }
   else if(type=="albums"){
   
    return <div className=' min-h-[90vh] bg-[rgba(30,29,29,0.5)]'>
         <AlbumWrapper list={data} name={`Album for ${query}`}/>
      </div>
    
   }
}

export default SearchType