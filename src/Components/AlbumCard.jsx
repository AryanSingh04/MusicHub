import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import axios from 'axios';
import { playPause, setActiveSong } from '../Redux/feature/PlayerSlice';
import { useDispatch, useSelector } from 'react-redux'
import { FaPause } from "react-icons/fa";
import { ImageLazy } from "image-lazy-component"
import { Link } from 'react-router-dom';
const AlbumCard = ({img,name,artists,id}) => {
  const dispatch =useDispatch();
  const {ActiveList,isPlaying}=useSelector((state)=>state.player)
 
  const handleClick= async()=>{
    if(ActiveList?.some((e) => e?.album?.id === id)){console.log("play pause")
      dispatch(playPause(!isPlaying))
      return
    }
  const res= await axios.get("https://saavan-api-psi.vercel.app/api/albums",{
    params:{
      id:id
    }
  })
  try{
  if(res.status==200){
    const data=res.data

    dispatch(setActiveSong({ list: data.data.songs, song: data.data.songs[0] ,i:0}));

  }
else{
  console.log("Error")
}
}
  catch(err){
    console.log("Some Error",err)
  }
  }
  return (
    <div className=' w-36 p-3 bg-white/20 rounded-md  text-white' >
      <div  className=' w-full bg-black aspect-square  relative  group'>
      {/* <img src={img ? img :"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a0/8e/05/a08e0550-bd3f-5d36-9fb0-b2fb1f52d61b/8902894359023_cover.jpg/1200x1200bf-60.jpg"} alt="" className='w-full aspect-square group-hover:opacity-20'/> */}
      <ImageLazy imgUrl={img} className='w-full aspect-square group-hover:opacity-20' loading="lazy" />
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 aspect-square rounded-full hidden items-center bg-black justify-center text-2xl group-hover:flex hover:scale-110 transition-all duration-100' onClick={()=>handleClick()}>
    {ActiveList?.some((e) => e?.album?.id === id) && isPlaying? <FaPause/>:<FaPlay />}
      </div>
      </div>

    <Link className=' w-full' to={"/album/"+id}>
        <p className='text-lg font-semibold w-full text-ellipsis overflow-hidden line-clamp-1'>{name}</p>
        <p  className='text-white text-sm w-full   text-ellipsis overflow-hidden line-clamp-1 ' >
         {
          artists?.map((e,i)=>{
            if(i==artists.length-1){ 
              return (<span key={e.id}>{e.name}.</span>)}
            else{
              return ( <span key={e.id}>{e.name},</span>)}
          })
         } 
          </p>
    </Link>
    </div>
  )
}

export default AlbumCard