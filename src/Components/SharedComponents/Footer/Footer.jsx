//import Link from '../Data/Footerdata/footerdata.json'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs'

import FooterlogoImg from "../../../assets/images/navbar/white-footer-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className="w-full  h-full  pb-5 bg-[#2c6777] text-white px-5  ">
				{/* <div className="container mx-auto h-full pt-10 mt-10  my-5 text-white ">

					
					<div className="flex justify-between  flex-wrap  flex-col md:flex-row gap-5 my-5">
						<div>
							<h1 className="text-6xl font-bold mb-2">tutor2u</h1>
							<div className="text-sm">
								<p className="max-w-md mb-1">
									Get the academic support you need with our dedicated tutoring services. Follow us on our Social Media platforms and never miss a beat.
								</p>
							</div>
							<div className="flex gap-3 mb-2">

								<BiLogoFacebookCircle size={40} />

								<BiLogoTwitter size={40} />

								<BiLogoYoutube size={40} />

								<BiLogoInstagramAlt size={40} />
								<BiLogoLinkedinSquare size={40} />
							</div>
						</div>
						<div className="flex justify-between flex-col md:flex-row gap-5 ">
							{Link &&
								Link.map((item) => {
									return (
										<ul key={item.id}>
											<h1 className="text-lg font-bold mb-2"> {item.name}</h1>

											{item.subname.map((data) => (
												<li className="text-sm mb-1" key={data.id}>
													<a href={data.link}>{data.name}</a>
												</li>
											))}
										</ul>
									);
								})}
						</div>
						
					</div>

					<div className="text-sm my-3 text-start">
						<span>Copyright © 2023 Krazy IT ABN Number 20611064601 </span>
					</div>
				</div> */}





				<div
					class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<img src={FooterlogoImg} alt=" main logo" class=" " />
						<p class="my-3 text-[16px] text-white mt-5 mb-10">Get the academic support you need with our dedicated tutoring services. Follow us on our Social Media platforms and never miss a beat.
						</p>

						<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
							<BiLogoFacebookCircle size={30} />

							<BiLogoTwitter size={30} />

							<BiLogoYoutube size={30} />

							<BiLogoInstagramAlt size={30} />
							<BiLogoLinkedinSquare size={30} />

						</span>
					</div>
					<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<h2 className=" mb-[18px]  text-[#FFFFFF] text-[18px] font-bold select-none">Quick Links</h2>
							<nav className="list-none mb-5">
								<ul className="flex flex-col gap-1 text-[#FFFFFF]">
									<a className="hover:underline" href="">
										<li>Our Services</li>
									</a>
									<Link to='/tutor_blog' class="hover:underline" href="">
										<li>Blog</li>
									</Link>
									<Link to='/tutor_resources' class="hover:underline" href="">
										<li>Resource </li>
									</Link>
									<a className="hover:underline" href="">
										<li>FAQ</li>
									</a>
									<a className="hover:underline" href="">
										<li>Career</li>
									</a>

									<a className="hover:underline" href="">
										<li>Privacy Policy</li>
									</a>
									<a className="hover:underline" href="">
										<li>Terms of Use </li>
									</a>


								</ul>
							</nav>
						</div>

						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<Link to='/contact_us' className='font-bold text-lg '>Contact Us</Link>

							<nav className="list-none mt-3 mb-10">
								<ul className="flex flex-col gap-[10px] text-[#FFFFFF]">
									<a className="hover:underline" href="#">
										<li>(02) 9158 8497</li>
									</a>
									<a className="hover:underline" href="#">
										<li>info@krazyit.com</li>
									</a>
									<a className="hover:underline" href="#">
										<li>Suite no - 25, 4th Floor, Bhuiyan Mansion, 6 Motijheel C/A, Dhaka - 1000, Bangladesh
										</li>
									</a>
								</ul>
							</nav>
						</div>
						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<h2 className="mb-[18px]  text-[#FFFFFF] text-[18px] font-bold select-none">Newsletter</h2>
							<nav className="list-none mb-10">

								<ul className="flex flex-col gap-[10px] text-[#FFFFFF]">

									<p>Subscribe to our newsletter to stay<br /> up to date on everything Tutor2u
									</p>



									<div >


										<form>
											<label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">

												</div>
												<input type="email" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border  rounded-lg bg-white " placeholder="Email..." required />
												<button type="submit" className=" absolute right-3.5 bottom-1.5 border-2 border-[#2c6777] rounded-full p-0.5">
													<BsSendFill size={15} color='#2c6777' />
												</button>
											</div>
										</form>


									</div>



								</ul>
							</nav>
						</div>

					</div>
				</div>
				<div className="bg-[#2c6777]">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-white  text-sm text-center sm:text-left">Copyright © 2023 Tutor2U ABN Number 20611064601

						</p>

					</div>
				</div>
			</div>
		</>
	)
}

export default Footer