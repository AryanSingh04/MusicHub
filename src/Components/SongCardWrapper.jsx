import React from 'react'
import SongCard from './SongCard'

const SongCardWrapper = ({list}) => {
    
  return (
    <div className='w-screen bg-[rgba(30,29,29,0.5)]'>
    <div className='px-12 pt-4 font-bold text-3xl text-white'>
   <h1>{"Songs"}</h1>
    </div>
<div className='grid items-center place-items-center grid-cols-auto px-8 py-8 gap-16'>
    {list?.map((e,i) => {
      return (
       <SongCard list={list} key={e?.id+i} name={e.title||e.name} id={e.id} artists={e?.more_info?.artistMap?.artists
        ||e?.primaryArtists || e.artists?.all} img={typeof(e.image)=="string" ? e.image :e.image[2].url} i={i} />
      );
    })}
  </div>
  </div>
   
   
  )
}

export default SongCardWrapper