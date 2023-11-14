
import {AiOutlineHeart} from 'react-icons/ai'
import coverimg from '../../../assets/images/homepage/Maskgroup2.png'
const ExploreTutor = ({ exploretutordata }) => {
  const { id, name, city, phone, email, balance, picture } = exploretutordata
  return (
    <>


      <div>

        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-white dark:border-gray-700 mb-10">
          <a href="#">
            <img className="rounded-t-lg w-full shadow" src={coverimg} alt="404" />
          </a>
          <div className="p-3">
            <div className="flex items-center space-x-4 mb-3">

              <div className="flex-1 min-w-[244px]">
                <p className="text-lg font-bold text-[#2c6777] truncate ">
                  {name}
                </p>
                <p className="text-sm text-black truncate">
                  {city}
                </p>
              </div>
              <div className="inline-flex items-center text-xl font-medium text-gray-900 ">
              <AiOutlineHeart></AiOutlineHeart>
              </div>
            </div>


            <div className="flex items-center space-x-4">

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate ">
                  Mobile:
                </p>

              </div>
              <div className="inline-flex items-center text-base font-medium text-gray-900 ">
                {phone}
              </div>
            </div>
            <div className="flex items-center space-x-4">

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate ">
                  Email:
                </p>

              </div>
              <div className="inline-flex items-center text-base font-medium text-gray-900 ">
                {email}
              </div>
            </div>
            <div className="flex items-center space-x-4">

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate ">
                  Starting from:
                </p>

              </div>
              <div className="inline-flex items-center text-base font-medium text-gray-900 ">
                {balance}
              </div>
            </div>

            <div className="flex items-center space-x-4">

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate ">
                  Qualification:
                </p>

              </div>
              <div className="inline-flex items-center  text-sm font-medium text-gray-900 ">
                B.Tech/B.E.
              </div>
            </div>

          </div>
          <div>

            <div className="flex justify-center items-center mt-2.5  border-t-2  p-2">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>


              <span className=" text-black text-sm font-bold  ml-3">5.0 (10000)</span>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default ExploreTutor
