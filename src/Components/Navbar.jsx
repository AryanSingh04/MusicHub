import React,{useState} from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const nav=["Trending","New Release","Playlist","Liked Songs"]

    const [isOpen, setOpen] = useState(false)
  return (
    <div className='w-full h-[10vh] flex items-center px-4 md:px-8 lg:px-12  border-b-[.5px] border-[gray] justify-between'>
    <NavLink to={"/"} className=' text-2xl font-semibold text-white font-mono'>YTMusic</NavLink>
    <Search placeholder="Search"/>
    <ul className='w-2/5 lg:w-1/4 hidden md:flex items-center gap-0 justify-between text-white md:text-sm md:font'>
        {/* {nav.map((e)=>{
            return (
                <li>{e}</li>
            )
        })} */}
      </ul>
    <div className='w-max aspect-square bg-slate-400 md:hidden'>
    <Hamburger toggled={isOpen} toggle={setOpen} direction="right"  />
    </div>
    </div>
  )
}

export default Navbar