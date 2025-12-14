import { FaPause,FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const ArtistCard = ({name,role,img,id}) => {

  const isPlaying=false;
    const handleClick=()=>{
      
    }
  return (
    <div className='w-60 md:w-40 flex flex-col items-center py-4 flex-none hover:bg-[#343434]'>
        <div className=' w-3/5 lg:w-4/5 bg-black aspect-square rounded-full overflow-hidden group relative'>
        <img src={img} alt="" className='group-hover:opacity-50 w-full aspect-square bg-contain'/>
        <div className=' md:block absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full aspect-square rounded-full hidden items-center bg-[0,0,0,0.1] text-white justify-center text-2xl group-hover:flex hover:scale-110 transition-all duration-100' onClick={()=>handleClick()}>
    { isPlaying? <FaPause/>:<FaPlay />}
      </div>
        </div>
        <Link to={"/artist/"+id} className='w-full text-center mt-2 px-2'>
        <h1 className=' text-white font-semibold  text-md lg:text-lg w-full overflow-hidden line-clamp-1'>{name}</h1>
        <h6 className=' text-[12px] md:text-[14px] text-[rgb(200,200,200)] font-semibold'>{role[0]?.toUpperCase()+role?.slice(1)}</h6>
        </Link>
    </div>
  )
}

export default ArtistCard