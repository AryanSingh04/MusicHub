import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Data from "./Components/Data"
import MusicPlayer  from './Components/MusicPlayer'
import HomePageApi from './HomePageApi'
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchPage from './Pages/SearchPage'
import SearchType from './Pages/SearchType'
import SongDetails from './Pages/SongDetails'
import AlbumDetails from './Pages/AlbumDetails'
import Footer from './Components/Footer'
function App() {
  

  return (
  
    <Provider store={store}>
    <div className=' w-screen bg-gradient-to-br from-black to-[#121286]'>
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:query' element={<SearchPage/>}/>
        <Route path='/search/:type/:query' element={<SearchType/>}/>
        <Route path='/song/:id' element={<SongDetails/>}/>
        <Route path='/album/:id' element={<AlbumDetails/>}/>
       </Routes>
       <MusicPlayer/>
      
       </BrowserRouter>    
       </div>
       
    </Provider>
  
       
  )
}

export default App
