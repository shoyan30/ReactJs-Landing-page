import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item1 from '../../../assets/item1.png';
import pizza from '../../../assets/pizza.png';
import french from '../../../assets/french.png';
import chicken from '../../../assets/chiken.png';

const PopularFood = () => {
    const foodItems = [
        { image: item1, title: 'Burger', description: 'Juicy burger with fresh lettuce, tomato, and cheese.' },
        { image: pizza, title: 'Pizza', description: 'Delicious cheesy pizza with a variety of toppings.' },
        { image: french, title: 'French Fry', description: 'Authentic KFC French Fry with fresh rice.' },
        { image: chicken, title: 'Chicken', description: 'Crispy Chicken with Salad and parmesan cheese.' },
    ];

    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="p-8  max-w-screen-xl mx-auto relative  mt-24">
            <h2 className="text-3xl font-bold mb-6 ms-4 uppercase">Popular Foods</h2>

            <Slider ref={sliderRef} {...settings}>
                {foodItems.map((food, index) => (
                    <div key={index} className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
                        <img src={food.image} alt={food.title} className=" w-full mx-auto object-cover rounded-lg mb-4" style={{ width: '120px', height: '120px' }} />
                        <h3 className="text-2xl font-semibold mb-2">{food.title}</h3>
                        <p className="text-gray-600">{food.description}</p>
                    </div>
                ))}
            </Slider>

            {/* Custom navigation buttons with responsive positioning */}
            <div className="flex gap-2 justify-center items-center mt-4 lg:absolute lg:top-4 lg:right-24 lg:flex-row  lg:space-x-0 space-x-4 ">
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default PopularFood;
