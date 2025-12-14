import { FaPlay } from "react-icons/fa";
import { playPause, setActiveSong } from '../Redux/feature/PlayerSlice';
import { useDispatch, useSelector } from 'react-redux'
import { FaPause } from "react-icons/fa";
import { ImageLazy } from "image-lazy-component"
import { Link } from 'react-router-dom';
import { albumDetail, playSong } from '../HomePageApi/backend';
const AlbumCard = ({img,name,artists,id}) => {
  const dispatch =useDispatch();
  const {isPlaying,ActiveSong}=useSelector((state)=>state.player)
const handleClick=()=>{
  if(ActiveSong?.more_info?.album_id==id){
    dispatch(playPause(!isPlaying))
    return;
  }
  // Fetch album songs and set active song
  const fetchAlbumSongs = async () => {
    try{
      const res= await albumDetail(id);
      if(res){
        const songId=res.albumDetails.list[0]?.id;
        playSong(songId);
        dispatch(setActiveSong({ list: res?.albumDetails?.list, song: res.albumDetails.list[0] ,i:0}));
      }
    }
  
  catch(err){
    console.log("Some Error",err)
  }
}
  fetchAlbumSongs();
  
}

  return (
    <div className=' w-36 p-3 bg-white/20 rounded-md  text-white flex-shrink-0' >
      <div  className=' w-full bg-black aspect-square  relative  group'>
      <ImageLazy imgUrl={img} className='w-full aspect-square group-hover:opacity-20' loading="lazy"  />
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 aspect-square rounded-full hidden items-center bg-black justify-center text-2xl group-hover:flex hover:scale-110 transition-all duration-100' onClick={()=>handleClick()} >
    {ActiveSong?.more_info?.album_id==id && isPlaying? <FaPause/>:<FaPlay />}
      </div>
      </div>

    <Link className=' w-full' to={"/album/"+id}>
        <p className='text-lg font-semibold w-full text-ellipsis overflow-hidden line-clamp-1'>{name}</p>
        <p  className='text-white text-sm w-full   text-ellipsis overflow-hidden line-clamp-1 ' >
         {
          artists?.map((e,i)=>{
            if(i==artists.length-1){ 
              return (<span key={e.id+i}>{e.name}.</span>)}
            else{
              return ( <span key={e.id+i}>{e.name},</span>)}
          })
         } 
          </p>
    </Link>
    </div>
  )
}

export default AlbumCard