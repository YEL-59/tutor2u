

const Cards = ({ carditem }) => {
  const { id, image,subject } = carditem
  //console.log(carditem.length)
  return (
    <>

      <div className="w-full  shadow-lg border border-[#089bab] p-2 rounded-lg">
        <div className="flex gap-5 items-center ">
          <div >
            <img className="h-20 w-20 rounded " src={image } alt="404" />
          </div>
          <div>
            <p className="font-bold">{subject}</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Cards
