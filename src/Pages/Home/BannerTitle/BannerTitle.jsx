import React from 'react';
import bannerImage from '../../../assets/banner-Image.png'
import offerLogo from '../../../assets/offer-logo.png'
import vector1 from '../../../assets/Vector-1.png'
const BannerTitle = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-8 md:mt-[100px]'>
            <div className="flex flex-col md:flex-row items-center  md:w-[1373.5px] md:h-[649px] relative">
                <div className="md:w-[946px] md:h-[446px] text-center md:text-left  z-10 ">
                    <h2 className="text-lg uppercase md:text-7xl font-bold">Taste the aut<span className=' bg-slate-400 opacity-50'>hentic </span>Saudi cuisine</h2>
                    <p className="mt-2 text-sm md:text-base">Among the best Saudi chefs in the world, serving <br /> you something beyond flavor.</p>
                    <button className="btn bg-[#FEBF00] mt-4 md:mt-6 md:w-auto">
                        EXPLORE MENU
                    </button>
                </div>

                <div className="md:w-[700px] md:h-[649px] mx-4  right-24 mt-4 md:mt-0 z-0 md:absolute ">
                    <div className="absolute  md:-top-8 md:-right-12 mb-4 mr-4 z-10 ">
                        <img className='bg-yellow-500 rounded-full' src={vector1} alt="" />
                    </div>
                    <img src={bannerImage} alt="Saudi cuisine" />
                    <div className="absolute -bottom-0 right-0 md:-bottom-5 md:-right-12 mb-4 mr-4 z-10 ">
                        <img className='bg-yellow-500 rounded-full' src={offerLogo} alt="" />
                    </div>
                </div>


            </div>



        </div>
    );
};

export default BannerTitle;