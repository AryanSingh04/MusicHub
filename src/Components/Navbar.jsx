import Search from './Search'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
  <div className="w-full h-[10vh] flex items-center px-4 md:px-8 lg:px-12 border-b-[0.5px] border-gray-500">
  {/* Left: logo */}
  <div className="flex-1">
    <NavLink
      to="/"
      className="text-2xl font-semibold text-white font-mono"
    >
      MusicHub
    </NavLink>
  </div>

  {/* Center: search */}
  <div className="flex-1 flex justify-self-center">
    <div className="w-full max-w-md">
      <Search placeholder="Search" />
    </div>
  </div>
</div>

  )
}

export default Navbar