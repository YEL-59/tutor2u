

const Cards = ({ carditem }) => {
  const { id, image,subject } = carditem
  //console.log(carditem.length)
  return (
    <>

      <div className="w-[15rem]  shadow-lg border border-blue-700 p-2 rounded-lg">
        <div className="flex gap-5 justify-center items-center ">
          <div >
            <img className="h-20 w-20 rounded" src={image } alt="404" />
          </div>
          <div>
            <p>{subject}</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Cards
