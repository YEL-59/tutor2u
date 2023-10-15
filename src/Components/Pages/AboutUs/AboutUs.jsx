import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbar"


const AboutUs = () => {
  const [navfix, setNavfix] = useState(false);

	function setFixed() {
		if (window.scrollY >= 70) {
			setNavfix(true);
		} else {
			setNavfix(false);
		}
	}
	window.addEventListener('scroll', setFixed);
  return (
    <div>
  <div className={`z-10 ${navfix ? 'top-0 h-[10%] w-full fixed bg-[#523970]' : ''}`}>
					<Navbars />
				</div>
      aboutus</div>
  )
}

export default AboutUs