import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import { useForm } from 'react-hook-form';
import Footer from "../../SharedComponents/Footer/Footer";

const TutionJobDetails = () => {

    const [navfix, setNavfix] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    function setFixed() {
        if (window.scrollY >= 70) {
            setNavfix(true);
        } else {
            setNavfix(false);
        }
    }
    window.addEventListener("scroll", setFixed);

    const onSubmitButton = (data) => {
        console.log(data);
    };



    return (
        <>
         <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbars className="relative " />
      </div>
            {/* Tutor details top banner start */}


            <section className="bg-[#2C6777] ">
                <div className="xl:w-[55rem] lg:w-[38rem] mx-auto py-10 text-center">
                    <h1 className="text-white text-[35px] xl:text-[50px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                        Available Tuition Jobs
                    </h1>
                    <p className="leading-relaxed xl:text-[30px] text-xl text-white mb-4 lg:font-medium  md:font-semibold font-medium  mx-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                    </p>
                </div>

            </section>


            {/* Tutor details top banner end */}
            {/* Available tution job form  start */}

            <section className="Contact_Us_Middle ">
                <div className="bg-[#DCECFA] lg:p-16">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12 gap-5 lg:gap-12 p-2">

                            <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">


                                <form action="" onSubmit={handleSubmit(onSubmitButton)}>
                                    <div className="">
                                        <div className="form_Contact bg-white rounded-xl p-4 py-10">
                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="mb-2">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Full Name:</label>
                                                    <input type="text" id="full_name" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " placeholder="Enter your first name" required

                                                        {...register('full-name')}
                                                    />
                                                </div>
                                                <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Medium:</label>
                                                    <select id="select-an-medium" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>Select Medium</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div>


                                            </div>

                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Class:</label>
                                                    <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>Select Class</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div>

                                                <div className="mb-2">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Subject:</label>
                                                    <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>All Subject</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>
                                                </div>



                                            </div>

                                            <div className="mb-2">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Student Institute Name:</label>
                                                <input type="text" id="institute-name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5" placeholder="Enter Institute Name" required

                                                    {...register("institute-name")}
                                                />
                                            </div>
                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Days per Week:</label>
                                                    <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>3 days/week</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div>
                                                <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender of Student:</label>
                                                    <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>Any gender</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div>





                                            </div>
                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                {/* <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Salary Range:</label>
                                                    <select id="countries" class="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>Salary Range</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div> */}
                                                 <div className="mb-2">
                                                    <div className="mb-2">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Salary Range:</label>
                                                        <input type="text" id="mobile-number" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg " placeholder="Enter your detail number" required

                                                            {...register('mobile-number')}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="mb-2">

                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Desired Tutor Gender:</label>
                                                    <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                                                        <option selected>Any gender</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>

                                                </div>

                                            </div>
                                            <div className="mb-2">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Other Requerment:---:</label>
                                                <textarea type="text" rows="2" id="detail-address" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg" placeholder="Other Requirements (if other requirements mention here) " required


                                                    {...register('detail-address')}
                                                />
                                            </div>                                         

                                        </div>
                                    </div>


                                </form>



                            </div>
                            <div className="col-span-12 md:col-span-12 lg:col-span-3">


                                <div className=" w-auto bg-white border border-gray-200 rounded-lg shadow pb-8">

                                    <h5 className="mb-3 p-2 text-base font-semibold bg-[#2c6777] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                                        Do You Have Any Questions?
                                    </h5>


                                    <div className="mb-2 p-4">
                                        <h3 className="font-bold text-sm">Q. If i cant get the desired tutor ?</h3>
                                        <p className="text-sm">Just fill up the Request for a tutor form and submit request. We will try to give you the tutor according to your choice.</p>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-sm">Q. If i cant get the desired tutor ?</h3>
                                        <p className="text-sm">Just fill up the Request for a tutor form and submit request. We will try to give you the tutor according to your choice.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
            {/* Available tution job form end    */}


            <section className="">
                <div className="container px-5 py-24 mx-auto">
                    <div className="bg-[#2C6777] py-10 rounded-3xl ">
                        <div className="lg:w-full flex items-center flex-col sm:flex-row text-center lg:text-start md:text-start mx-auto lg:px-10 px-4 ">
                            <div className="lg:w-3/4 md:3/5">
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white ">Create Tutor2u account now</h1>
                                <p className="flex-grow sm:pr-16 text-xl font-medium title-font text-white">Join us and start your journey towards excellence.</p>
                            </div>
                            <div className="lg:w-1/4 md:2/5">
                                <button className="flex-shrink-0 text-[#21515e] font-semibold bg-white border-0 py-2 lg:px-8 md:px-5 px-8  hover:bg-[#5cdcff]  rounded-3xl text-lg mt-10 sm:mt-0">Request a Tutor</button>

                            </div>

                        </div>

                    </div>
                    {/* <div>
                        <div className="flex justify-between items-center bg-[#2c6777] rounded-md p-5 mt-5 mb-5">
                            <div className="text-white">
                                <h2 className="text-2xl font-semibold">Request the best tutor for your child</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div>
                                <button className="bg-white text-black text-sm font-normal px-3 py-2 rounded-full">
                                    Request a Tutor
                                </button>
                            </div>

                        </div>
                    </div> */}

                </div>

            </section>
            <section className="">
        <Footer />
      </section>
        </>
    )
}

export default TutionJobDetails