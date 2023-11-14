import { Link } from "react-router-dom"


const ResourcesCard = ({resourcecarddata}) => {
  const {id,image,Title,description}=resourcecarddata
  return (
    <>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight truncate text-[#2c6777] ">{Title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-800 line-clamp-3 ">{description}</p>
          <Link  to={'/tutor_download_resource'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2c6777] rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Download Now
          
          </Link>
        </div>
      </div>

    </>
  )
}

export default ResourcesCard
