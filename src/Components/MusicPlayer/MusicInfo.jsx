import React from 'react';
import { Link } from 'react-router-dom';

const MusicInfo = ({ name, image, artists, isPlaying, id }) => {
  return (
    <div className='w-1/5 md:w-1/5 flex items-center gap-4'>
      <Link to={`/song/${id}`} className='h-20 aspect-square rounded-full'>
      
        <img 
          src={image} 
          alt={`${name} cover`} 
          className={`h-20 aspect-square rounded-full ${isPlaying ? "animate-spin" : "animate-none"} duration-40`} 
        />
      </Link>
      <div className='w-[calc(100%-5rem)] hidden sm:block text-white'>
        <p className='block line-clamp-1 w-full whitespace-nowrap text-ellipsis overflow-hidden font-bold'>
          {name}
        </p>
        <p className='block line-clamp-1 w-full whitespace-nowrap text-ellipsis overflow-hidden text-sm'>
        {
         <span>{artists}</span>
         } 
        </p>
      </div>
    </div>
  );
}

export default React.memo(MusicInfo);
