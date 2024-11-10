import { MdOutlineLocalPostOffice, MdWatchLater } from 'react-icons/md';
import footerImg from '../../assets/footerImg-2.png';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-full w-full flex justify-center mt-12"
                style={{ backgroundImage: `url(${footerImg})` }}
            >
                {/* Black overlay with opacity */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="relative  max-w-screen-2xl h-full flex flex-col py-24">
                    <h1 className="text-4xl text-white text-center font-bold uppercase">
                        We are ready to give you the best dining experiences
                    </h1>

                    <div className="flex flex-col md:flex-row mt-16  justify-between text-white">
                        <div className="text-center ">
                            <MdWatchLater className='mx-auto text-yellow-400 mb-2' size={30} />
                            <h1 className="text-lg font-semibold uppercase">Opening Hours</h1>
                            <p>Monday - Sunday <br /> 9:00 AM to 11:30 PM</p>
                        </div>
                        <div className="text-center">
                            <FiPhoneCall className='mx-auto text-yellow-400 mb-2' size={30} />
                            <h1 className="text-lg font-semibold uppercase">LET'S TALK</h1>
                            <p>Phone: 1-800-222-4545 <br />Fax: 1-800-222-4545</p>
                        </div>
                        <div className="text-center">
                            <MdOutlineLocalPostOffice className='mx-auto text-yellow-400 mb-2' size={30} />
                            <h1 className="text-lg font-semibold uppercase">BOOK A TABLE</h1>
                            <p>Email: demo@website.com <br /> Support: support@website.com</p>
                        </div>
                        <div className="text-center">
                            <IoLocationOutline className='mx-auto text-yellow-400 mb-2' size={30} />
                            <h1 className="text-lg font-semibold uppercase">Our Address</h1>
                            <p>123 Stree New York City <br /> United States Of America.</p>
                        </div>

                    </div>

                    <div className='text-white px-2 max-w-sm flex space-x-6 md:space-x-10 mx-auto mt-10'>
                        <FaFacebook size={30} className='border-2 rounded-full h-14 w-14 p-2'/>
                        <FaInstagramSquare size={30} className='border-2 rounded-full h-14 w-14 p-2'/>
                        <BsTwitterX size={30} className='border-2 rounded-full h-14 w-14 p-2'/>
                        <FaLinkedin size={30} className='border-2 rounded-full h-14 w-14 p-2'/>
                    </div>

                    <p className='text-center text-white mt-4 '>&copy; 2024 All Rights Reserved</p>
                </div>


            </div>
        </div>
    );
};

export default Footer;
