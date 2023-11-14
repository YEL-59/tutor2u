import signinimg from "../../../assets/images/signin/signin-side-img.png";
import logoimg from "../../../assets/images/navbar/main-logo.png";

const SignUp = () => {
    return (
        <>
            {/* <div>SignUp</div> */}
            <section className="min-h-screen flex items-stretch text-black ">
                <div
                    className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white"
                    style={{ backgroundImage: `url(${signinimg})` }}
                >
                    <div classclassName="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full xl:px-24 md:px-8 z-10">
                        <h1 className="xl:text-5xl lg:text-4xl font-bold text-left tracking-wide">
                            Keep it special
                        </h1>
                        <p className="xl:text-3xl lg:text-2xl my-4">
                            Learning made easy and fun with your Dream Tutor2u, sign up and
                            succeed together
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 md:px-6 px-0 z-0 bg-[#f5f4ef]">
                    {/* <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: `url(${signinimg})` }}>
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div> */}
                    <div className="w-full py-6 pb-10 z-20 ">
                        <div className=" my-6 flex justify-center   ">
                            <img src={logoimg} alt=" tutor2u logo" className="  " />
                        </div>
                        <h1 className="text-[#2C6777] lg:text-3xl text-[26px] font-semibold mb-4">
                            Sign Up for an Account
                        </h1>

                        <p className="text-[#2C6777]">Sign up or Log in to your account</p>
                        <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">

                            <div className="grid xl:grid-cols-2  lg:grid-cols-1  md:grid-cols-2 md:gap-6">

                                <div className="mb-2">
                                    <div className="mb-2">
                                        <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">First Name</label>
                                        <input type="text" id="mobile-number" className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]" placeholder="Enter your first name" required
                                        />
                                    </div>

                                </div>

                                <div className="mb-2">

                                    <div className="mb-2">
                                    <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">Last Name </label>
                                        <input type="text" id="email-address" className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9] " placeholder="Enter your last name" required


                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="pb-2 ">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email address here"
                                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                />
                            </div>
                            <div className="pb-2 pt-4">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">
                                    Password
                                </label>
                                <input
                                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter a strong password"
                                />
                            </div>

                            
                                <div className="  lg:mt-0 mt-2 flex items-start mb-2  w-full ">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4  bg-[#2C6777] border-[#2C6777] rounded  "
                                    />
                                    <label
                                        for="checkbox-1"
                                        className="ml-2 text-sm font-medium text-black"
                                    >
                                        I agree to the{" "}
                                        <a href="#" className="text-[#2C6777] hover:underline ">
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </div>
                               
                            
                            <p className="mt-4 "> Or Continue With </p>
                            <div className="py-4  space-x-2">
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    f
                                </span>
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    G+
                                </span>
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    in
                                </span>
                            </div>
                            <div className=" pb-2 pt-4 ">
                                <button className="uppercase block w-full p-4 text-lg text-white  font-bold rounded-lg bg-[#2C6777] hover:bg-[#3f98b1]">
                                  Sign Up
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SignUp