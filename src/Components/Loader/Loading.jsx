import React from 'react'

export const Loading = () => (
    <section className='h-full w-full relative z-[1000]'>
      <video autoPlay loop muted className='h-full w-full object-cover object-left hidden tablet:block' src='https://res.cloudinary.com/dmezugavw/video/upload/v1743017131/Desktop_compressed_nzujyq.mp4' />
      <video autoPlay loop muted className='h-full w-full object-cover object-top block tablet:hidden' src='https://res.cloudinary.com/dmezugavw/video/upload/v1743017119/Mobile_compressed_w5msxy.mp4' />
    </section>
  )
