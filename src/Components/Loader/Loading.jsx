import React from 'react'

export const Loading = () => (
    <section className='h-full w-full relative z-[1000]'>
      <img className='h-full w-full object-cover object-left hidden tablet:block' src='https://res.cloudinary.com/dmezugavw/image/upload/v1743180811/Desktop_compressed_ebovmb.gif' />
      <img className='h-full w-full object-cover object-top block tablet:hidden' src='https://res.cloudinary.com/dmezugavw/image/upload/v1743180854/Mobile_compressed_wy9hv3.gif' />
    </section>
  )
