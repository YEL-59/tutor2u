

const Cards = ({ carditem }) => {
  const { id, image,subject } = carditem
  //console.log(carditem.length)
  return (
    <>

      <div className="w-full  shadow-xl border  p-2 rounded-lg">
        <div className="flex gap-5 items-center ">
          <div  className="rounded-md border bg-[#f3f4f6] shadow-lg">
            <img className="h-20 w-20 rounded " src={image } alt="404" />
          </div>
          <div>
            <p className="font-bold  text-gray-800">{subject}</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Cards
