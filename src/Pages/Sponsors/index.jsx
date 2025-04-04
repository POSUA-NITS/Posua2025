import React from 'react'

const Sponsor = (name, logo, size) => {
    return (
        <div className={`relative z-10 ${size?"min-w-[50vw] max-w-[50vw] md:min-w-[25vw] md:max-w-[25vw]":"md:min-w-[18vw] md:max-w-[18vw]"} flex flex-col items-center overflow-visible justify-center aspect-square bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg`}>
            <div className='flex items-center justify-center w-[90%] at-50%_70% aspect-square bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                <img src={logo} alt="" className="w-3/4 h-3/4 rounded-full" />
            </div>
            <div className='bg-[url(https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/sponsor-name_kqelza.webp)] absolute flex items-center justify-center -bottom-[15%] w-[90%] aspect-[25/9] bg-contain bg-center z-10 truncate'>
                <h2 className="text-sm sm:text-lg md:text-2xl font-semibold text-center text-ellipsis w-full">{name}</h2>
            </div>
        </div>
    )
}

const Sponsors = () => {
    return (
        <section className="relative max-w-screen overflow-hidden font-gotham flex flex-col items-center justify-center px-10 md:px-16 tablet:px-52 bg-gradient-to-b from-[#29E5FF] via-[#FEFEFE] to-[#FEFEFE] md:bg-[#f8ead0] md:bg-none">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/header-img_brrtbl.webp" alt="" className="w-1/2 md:w-1/5 mt-32 md:mt-52" />
            <h1 className="text-4xl tablet:text-5xl text-[#CB2229] mb-8 font-moglan">Sponsors</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-2 w-[95%] gap-y-16 place-items-center">
            <img 
                src="https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp" 
                alt="" 
                className="w-1/3 absolute z-0 opacity-50 -left-[15%] hidden md:block" 
            />
                {Sponsor("Indian Oil", "https://res.cloudinary.com/dmezugavw/image/upload/v1743703617/images-1_hvqriw.webp", 3)}
                {Sponsor("Pizza Hut", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613374/pizzahut_wvxpv3.webp", 1)}
                {Sponsor("Avni'z Production", "https://res.cloudinary.com/dmezugavw/image/upload/v1743613375/avni_vrwrhf.webp", 2)}
                {Sponsor("Amul", "https://res.cloudinary.com/dbzjr2zld/image/upload/v1743752919/Amul_oh2xbg.png", 4)}
                {Sponsor("Manya", "https://res.cloudinary.com/dbzjr2zld/image/upload/v1743752998/Screenshot_2025-04-04_131938_xbqm6i.png", 5)}
                {Sponsor("Bhogali Jalpan", "https://res.cloudinary.com/dbzjr2zld/image/upload/v1743752919/WhatsApp_Image_2025-04-04_at_13.03.29_ec785d72_degrcl.jpg", 6)}
        <div className="col-span-full place-self-center">
            {Sponsor("ND24", "https://res.cloudinary.com/dbzjr2zld/image/upload/v1743752917/ND24_i4371e.png", 7)}
        </div>
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
                <div className="relative hidden z-10 md:w-[18vw] tablet:flex flex-col max-w-[60vw] items-center overflow-visible justify-center aspect-square bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center justify-center w-[90%] at-50%_70% aspect-square bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg'>
                        <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1743613144/crops_yegczj.webp" alt="" className="w-3/4 h-3/4 rounded-full" />
                    </div>
                    <div className='bg-[url(https://res.cloudinary.com/dmezugavw/image/upload/v1742785498/sponsor-name_kqelza.webp)] absolute flex items-center justify-center -bottom-[15%] w-[90%] aspect-[25/9] bg-contain bg-center z-10 truncate'>
                        <h2 className="text-lg md:text-2xl font-semibold text-center text-ellipsis w-full">Cropzo</h2>
                    </div>
                </div>
            </div>
            <div className="grid relative grid-cols-1 font-moglan tablet:grid-cols-3 gap-y-10 mt-28 md:mt-44 mb-28 w-[85%] place-items-center">
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg max-h-[90vh] overflow-y-auto' style={{scrollbarWidth: 'none'}}>
                        <h2 className="text-2xl text-center p-4">Marketing Opportunities</h2>
                        <p>
                            National Institute of Technology, Silchar,an institute of National
                            Importance is pleased to announce that the institute is organising
                            POSUA&apos;25, the Rongali Bihu Festival of Assam.The entire team of
                            POSUA 2025 is dedicated to ensure maximum reach of our sponsors through
                            the basic framework of the festival.
                            <br />
                            <br />
                            We will make the best of efforts to promote our sponsoring organisations
                            across a wide audience.The team will be popularizing the generous
                            sponsors among students as well as faculty so that they can avail the
                            services rendered by your organization.
                            <br />
                            <br />
                            Your presence will be highly appreciated and would greatly help us in
                            making this annual event of the Institute a grand success.The Institute
                            will be grateful for your support and faith in us and would surely
                            extend our gratitude towards your organisation.
                            <br />
                            <br />
                            Hence, we, the entire team of POSUA 2025 cordially invite you for
                            sponsorship in this Annual Cultural Fest.
                        </p>
                    </div>
                </div>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1742785499/japi_ij9nt2.webp' alt="" className="w-[150%] top-1/4 absolute z-0 opacity-50 -left-[45%] md:hidden block" />
                <div className="relative flex overflow-visible z-10 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg max-h-[90vh] overflow-y-auto' style={{ scrollbarWidth: 'none' }}>
                        <h2 className="text-2xl text-center p-4">REASONS TO GET ASSOCIATED WITH POSUA’25</h2>
                        <p>
                            As POSUA is the Rongali Bihu festival organised with great pomp and joy
                            ,and Bihu being the state festival of Assam ,the annual event with
                            splendid grandeur captures a large audience ,and hence has vast public
                            outreach.This provides a good opportunity of promotion to our associated
                            partners across a wider audience.
                            <br />
                            <br />
                            The association would cast a brand image of your organisation among the
                            students of the institute.As a good percentage of our students are
                            placed with heightened job opportunities,they could be potential
                            associates of your organisation in future endeavours.
                            <br />
                            <br />
                            Your organisation would have greater reach as POSUA captures a large
                            community of people from across North-Eastern India, students and
                            faculty of NIT Silchar as well as other premier institutes like NITs,
                            IIMs and other colleges. Hence, a huge promising market comprising of
                            prospective customers is waiting for you.
                        </p>
                    </div>
                </div>
                <div className="relative flex overflow-visible z-0 justify-center tablet:w-[22vw] bg-gradient-to-b from-[#E7BB67] to-[#F4E0B9] rounded-lg">
                    <div className='flex items-center flex-col w-[90%] py-6 at-50%_70% bg-radial from-[#F1DCB5] to-transparent backdrop-blur-2xl rounded-lg max-h-[90vh] overflow-y-auto' style={{ scrollbarWidth: 'none' }}>
                        <h2 className="text-2xl text-center p-4">SPONSORSHIP ENTITLEMENTS</h2>
                        <p className='text-base'>
                            1)There will be banners and posters with mention of our sponsors put up
                            in the college campus as well as across the city during POSUA’25.
                            <br />
                            <br />
                            2)We will be sending brochures,posters and flash presentations with the
                            logos of our sponsors to several engineering and science colleges across
                            the nation.
                            <br />
                            <br />
                            3)Publicity pamphlets or any other material provided by sponsors would
                            also be popularised in the campus during the fest,
                            <br />
                            <br />
                            4) There will be special mention of sponsors on the official website of
                            POSUA.The official website indeed serve as an integral platform for the
                            entire programme as all important information regarding the fest are put
                            up there.Since the day of sponsorship confirmation, the logo and link of
                            official websites of our respective sponsors will be featured in our
                            website.
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export { Sponsors }