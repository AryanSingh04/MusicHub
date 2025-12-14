
const DetailFallback = () => {
  return (
    <div className='w-screen h-[90vh]  px-8 pt-14 flex '>
        <div className="w-full h-1/2 lg:w-1/3 lg:h-4/5 flex flex-col items-center  gap-4 pt-8 md:pt-0 ">
  <div className='w-4/5 h-4/5 animate-pulse rounded-md bg-slate-800'></div>
  <div className="w-1/2 h-16  animate-pulse rounded-sm bg-slate-500"></div>
        </div>
    <div className="w-full h-1/2 lg:w-2/3 lg:h-full flex flex-col gap-4 pl-8">
    <div className="w-4/5 h-16 animate-pulse bg-slate-500"></div>
    <div className="w-3/5 h-10 animate-pulse bg-slate-500"></div>
    <div className="w-full h-6 animate-pulse bg-slate-500"></div>
    <div className="w-3/5 h-80 animate-pulse bg-slate-500"></div>
    </div>
      
     
    </div>
  )
}

export default DetailFallback