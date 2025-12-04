import React, { useRef } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import ArtistCard from './ArtistCard';
const CarasouelArtists = ({list,title}) => {
    const containerRef = useRef();

    const move = (dir) => {
      console.log({list})
      const container = containerRef.current;
      const scrollAmount = dir === "left" 
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  return (
    <div className='w-full p-2 '>
    <div className='whitespace-nowrap overflow-hidden'>
    <h2 className=' px-4 lg:px-12 pt-4 font-bold text-3xl text-white text-ellipsis overflow-hidden'>{title}</h2>
    </div>
  
   <div className='relative w-full lg:px-8 flex items-center justify-center h-60 '>
        <div 
          className='text-[50px] absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10' 
          onClick={() => move("left")}
        >

          <CiCircleChevLeft />
        </div>
        <div 
          className='w-[100%] h-full flex overflow-x-auto px-8 md:gap-4 no-scrollbar scroll-smooth ' 
          ref={containerRef}
        >
          {list?.map((e, i) => (
          e.name!="Various Artists" &&  <ArtistCard 
            key={i}
            name={e?.title || e?.name}
             id={e?.id}
              img={ e?.image[e?.image.length -1]?.url || e?.image } 
              role={e?.type || e?.subtitle || e?.role}
              />
        
          ))}
        </div>
        <div 
          className='text-[50px] absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10' 
          onClick={() => move("right")}
        >
          <CiCircleChevRight />
        </div>
      </div>
   </div>
  )
}

export default CarasouelArtists