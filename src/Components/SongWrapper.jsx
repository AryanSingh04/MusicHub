import AlbumCard from './AlbumCard';

const SongWrapper = ({list,name}) => {
  

if(!list){
  return;
}
  return (
    <div className='w-screen '>
      <div className='px-12 pt-4 font-bold text-3xl text-white'>
     <h1>{name}</h1>
      </div>
<div className='grid items-center place-items-center grid-cols-auto px-8 py-8 gap-16'>
      {list.map((e,i) => {
        return (
          <AlbumCard key={e.id} id={e.id} img={e.image} name={e.title} artists={e.more_info?.artistMap?.primary_artists.length > 0 ? e.more_info?.artistMap?.primary_artists :[{name:"Unknown"}]} list={list}/>
        );
      })}
    </div>
    </div>
  );
};

export default SongWrapper;
