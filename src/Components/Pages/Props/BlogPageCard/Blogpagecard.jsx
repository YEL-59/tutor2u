

const Blogpagecard = ({ blogcardprop }) => {
  const { id, image, Title, buttontext } = blogcardprop
  return (
    <>

      <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow mt-5">
        <div className="flex items-center space-x-4 p-2 ">
          <div className="flex-shrink-0">
            <img className="w-20 h-20 rounded" src={image} alt="Neil image" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900  dark:text-white">
              {Title}
            </p>

            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {buttontext}
            </p>
          </div>

        </div>
      </div>


    </>
  )
}

export default Blogpagecard
