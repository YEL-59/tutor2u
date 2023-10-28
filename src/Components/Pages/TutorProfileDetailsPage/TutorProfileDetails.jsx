//TutorDetails

import { useEffect, useState } from "react";

import B from "../../SharedComponents/Data/TutorProfilefdata/TutorProfiledata.json";
import FindTutors from "../Props/FindTutor/FindTutors";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import TutorProfile from "../Props/TutorProfile/TutorProfile";

const TutorProfileDetails = () => {
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

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
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
        className={`z-10 ${
          navfix ? "top-0 h-[4%] w-full fixed bg-[white]" : ""
        }`}
      >
        <Navbars className="relative" />
      </div>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">
              <h3 className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">
                154,3 Search Result in “English” Tutor
              </h3>
              <div className="grid grid-cols-12 gap-4  p-2 mt-10">
                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
                  {
                    B.map((TutorProfileProps) => (
                      //console.log(TutorProfileProps.length)
                      <TutorProfile
                        key={TutorProfileProps.id}
                        TutorProfileProps={TutorProfileProps}
                      />
                    ))}
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
                  <div>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">
                      <h5 className="mb-3 p-2 text-base font-semibold text-black text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                        Educational Level
                      </h5>

                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div>
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                          Identification
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
                          <button
                            onClick={handleLoadMore}
                            className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2"
                          >
                            Load More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center bg-[#2c6777] rounded-md p-5 mt-5 mb-5">
                <div className="text-white">
                  <h2 className="text-2xl font-semibold">
                    Request the best tutor for your child
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black text-sm font-normal px-3 py-2 rounded-full">
                    Request a Tutor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorProfileDetails;
