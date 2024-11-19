import React, { useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5'

const Header = ( ) => {
  const [resMenu, setResMenu] = useState(false);
  const [resSearch, setResSearch] = useState(false);
  return (
    <nav className='py-4'>
      <div className="container flex items-center justify-between relative"> 
        <Link to={"/"} className='text-2xl font-semibold text-primary'>
          Movie Library
        </Link>
        <Search  
          resSearch={resSearch}
          setResSearch={setResSearch}
        />
        <div className="inline-flex lg:hidden itmes-center gap-4"> 
          <button className="text-2xl text-white lg:hidden" type='button' onClick={()=>setResSearch(!resSearch)}>
            <IoSearchOutline />
          </button>
          <button className="text-3xl lg:hidden" type='button' onClick={()=>setResMenu(!resMenu)}>
            {
              resMenu? <IoCloseOutline /> : <HiOutlineBars3 />
            } 
          </button>
        </div>
        <div className={`flex flex-col lg:flex-row items-center gap-1 gap-x-4 lg:gap-x-5 absolute lg:static top-10 p-4 lg:p-0 z-50 w-auto right-0 text-left justify-start bg-slate-800 lg:bg-transparent menu ${resMenu ? 'show' : ''}`}>
          <Link to={"/movie-providers"}>Movie Providers</Link>
          <Link to={"/tv-series"}>TV Series</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header