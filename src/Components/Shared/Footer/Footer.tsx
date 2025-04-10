import React from 'react'

const Footer = () => {
    return (
        <footer className="relative font-gotham">
            <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742786690/footer-img_oqvtil.gif' className='absolute h-full z-5 opacity-80 object-[55%_0%] md:object-center object-cover' />
            <div className=' w-full h-full relative pt-20 pl-18 pr-14 mobile:pl-32 mobile:pr-24 tablet:px-28 laptop:px-44 z-10 opacity-90 tablet:overflow-hidden'>
                <div className='text-[#6B2C2C] text-xs mobile:text-sm md:text-base font-semibold flex gap-y-12 gap-x-[10vw] md:gap-x-16 tablet:gap-x-18 relative z-10 flex-wrap pb-5'>
                    <div className='flex flex-col gap-2'>
                        <a href='https://www.instagram.com/posua_nits/'>Instagram</a>
                        <a href='https://www.facebook.com/nitsposua'>Facebook</a>
                        {/* <a href='/'>X</a> */}
                    </div>
                    <div className='flex flex-col gap-2 w-max'>
                        <p>NIT Silchar</p>
                        <p>NIT Road, Fakirtilla</p>
                        <p>Silchar, Assam, 788010</p>
                    </div>
                    <div className='flex flex-col text-sm'>
                        <p>Gyan</p>
                        <p className='text-[#D54E54] text-xs mb-1'>+916002934521</p>
                        <p>Pragyan Atri</p>
                        <p className='text-[#D54E54] text-xs mb-1'>+916000392510</p>
                        <p>Padmanav Kakati</p>
                        <p className='text-[#D54E54] text-xs'>+919864745775</p>
                    </div>
                    <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742786301/%E0%A6%AA%E0%A6%9B%E0%A7%8B%E0%A7%B1%E0%A6%BE-1_chgze6.webp' className='w-[25vw] mobile:w-[30vw] object-contain block tablet:hidden h-auto relative z-10' />
                    <div className='relative w-full top-12 tablet:top-0 tablet:w-max font-gothamMad tablet:font-gotham flex flex-col gap-1 items-center justify-center text-white drop-shadow-[0.5px_1px_0.5px_rgba(0,0,0)] tablet:drop-shadow-none tablet:text-[#701317]'>
                        <p>Mail</p>
                        <div className='tablet:bg-[#701317] h-[0.8px] tablet:h-[1.5px] w-full bg-white'/>
                        <a href='mailto:posua@nits.ac.in'>posua@nits.ac.in</a>
                        {/* <input
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
                        </button> */}
                    </div>
                </div>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742786301/%E0%A6%AA%E0%A6%9B%E0%A7%8B%E0%A7%B1%E0%A6%BE-1_chgze6.webp' className='w-[30%] hidden tablet:block right-0 h-auto relative z-10' />
            </div>
            <div className='w-full tablet:bg-[#f8ead0] relative z-[700] overflow-x-hidden'>
                <div className='hidden tablet:block z-[700] w-full h-[8px] bg-[#dc6b71c6]'></div>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/gamosa2_b2jrb6.webp' className='w-full relative z-[700] backdrop-blur-[0.8px] mt-20 tablet:mt-0 scale-200 md:scale-100' />
            </div>
        </footer>
    )
}

export default Footer