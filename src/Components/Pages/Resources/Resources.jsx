import { useEffect, useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';

import StarRating from "../../SharedComponents/Helper/StarRating/StarRating";

import Resourcescarddata from "../../SharedComponents/Data/ResourcesCarddata/Resourcescarddata.json"
import ResourcesCard from "../Props/Resources/ResourcesCard";
import { motion } from "framer-motion";
import Footer from "../../SharedComponents/Footer/Footer";

const Resources = () => {
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

  ];


  const [selectedStars1, setSelectedStars1] = useState([]);
  const [selectedStars2, setSelectedStars2] = useState([]);
  const handleClearFilter = (setSelectedStars) => {
    setSelectedStars([]);
  };





  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Resourcescarddata.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
        <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbars className="relative " />
      </div>



      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">

              <motion.h3 initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">Download the resources you need, see it here.</motion.h3>
              <motion.p initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="max-w-lg text-center mx-auto">Find whats best to support your learning and improve your knowledge further. we have what you need here.</motion.p>
              <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="grid grid-cols-12 gap-4 xl:gap-10  p-2 mt-10">

                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">

                  <div>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">

                      <h5 className="mb-3 p-2 text-base font-semibold text-black text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                        Filter Resources
                      </h5>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                          <input
                            type="search"
                            id="search"
                            {...register('search')}
                            value={searchValue}
                            onChange={(e) => setValue('search', e.target.value)}
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"

                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute right-2 bottom-[5px] bg-[#2c6777] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 "
                          >
                            Search
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {ButtonData.map((btn) => (
                            <button
                              key={btn.id}
                              type="button"
                              className="text-black bg-white hover:bg-[#089bab] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm  text-center inline-flex items-center"
                              onClick={() => handleClick(btn.buttoncontant)}
                            >
                              {btn.buttoncontant}
                              <RxCross2 className="ml-3 h-3.5 w-3.5" />
                            </button>
                          ))}
                        </div>
                      </form>
                      <div className="mt-2 mb-2">
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 ">Educational Level</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                          <option >Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                      </div>
                      <div>
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 ">Divission</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 ">
                          <option  >Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                      </div>
                      <div>


                        <h3 className="mb-4 font-semibold text-gray-900 ">Chose Subject</h3>





                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div key={subject.id} className="flex items-center mb-4">
                            <input
                              id={`default-checkbox-${subject.id}`}
                              type="checkbox"
                              checked={selectedSubjects.includes(subject.id)}
                              onChange={() => handleCheckboxChange(subject.id)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            />
                            <label
                              htmlFor={`default-checkbox-${subject.id}`}
                              className="ml-2 text-sm font-medium text-gray-900 "
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
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 ">Min-max range</label>
                        <input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " />
                      </div>


                      <div>
                        <StarRating
                          selectedStars={selectedStars1}
                          setSelectedStars={setSelectedStars1}
                          clearFilter={() => handleClearFilter(setSelectedStars1)}
                        />
                        <StarRating
                          selectedStars={selectedStars2}
                          setSelectedStars={setSelectedStars2}
                          clearFilter={() => handleClearFilter(setSelectedStars2)}
                        />

                      </div>

                      <button
                        onClick={() => {
                          handleClearFilter(setSelectedStars1);
                          handleClearFilter(setSelectedStars2);
                        }}
                        className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2"
                      >
                        Clear Filter
                      </button>


                    </div>



                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">





                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 xl:gap-10 p-2 lg:p-0">


                    {
                      currentItems.map((resourcecarddata) => (

                        <ResourcesCard key={resourcecarddata.id} resourcecarddata={resourcecarddata} />

                      ))
                    }

                  </div>
                  <div className="flex justify-center mt-4">
                    {Resourcescarddata.length > itemsPerPage && (
                      <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-sm">
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage > 1) {
                                  paginate(currentPage - 1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Previous
                            </button>
                          </li>
                          {Array.from({ length: Math.ceil(Resourcescarddata.length / itemsPerPage) }, (_, i) => (
                            <li
                              key={i}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${i + 1 === currentPage ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              <button onClick={() => paginate(i + 1)} className="pagination-link">
                                {i + 1}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage < Math.ceil(Resourcescarddata.length / itemsPerPage)) {
                                  paginate(currentPage + 1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${currentPage === Math.ceil(Resourcescarddata.length / itemsPerPage)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>




                  {/* <div className="text-center lg:mt-10">

{Resourcescarddata.length > loadmore && (
  <button
    onClick={handleLoadMore}
    className="bg-[#2c6777] hover:bg-blue-700  mb-10 rounded text-white font-bold py-2 px-9 rounded mt-4"
  >
    Show More
  </button>
)}

</div> */}

                </div>


              </motion.div>
            </div>


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


              </div>

            </section>
          </div>
        </div>
      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default Resources;