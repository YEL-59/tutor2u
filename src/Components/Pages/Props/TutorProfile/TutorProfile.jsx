import aboutsideimg from "../../../../assets/AboutUs/about-us-side-banner.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BiIdCard } from "react-icons/bi";
import { Link } from "react-router-dom";

const TutorProfile = ({ TutorProfileProps }) => {
  const { id, name, rating, balance, title } = TutorProfileProps;
  return (
    <>
      <div
        key={id}
        className="w-full  p-4 mt-5 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      >
        <div>
          {/* <div>
            <div className="flex flex-wrap  justify-between ">
            <img className="w-28 h-28 rounded" src={aboutsideimg} alt="" />
              <div className="flex space-x-2 justify-center items-start">
               

                <div className="flex flex-col ">
                  <p className="text-start font-bold">{name}</p>
                  <div className="flex flex-wrap space-x-1">
                    <svg
                      className="w-4 h-4  text-yellow-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2  text-sm font-medium text-gray-900 ">
                      4{rating}
                    </p>
                    <BiIdCard className="h-5" />
                    <a
                      href="#"
                      className="text-sm font-medium truncate text-gray-900 underline hover:no-underline "
                    >
                      #{id}
                    </a>
                  </div>
                  <p className="text-md truncate text-start font-bold">{title}</p>
                </div>
              </div>
              <div>
                <p className="text-xs truncate">starting from</p>
                <p className="font-bold">{balance}/hr</p>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3 ">
              {" "}
              <img className="w-full h-28 rounded" src={aboutsideimg} alt="" />
            </div>
            <div className="col-span-9">
              <div className="flex justify-between">
                <p className="text-start font-bold">{name}</p>

                <div>
                  <p className="text-xs truncate">starting from</p>
                  <p className="font-bold">{balance}/hr</p>
                </div>
              </div>
              <p className="text-sm text-start truncate">{title}</p>
              <div className="flex justify-between">
                <div className="flex flex-wrap space-x-1">
                  <svg
                    className="w-4 h-4  text-yellow-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2  text-xs font-medium text-gray-900 ">
                    {rating}5.0(1000)
                  </p>
                </div>
                <div className="flex flex-wrap space-x-1">
                  <svg
                    className="w-4 h-4  text-yellow-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2  text-xs font-medium text-gray-900 ">
                    4 95% job Complete
                  </p>
                </div>
              </div>
              <p className="text-sm text-start">Language I know</p>
              <div className="flex flex-wrap space-x-1 text-start">
                <p className="  text-xs font-medium text-gray-900 ">English</p>
                <p className="ml-2  text-xs font-medium text-gray-900 ">
                  Hindi
                </p>
                <p className="ml-2  text-xs font-medium text-gray-900 ">Urdu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          {/* <h5 className="mb-2 text-3xl text-start font-bold text-gray-900 ">Work fast from anywhere</h5> */}
          <p className="mb-2 text-start text-gray-500 text-sm line-clamp-3">
            {}
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="flex items-center gap-2">
            <AiOutlineHeart />
            <p className="text-sm font-medium">Add to Save</p>
          </div>
          <div>
            <button className="text-sm text-white font-medium bg-[#2c6777] rounded-full px-3  mr-2 py-1">
              Chat Now
            </button>
            <Link
              to={`/tutor_details/${id}`}
              className="text-sm text-white font-medium bg-[#2c6777] rounded-full py-1 px-3 "
            >
              View profilel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorProfile;
