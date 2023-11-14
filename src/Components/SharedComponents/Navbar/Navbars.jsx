import { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from "../../../assets/images/navbar/main-logo.png";

const Navbars = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about_us' },
        { name: 'Tution job', link: '/tutor_job' },
        { name: 'Request a Tutor', link: '/request_tutor' },
        { name: 'Find Tutor', link: '/find_tutor' },
    ];

    let [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] ">
                    <div className=" ">
                        <img src={navlogo} alt=" main logo" />
                    </div>

                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
                        {open ? 'x' : '...'}
                    </div>

                    <ul
                        className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-[#089bab] bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in-out ${
                            open ? 'right-19' : 'hidden'
                        }`}
                    >
                        {Links.map((link) => (
                            <li key={link.name} className="md:ml-4 md:text-[8px] truncate md:my-0 my-7 lg:text-lg">
                                <Link to={link.link} className="duration-500 font-medium">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="md:hidden my-3 truncate">
                            <Link to="login">Login</Link>
                        </li>
                        <li className="md:hidden truncate">
                            <Link to="signup">Create An Account</Link>
                        </li>
                    </ul>

                    <div className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${open ? 'right-19' : 'hidden'}`}>
                        <button className="bg-[#d6e5f1] text-[#2c6777] px-3 py-1 rounded font-semibold truncate">
                            <Link to="/becomea_tutor">Become a tutor</Link>
                        </button>

                        <button className="bg-[#2c6777] text-white px-3 py-1 rounded font-semibold truncate">
                            <Link to="/sign_in">Sign in</Link>
                        </button>
                    </div>
                </nav>
            </div>
            <div></div>
        </>
    );
}

export default Navbars;
