import Link from '../Data/Footerdata/footerdata.json'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';

const Footer = () => {
	return (
		<>
			<div className="w-full  h-full  pb-5 bg-[#2c6777] text-white px-5 rounded-t-lg ">
				<div className="container mx-auto h-full pt-10 mt-10  my-5 text-white ">

					{/* footer row 2 */}
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
						{/* <div className="">
						<h1 className="text-lg font-bold mb-2">We Accept Only</h1>
						<div className="text-sm">
							<img
								className="w-full h-10 rounded-md"
								src="https://1.bp.blogspot.com/-tUK62uY5mZ4/YSDZQZa7P6I/AAAAAAAAC_E/rrEtW5Xv7zY8lRQpQfSYJF4h0cZzF-tkQCLcBGAsYHQ/s1614/YouTube%2Bvideo%2Bboostpromotion%2Bbuy%2BViews%2Blow%2Bprice%2Bin%2BBangladesh%2Bget%2B10%2525%2Bfree.png"
								alt="yel-59"
							/>
						</div>
					</div> */}
					</div>

					<div className="text-sm my-3 text-start">
						<span>Copyright © 2023 Yel-59  Number 20611060000 </span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer