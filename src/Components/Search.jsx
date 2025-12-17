import {useState} from 'react'
import { MdOutlineClear } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const Search = ({placeholder}) => {
    const navigate=useNavigate()
    const [query,Setquery] =useState("")
    const handleChange=(e)=>{
        Setquery(e.target.value)
    }
    const handleSubmit=(e)=>{
      if(e.key=="Enter"){
      navigate("/search/"+query)
      Setquery("")
      e.target.blur();
    }
    }
  return (
    <label htmlFor="input" className="search-bar  md:w-2/5 h-[50%] rounded-full flex items-center px-4 py-4 justify-between text-white outline outline-2">
      <div className='flex gap-2 items-center'>
      <CiSearch />
        <input type="text" id='input' value={query} placeholder={placeholder} onChange={(e)=>handleChange(e)} className=' bg-transparent focus:outline-none w-3/5 active:bg-transparent focus:bg-transparent appearance-none'  onKeyDown={handleSubmit}/>
      </div>
      
      {query!=""&& <div className='w-8 aspect-square flex items-center justify-center cursor-pointer'>
       <MdOutlineClear size={30} onClick={()=>Setquery("")}/>
       </div>}
      
       </label>
  )
}

export default Search