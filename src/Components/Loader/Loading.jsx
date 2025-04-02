import React from 'react'

export const Loading = () => (
  <section className='h-full w-full relative z-[1000] bg-[#fff8d3]'>
    <video autoPlay loop muted className='object-cover object-left hidden tablet:block' src='https://res.cloudinary.com/dmezugavw/video/upload/v1743017131/Desktop_compressed_nzujyq.mp4' />
    <div className='h-screen w-full absolute top-0 left-0 bg-black flex items-center justify-center tablet:hidden'>
      <img className='w-full object-cover object-top' src='https://res.cloudinary.com/dmezugavw/image/upload/v1743523053/Posua_Loader_Compressed_rezeiv.gif' />
    </div>
  </section>
)
