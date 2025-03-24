import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    return (
        <section className='flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-[#FFE8A9] via-[#FEFEFE] to-[#FEFEFE]'>
            <div className='flex w-1/2 items-center justify-center'>
                <h1 className='text-9xl md:text-[20rem] text-red-500'>4</h1>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/japiError_nlug4m.webp' alt='404' className='w-[25vw] md:w-1/3' />
                <h1 className='text-9xl md:text-[20rem] text-red-500'>4</h1>
            </div>
            <h1 className='text-lg mt-20 md:text-2xl text-red-500'>We don’t know how you made it here, but</h1>
            <button
                onClick={() => navigate('/')}
                className='bg-red-500 text-white text-lg md:text-2xl px-6 py-2 rounded-3xl mt-4 cursor-pointer'>
                Let’s get you back home
            </button>
        </section>
    )
}

export default Error