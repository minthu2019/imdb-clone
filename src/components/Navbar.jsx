import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className=' flex gap-4 lg:gap-8 dark:bg-gray-600 bg-amber-100
     p-3 lg:text-lg justify-center items-center'>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}

export default Navbar
