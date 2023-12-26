//TutorDetails

import { useEffect, useState } from "react";

import B from "../../SharedComponents/Data/Tutotprofiledata/TutorProfiledata.json";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import TutorProfile from "../Props/TutorProfile/TutorProfile";
import Footer from "../../SharedComponents/Footer/Footer";
import ExploreTutordata from '../../SharedComponents/Data/ExploreTutordata/ExploreTutordata.json'

import ExploreTutor from "../Props/ExploreTutor";

const TutorProfileDetails = ({ tutorId, }) => {
  const [navfix, setNavfix] = useState(false);
  const [showCount, setShowCount] = useState(2);

  // const [tutorprofiledata, setTutorProfileData] = useState([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((response) => {
  //       setTutorProfileData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(tutorprofiledata);

  const setFixed = () => {
    setNavfix(window.scrollY >= 70);
  };

  window.addEventListener("scroll", setFixed);

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    const selectedSubjectsNames = selectedSubjects
      .map((id) => {
        const subject = ButtonData.find((item) => item.id === id);
        return subject ? subject.buttoncontant : null;
      })
      .filter(Boolean);

    console.log("Selected Subjects:", selectedSubjectsNames);
  }, [selectedSubjects]);

  const handleCheckboxChange = (id) => {
    setSelectedSubjects((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  const [loadmore, setLoadMore] = useState(4)

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
    setLoadMore(prevNum => prevNum + 3);
  
    // setSelectedSubjects(ButtonData.map(subject => subject.id));
  };

  const ButtonData = [
    { id: 1, buttoncontant: "Math" },
    { id: 2, buttoncontant: "English" },
    { id: 3, buttoncontant: "History" },
  ];

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
              <h3 className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">
                154,3 Search Result in “English” Tutor
              </h3>
              <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2 mt-10">
                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
                  {B.map((TutorProfileProps) => (
                    //console.log(TutorProfileProps.length)
                    <TutorProfile
                      key={TutorProfileProps.id}
                      TutorProfileProps={TutorProfileProps}
                      tutorId={tutorId}
                    />
                  ))}
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
                  <div>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">
                      <h5 className="mb-3 p-2 text-base font-semibold text-[#2c6777] text-center md:text-start rounded-t-lg  border-b-2 w-full md:text-xl ">
                        I Can Teach
                      </h5>

                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option>Class (1-5)</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div className="p-1">
                        <h3 className="mb-4 font-semibold text-[#2c6777] mt-1  ">
                          Subject
                        </h3>

                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div
                            key={subject.id}
                            className="flex items-center mb-4"
                          >
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
                          <button
                            onClick={handleLoadMore}
                            className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2"
                          >
                            Load More
                          </button>
                        )}
                      </div>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option>Class(6-10)</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5"
                      >
                        <option>Short Course </option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5 "
                      >
                        <option>Language Course</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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
      
      <section className="div3-Section w-full bg-[#dcecfa] " >
        <div className=" mt-25   container mx-auto">




          <div className=" p-5 md:p-0 ">

            <h1 className="text-[24px] text-[#2c6777] xl:text-[30px] lg:text-[30px] md:text-[27px] text-center py-16  font-[650] max-w-xl mx-auto ">Explore Related Tutors</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  p-2 md:p-0 justify-items-center     ">


            {
              ExploreTutordata.slice(0, loadmore).map((exploretutordata) => (

                <ExploreTutor key={exploretutordata.id} exploretutordata={exploretutordata}></ExploreTutor>

              ))
            }

          </div>
          <div className="text-center lg:mt-2 ">

            {ExploreTutordata.length > loadmore && (
              <button
                onClick={handleLoadMore}
                className="bg-[#2c6777] hover:bg-[#2c6777]  mb-10  text-white font-bold py-2 px-9 rounded-md "
              >
                Show More
              </button>
            )}

          </div>




        </div>



      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default TutorProfileDetails;