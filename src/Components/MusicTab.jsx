import { playSong } from '../HomePageApi/backend';
import { setActiveSong } from '../Redux/feature/PlayerSlice';
import { useDispatch,} from 'react-redux';
import formatTime from '../Hooks/formatTime';
import decode from '../Hooks/decode';
const MusicTab = ({el,i,ActiveSong,list,link}) => {

  const dispatch=useDispatch()
   const handleClick=()=>{
     dispatch(setActiveSong({list:list,song:el,i}));
   }

  return (
        <div key={i} className={`w-[95%] flex h-24  items-center rounded-lg justify-between px-2 py-2   hover:bg-white/30 ${ActiveSong?.id===el?.id ? "bg-[rgba(255,255,255,0.1)]":"bg-[rgba(255,255,255,0.06)]"}`} onClick={handleClick}>
                <div className='flex gap-4 w-full'>
                   <img src={el?.image} alt="" className='w-16 aspect-square rounded-full' />
                <div className='w-[calc(100%-8rem)]'>
                  <div className='w-full'>
<h1 className='font-bold text-lg w-4/5 overflow-hidden text-ellipsis whitespace-nowrap'>{decode({str:el?.title})}</h1>
                  </div>
                  
                  <div className='w-full'>
<p className=' h-fit text-ellipsis overflow-hidden whitespace-nowrap'>{el?.subtitle.split("-")[0]}.</p>
                  </div>
                  
                </div>
                <div className='w-16 h-full self-center flex flex-col items-end justify-between py-2'>
                  <h1 className='text-md'>{el?.more_info?.duration && formatTime(el?.more_info?.duration)}</h1>
                </div>
                </div>
              </div>
  )
}

export default MusicTab