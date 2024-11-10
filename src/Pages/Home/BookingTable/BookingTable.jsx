import React from 'react';
import bookingTableImg from '../../../assets/form- bg1.png';
import { useForm } from 'react-hook-form';
import { FaMessage } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';

const BookingTable = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className="relative mt-12">
            {/* Apply the background image using Tailwind CSS classes */}
            <div
                className="bg-cover bg-center bg-no-repeat max-w-screen-xl mx-auto h-full"
                style={{ backgroundImage: `url(${bookingTableImg})` }}
            >
                <div className="text-white p-8 md:ms-24 space-y-6">
                    <h1 className='text-5xl font-bold uppercase'>Book your table</h1>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br /> molestie vel, ornare non id blandit netus.</p>
                </div>

                <div className="min-h-screen mb-24 md:ms-24 top-0">
                    <div className="md:max-w-2xl shadow-2xl">
                        <form className="card-body space-y-8">

                            <div className='flex flex-col sm:flex-row gap-6'>
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        name='name'
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-6'>
                                <div className="form-control w-full relative">
                                    <input
                                        type="text"
                                        {...register("phone", { required: true })}
                                        placeholder="Reservation Date"
                                        className="input input-bordered pr-10 w-full"
                                    />
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <SlCalender /> {/* You can use any icon here */}
                                    </span>
                                </div>

                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("people", { required: true })}
                                        placeholder="Total People"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <textarea
                                    {...register("message", { required: true })}
                                    placeholder="Enter your message"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-400 w-full">
                                    BOOK NOW <FaMessage />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTable;
