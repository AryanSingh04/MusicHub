import React from 'react';

import AlbumCard from './AlbumCard';

const AlbumWrapper = ({list,name}) => {

if(!list){
  return;
}
else{
  return (
    <div className='w-screen bg-[rgba(30,29,29,0.5)] px-4'>
      <div className='px-12 pt-4 font-bold text-3xl text-white'>
     <h1>{name}</h1>
      </div>
<div className='grid items-center place-items-center grid-cols-auto px-8 py-8 md:gap-x-16 gap-x-24 gap-y-6'>
      {list.map((e,i) => {
        if(e.type=="album")
        return (
          <AlbumCard key={i} id={e.id} 
          img={typeof(e.image)=="string" ? e.image :e.image[2].url} name={e.title || e.name} artists={e.more_info?.artistMap?.primary_artists.length > 1 ? e.more_info?.artistMap?.primary_artists :e?.more_info?.artistMap?.artists || [{name:"Unknown"}]} list={list}/>
        );
      })}
    </div>
    </div>
  );}
};

export default AlbumWrapper;
