import React from 'react'

const Sponsor = (name, logo) => {
    return (
        <div className="relative z-10 min-w-[20vw] flex flex-col max-w-[60vw] items-center overflow-visible justify-center aspect-square bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
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
        <section className="relative max-w-screen overflow-hidden font-gotham flex flex-col items-center justify-center px-10 md:px-16 tablet:px-40 bg-gradient-to-b from-[#29E5FF] via-[#FEFEFE] to-[#FEFEFE] md:bg-[#f8ead0] md:bg-none">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/header-img_brrtbl.webp" alt="" className="w-1/2 md:w-1/5 mt-32 md:mt-52" />
            <h1 className="text-5xl text-[#CB2229] mb-8 font-moglan">Sponsors</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full place-items-center">
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-1/3 absolute z-0 opacity-50 -left-[15%] hidden md:block" />
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
            </div>
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/header-img_brrtbl.webp" alt="" className="w-1/2 md:w-1/5 mt-32 md:mt-28" />
            <h1 className="text-5xl text-[#CB2229] mb-8 font-moglan">Past Sponsors</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 gap-y-20 place-items-center w-full">
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-full absolute z-0 opacity-50 -right-[35%] md:hidden block" />
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/phul_jhlqod.webp' alt="" className="w-1/2 absolute z-0 opacity-75 -right-[7%] hidden md:block" />
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
                {Sponsor("Sponsor 1", "https://picsum.photos/200")}
            </div>
            <div className="grid relative grid-cols-1 font-moglan tablet:grid-cols-3 gap-10 mt-28 md:mt-44 mb-28 w-full place-items-center">
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                        <h2 className="text-2xl text-center p-4">Why to Sponsor Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                    </div>
                </div>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-[150%] top-1/4 absolute z-0 opacity-50 -left-[45%] md:hidden block" />
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] tablet:w-[20vw] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                        <h2 className="text-2xl text-center p-4">Why to Sponsor Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id rem blanditiis dolorem soluta iste odit laboriosam voluptatem ex, officiis obcaecati, reiciendis voluptates! Exercitationem, voluptatum cupiditate? Ut tenetur accusantium earum molestiae debitis dignissimos sint inventore fugit at est. Assumenda qui delectus sit suscipit sapiente aperiam dolorem illo tempora numquam ullam.</p>
                    </div>
                </div>
                <div className="relative flex overflow-visible z-0 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col justify-center w-[90%] tablet:w-[20vw] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
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