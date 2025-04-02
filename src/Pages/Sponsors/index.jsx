import React from 'react'

const Sponsor = (name, logo) => {
    return (
        <div className="relative z-10 md:w-[18vw] flex flex-col max-w-[60vw] items-center overflow-visible justify-center aspect-square bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
            <div className='flex items-center justify-center w-[90%] at-50%_70% aspect-square bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                <img src={logo} alt="" className="w-3/4 h-3/4 rounded-full" />
            </div>
            <div className='bg-[url(https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/sponsor-name_kqelza.webp)] absolute flex items-center justify-center -bottom-[15%] w-[90%] aspect-[25/9] bg-contain bg-center z-10'>
                <h2 className="text-lg md:text-2xl font-semibold text-center">{name}</h2>
            </div>
        </div>
    )
}

const Sponsors = () => {
    return (
        <section className="relative max-w-screen overflow-hidden font-gotham flex flex-col items-center justify-center px-10 md:px-16 tablet:px-52 bg-gradient-to-b from-[#29E5FF] via-[#FEFEFE] to-[#FEFEFE] md:bg-[#f8ead0] md:bg-none">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/header-img_brrtbl.webp" alt="" className="w-1/2 md:w-1/5 mt-32 md:mt-52" />
            <h1 className="text-4xl tablet:text-5xl text-[#CB2229] mb-8 font-moglan">Sponsors</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 w-[95%] gap-y-16 place-items-center">
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-1/3 absolute z-0 opacity-50 -left-[15%] hidden md:block" />
                {Sponsor("Pizza Hut", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613374/pizzahut_wvxpv3.webp")}
                {Sponsor("Avni'z Production", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613375/avni_vrwrhf.webp")}
                {Sponsor("Lati Ghati", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613375/latighati_fhwrkn.webp")}
            </div>
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/header-img_brrtbl.webp" alt="" className="w-1/2 md:w-1/5 mt-32 md:mt-28" />
            <h1 className="text-4xl tablet:text-5xl text-[#CB2229] mb-8 font-moglan">Past Sponsors</h1>
            <div className="grid grid-cols-2 tablet:grid-cols-3 gap-y-20 gap-x-4 tablet:gap-x-0 place-items-center w-[95%]">
                {Sponsor("Indian Oil", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613132/indOil_wmugqx.webp")}
                {Sponsor("Hyundai", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613133/Hyundai_rb8eyo.webp")}
                {Sponsor("Pran", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613132/pran_iqx6ta.webp")}
                {Sponsor("Gplus", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613134/Gplus_zttar4.webp")}
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-full absolute z-0 opacity-50 -right-[35%] md:hidden block" />
                {Sponsor("NRL", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613135/nrl_jkkwxo.webp")}
                {Sponsor("Oil India", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613138/oilInd_ofxgxb.webp")}
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/phul_jhlqod.webp' alt="" className="w-1/2 absolute z-0 opacity-75 -right-[7%] hidden md:block" />
                {Sponsor("Tea O'Clock", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613139/Tea_i0btx0.webp")}
                {Sponsor("London Shakes", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613141/shakes_ibx9p2.webp")}
                {Sponsor("Cropzo", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613144/crops_yegczj.webp")}
            </div>
            <div className="grid relative grid-cols-1 font-moglan tablet:grid-cols-3 gap-y-10 mt-28 md:mt-44 mb-28 w-[85%] place-items-center">
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                        <h2 className="text-2xl text-center p-4">Why to Sponsor Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                    </div>
                </div>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-[150%] top-1/4 absolute z-0 opacity-50 -left-[45%] md:hidden block" />
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                        <h2 className="text-2xl text-center p-4">Why to Sponsor Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                    </div>
                </div>
                <div className="relative flex overflow-visible z-0 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                    <h2 className="text-2xl text-center p-4">Why to Sponsor Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export {Sponsors}