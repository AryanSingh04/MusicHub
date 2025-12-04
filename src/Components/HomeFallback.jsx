import React from 'react';

const HomeFallback = () => {
  
  return (
    <div className='w-screen h-[90vh]  px-8 py-4'>
      <div className='w-1/5 min-w-[180px] h-10 bg-[rgba(255,255,255,0.2)] animate-pulse rounded-md'></div>
      <div className='grid items-center place-items-center grid-cols-auto  gap-16 py-4'>
      {Array(18).fill().map((_, index) => (  
        <div key={index} className='w-32 p-2 h-40 bg-[rgba(255,255,255,0.2)] animate-pulse'>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default HomeFallback;
