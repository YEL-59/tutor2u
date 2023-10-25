import { useEffect, useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai'
const FindTutor = () => {
  const [navfix, setNavfix] = useState(false);
  const [showCount, setShowCount] = useState(2);
  const { register, handleSubmit, setValue, watch } = useForm();
  const searchValue = watch('search', '');

  const setFixed = () => {
    setNavfix(window.scrollY >= 70);
  };

  window.addEventListener('scroll', setFixed);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    console.log("Search Value:", searchValue);
  };

  const handleClick = (buttonValue) => {
    setValue('search', buttonValue);
    console.log("Button clicked with value:", buttonValue);
  };
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    const selectedSubjectsNames = selectedSubjects.map(id => {
      const subject = ButtonData.find(item => item.id === id);
      return subject ? subject.buttoncontant : null;
    }).filter(Boolean);

    console.log("Selected Subjects:", selectedSubjectsNames);
  }, [selectedSubjects]);

  const handleCheckboxChange = (id) => {
    setSelectedSubjects(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
    // setSelectedSubjects(ButtonData.map(subject => subject.id));
  }

  const ButtonData = [
    { id: 1, buttoncontant: "Math" },
    { id: 2, buttoncontant: "English" },
    { id: 3, buttoncontant: "History" },
  ];

  return (
    <div>
      {/* <div className={`z-10 ${navfix ? 'top-0 h-[4%] w-full fixed bg-[white]' : ''}`} >
        <Navbars className='relative' />
      </div> */}

      <section className="ContactUs_Top_Banner bg-[#2C6777]">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Animated Night Hill Illustrations
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry,s standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has
                </p>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
              <img alt="Top-Banner-Side-Image" className=" " src={aboutsideimg} />
            </div>
          </div>
        </div>
      </section>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
           <div className="">

 <h3 className="text-2xl font-bold  ">154,3 Search Result in “English” Tutor</h3>
            <div className="grid grid-cols-12 gap-4  p-2 mt-10">
              <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                    <input
                      type="search"
                      id="search"
                      {...register('search')}
                      value={searchValue}
                      onChange={(e) => setValue('search', e.target.value)}
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search your best teacher"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-[#2c6777] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-2 "
                    >
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {ButtonData.map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        className="text-black bg-white hover:bg-[#089bab] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                        onClick={() => handleClick(btn.buttoncontant)}
                      >
                        {btn.buttoncontant}
                        <RxCross2 className="ml-3 h-3.5 w-3.5" />
                      </button>
                    ))}
                  </div>
                </form>




                <div className="w-full p-4 mt-5 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">


                  <div>
                    <div>

                      <div className="flex flex-wrap items-center justify-between ">

                        <div className="flex gap-2 justify-center items-center">
                          <img className="w-10 h-10 rounded" src={aboutsideimg} alt="" />



                          <div className="flex flex-col ">
                            <p className="text-start font-bold">Mitchel Starck</p>
                            <div className="flex">
                              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <p className="ml-2 text-sm font-bold text-gray-900 ">4.95</p>
                              <span className="w-3 h-3 mx-1.5 mt-1 bg-gray-500 rounded "></span>
                              <a href="#" className="text-sm font-medium truncate text-gray-900 underline hover:no-underline ">73 reviews</a>
                            </div>
                          </div>




                        </div>
                        <div>
                          <p className="text-xs truncate">starting from</p>
                          <p className="font-bold">$1110/hr</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="mt-2">
                    {/* <h5 className="mb-2 text-3xl text-start font-bold text-gray-900 ">Work fast from anywhere</h5> */}
                    <p className="mb-2 text-start text-gray-500 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                  </div>

                  <div className="flex flex-wrap justify-between">
                    <div className="flex items-center gap-2">

                      <AiOutlineHeart />
                      <p className="text-sm font-medium">Add to Save</p>
                    </div>
                    <div>
                      <button className="text-sm text-white font-medium bg-[#2c6777] rounded-full px-3  mr-2 py-1">Chat Now</button>
                      <button className="text-sm text-white font-medium bg-[#2c6777] rounded-full py-1 px-3 ">Chat Now</button>
                    </div>

                  </div>

                </div>

              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3 ">

                <div>
                  <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">

                    <h5 className="mb-3 p-2 text-base font-semibold text-black text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                      Educational Level
                    </h5>

                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                      <option >Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>

                    <div>


                      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>


                      {/* 
                      {ButtonData.slice(0, showCount).map((subject) => (
                        <div key={subject.id} className="flex items-center mb-4">
                          <input
                            id={`default-radio-${subject.id}`}
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`default-radio-${subject.id}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {subject.buttoncontant}
                          </label>
                        </div>
                      ))}
                      {showCount === 2 && (
                        <button onClick={handleLoadMore} className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2">
                          Load More
                        </button>
                      )} */}

                      {ButtonData.slice(0, showCount).map((subject) => (
                        <div key={subject.id} className="flex items-center mb-4">
                          <input
                            id={`default-checkbox-${subject.id}`}
                            type="checkbox"
                            checked={selectedSubjects.includes(subject.id)}
                            onChange={() => handleCheckboxChange(subject.id)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`default-checkbox-${subject.id}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {subject.buttoncontant}
                          </label>
                        </div>
                      ))}
                      {showCount === 2 && (
                        <button onClick={handleLoadMore} className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2">
                          Load More
                        </button>
                      )}



                    </div>

                    <div>
                      <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min-max range</label>
                      <input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div>




                  </div>



                </div>
              </div>

            </div>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindTutor;