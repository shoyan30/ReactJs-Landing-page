import React, { useState } from 'react';
import AboutImg from '../../../assets/About image.png';
import AboutVector from '../../../assets/about-vector.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaPhoneVolume } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { MdBrunchDining } from 'react-icons/md';
import { GrDeliver } from 'react-icons/gr';

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="sm:mb-10 px-4 ">
            <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto mt-10 ">

                {/* Image container */}
                <div className="w-full md:w-[617px] h-auto md:h-[460px] relative">
                    <div>
                        <img
                            className="absolute md:top-12 top-4 z-10 w-[100px] h-[80px]  md:w-[200px] md:h-[150px]"
                            src={AboutVector}
                            alt="Decorative vector"
                        />
                    </div>
                    <img src={AboutImg} alt="About Us" className="w-full h-full object-cover" />
                </div>





                {/* Tabs section */}
                <div className="w-full md:w-[624px] h-auto md:h-[402px] ">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="flex space-x-4 overflow-auto">
                            <Tab className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ">
                                Title 1
                            </Tab>
                            <Tab className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ">
                                Title 2
                            </Tab>
                            <Tab className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ">
                                Title 3
                            </Tab>
                        </TabList>
                        <div className="border-b-2 border-red-500 my-2"></div>
                        <TabPanel>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta nemo possimus provident excepturi eos praesentium quisquam similique voluptatum id?
                            </p>


                        </TabPanel>
                        <TabPanel>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <p className="text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla eaque, cupiditate numquam libero perspiciatis.
                            </p>
                        </TabPanel>


                    </Tabs>
                    <div className='flex items-center gap-4 mt-48'>
                        <button className="btn bg-[#FEBF00]">
                            About More
                        </button>
                        <p className='flex items-center text-2xl'><span><FaPhoneVolume /></span>01887326776</p>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-row flex-col justify-center gap-16 md:gap-72 max-w-screen-xl text-center mx-auto mt-12'>
                <div className='flex justify-center items-center gap-2'>
                    <AiOutlineDeliveredProcedure className='text-4xl font-bold text-orange-600' />
                    <div>
                        <h1 className='uppercase font-bold text-xl'>fast delivery</h1>
                        <p>Within 30 minutes</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <MdBrunchDining className='text-4xl font-bold text-orange-600'/>
                    <div>
                        <h1 className='uppercase font-bold text-xl'>absolute dining</h1>
                        <p>Best buffet restaurant</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <GrDeliver className='text-4xl font-bold text-orange-600'/>
                    <div >
                        <h1 className='uppercase font-bold text-xl'>pickup delivery</h1>
                        <p>Grab your food order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
