import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='flex justify-between my-4'>
      <h2 className='text-4xl text-[#C38F79]'>Modella</h2>
      <div className='border border-[#C38F79] rounded-full p-2 '>
        <MenuIcon />
      </div>
    </div>
  )
}

export default Navbar
