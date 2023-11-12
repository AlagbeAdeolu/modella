import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Hero = () => {
  return (
    <div className='flex items-center  justify-center'>
        <div className='flex flex-col gap-6  left-40 '>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
        </div>
        <div className=' top-[28%] left-[28%] w-[200px]'>
            <h3 className='text-white text-2xl '>Alek Yei</h3>
            <p className='text-lg text-[#D8C8C1]'>Vogue 2022 Spring chic collection</p>
        </div>
     <div className='inline-block rounded-t-[140px] rounded-b-[70px]  bg-[#BE8A74] '>
        <img src='/assets/model.jpg' className='h-[400px] rounded-t-[140px] rounded-b-[70px]  w-auto' alt='Model' />
     </div>
     <div className='ml-10'>
        <p className='text-lg text-[#D8C8C1]'>Face of Modella 2022</p>
     </div>
    </div>
  )
}

export default Hero
