import React from 'react'

const Footer = () => {
    return (
        <footer className="h-[31rem] relative bg-[#f8ead0]">
            <div className='bg-[#a9d0da] w-full absolute pt-20 md:px-40 bottom-0 md:bottom-28 z-0 opacity-90 overflow-hidden'>
                <img src='/assets/footer-img.gif' className='absolute h-[120vw] md:h-auto md:scale-[130%] md:right-[7%] md:top-[7%] z-[5] object-cover' />
                <div className='text-[#6B2C2C] text-sm md:text-base font-semibold flex gap-y-12 gap-x-20 px-10 relative z-10 flex-wrap'>
                    <div className='flex flex-col gap-2'>
                        <a>Instagram</a>
                        <a>Facebook</a>
                        <a>X</a>
                    </div>
                    <div className='flex flex-col gap-2 w-max'>
                        <p>NIT Silchar</p>
                        <p>NIT Road, Fakirtilla</p>
                        <p>Silchar, Assam, 788010</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>John Doe</p>
                        <p className='text-[#D54E54] text-xs mb-2'>+91 98975 89326</p>
                        <p>Lisa Williams</p>
                        <p className='text-[#D54E54] text-xs'>+91 95347 56282</p>
                    </div>
                    <div className='relative mb-4'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="peer relative bottom-4 block md:w-[15rem] bg-transparent px-2.5 pb-0.5 pt-5 text-sm text-[#701317] outline-none focus:ring-0 border-b border-[#701317] placeholder:text-[#578B29] placeholder:text-end"
                            placeholder="to @posua.nits.ac.in"
                        />
                        <label
                            htmlFor="email"
                            className="absolute start-2.5 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-[#701317] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                        >
                            Email*
                        </label>
                        <button className='bg-[#578B29] text-[#284013] py-1 px-3 rounded-lg mt-10'>
                            Submit
                        </button>
                    </div>
                </div>
                <img src='/assets/posua.svg' className='w-1/3 relative left-[50%] bottom-[27vh] md:right-[5%] md:left-0 md:bottom-0 z-10' />
                <img src='/assets/gamosa2.png' className='md:hidden block w-full absolute bottom-2 scale-200' />
            </div>
            <div className='hidden md:block w-full h-4 bg-[#dc6b71c6] absolute bottom-24'></div>
            <img src='/assets/gamosa2.png' className='hidden md:block w-full absolute bottom-0' />
        </footer>
    )
}

export default Footer