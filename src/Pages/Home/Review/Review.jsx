import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';

const Review = () => {
    // Array of objects with comment and video URL
    const contentItems = [
        {
            comment: { user: "John Doe", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam, magnam qui quod eum eaque laborum ducimus inventore consequatur? Delectus officia illo est quia maxime accusamus architecto expedita sequi? Quo!" },
            videoUrl: "https://www.youtube-nocookie.com/embed/ZqvxmXSRub8?si=qCd2GoTXhLre87F9"
        },
        {
            comment: { user: "Jane Smith", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam, magnam qui quod eum eaque laborum ducimus inventore consequatur? Delectus officia illo est quia maxime accusamus architecto expedita sequi? Quo!" },
            videoUrl: "https://www.youtube-nocookie.com/embed/ZqvxmXSRub8?si=qCd2GoTXhLre87F9"
        },
        {
            comment: { user: "Emily Davis", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam, magnam qui quod eum eaque laborum ducimus inventore consequatur? Delectus officia illo est quia maxime accusamus architecto expedita sequi? Quo!" },
            videoUrl: "https://www.youtube-nocookie.com/embed/ZqvxmXSRub8?si=qCd2GoTXhLre87F9"
        },
        {
            comment: { user: "Michael Brown", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam, magnam qui quod eum eaque laborum ducimus inventore consequatur? Delectus officia illo est quia maxime accusamus architecto expedita sequi? Quo!" },
            videoUrl: "https://www.youtube-nocookie.com/embed/ZqvxmXSRub8?si=qCd2GoTXhLre87F9"
        }
    ];

    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // Show one slide at a time
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
        dots: false,
        arrows: false,
    };

    return (
        <div className="p-8 max-w-screen-xl sm:max-h-fit mx-auto relative">
            <p className='text-red-600 font-semibold'>Crispy, Every Bite Taste</p>
            <h2 className="text-5xl font-bold mb-6 uppercase">What Some of my Customers Say</h2>

            {/* Slick Slider */}
            <Slider ref={sliderRef} {...settings}>
                {contentItems.map((item, index) => (
                    <div key={index} className=" md:h-[400px] lg:h-[555px] ">
                        {/* User Comment */}
                        <div className="flex flex-col-reverse md:flex-row h-full">
                            <div className="w-full bg-yellow-400 border-2 md:w-1/2">
                                <div className="m-auto md:mt-24  md:h-[400px] md:w-[386.19px] flex flex-col justify-between p-2">
                                    <p className="text-black text-lg font-semibold">{item.comment.text}</p>
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.comment.user}</h3>
                                        <small>Jeddah, Saudi</small>
                                        <hr className="bg-black h-1 border-0" />
                                    </div>
                                    

                                </div>
                            </div>

                            {/* Video */}
                            <div className="w-full md:w-1/2">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        
                    </div>

                ))}
            </Slider>

            {/* Custom navigation buttons */}
            <div className="flex gap-2 justify-center items-center mt-4 lg:absolute lg:top-0 lg:right-24 lg:flex-row  lg:space-x-0 space-x-4 ">
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4 p-2"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4 p-2"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Review;
{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZqvxmXSRub8?si=qCd2GoTXhLre87F9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }