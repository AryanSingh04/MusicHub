import React, { useRef } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import SongCard from './SongCard';

const Carousel = ({ list,title }) => {
  const containerRef = useRef();

  const move = (dir) => {
    const container = containerRef.current;
    const scrollAmount = dir === "left" 
      ? container.scrollLeft - (container.offsetWidth + 20)
      : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  if(!list){
    return(
      <div className=''>
     <div>
      <div className='px-12 w-60 pt-4 h-10 bg-[rgba(255,255,255,0.2)] animate-pulse rounded-md ml-12'></div>
     </div> 
     <div className='w-full px-8 flex items-center justify-center'>
     <div 
        className='w-[95%] h-full flex  no-scrollbar overflow-x-auto py-4 gap-4 flex-nowrap' 
      >
    {Array(18).fill().map((_, index) => (  
        <div key={index} className='w-32 p-2 h-40 bg-[rgba(255,255,255,0.2)] animate-pulse flex-none'>
        </div>
      ))}
      </div>
     </div>
      </div>
    )
  }
  return (
  
 <div>
  <div className=' w-full whitespace-nowrap'>
  <h2 className='px-4 lg:px-12 pt-4 font-bold text-3xl text-white text-ellipsis overflow-hidden'>{title}</h2>
  </div>

 <div className='relative w-full px-8 flex items-center justify-center '>
      <div 
        className='text-[50px] absolute left-8 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10' 
        onClick={() => move("left")}
      >
        <CiCircleChevLeft />
      </div>
      <div 
        className='w-[95%] h-full flex  no-scrollbar overflow-x-auto py-4 gap-4 flex-nowrap' 
        ref={containerRef}
      >
        {list?.map((e, i) => (
          <SongCard 
            key={e?.id || i} 
            i={i}
            name={e.title || e.name} 
            id={e.id} 
            artists={e?.more_info?.artistMap?.artists || e?.primaryArtists || e.artists?.all} 
            img={typeof(e.image) === "string" ? e.image : e.image[2].url} 
            list={list}
          />
        ))}
      </div>
      <div 
        className='text-[50px] absolute right-8 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10' 
        onClick={() => move("right")}
      >
        <CiCircleChevRight />
      </div>
    </div>
 </div>

   
  );
}

export default Carousel;
