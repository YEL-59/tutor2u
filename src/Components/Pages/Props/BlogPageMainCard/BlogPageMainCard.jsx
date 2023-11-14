import { BsHeart, BsShare } from 'react-icons/bs'
import { GoCopy } from 'react-icons/go'
import { Link } from 'react-router-dom'

const BlogPageMainCard = ({ blogmaincardprop }) => {
  const { id, picture, title, description, registered, time, tag } = blogmaincardprop
  return (
    <>

   
    <div key={id} className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <Link to={'/blog_detail'}>
          <img className="rounded-t-lg" src={picture} alt="" />
        </Link>

        <div className="p-3">
          <p>{tag}</p>
          <Link  to={'/blog_detail'}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight truncate text-[#2c6777] ">{title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-800 line-clamp-3 ">{description}</p>
       
          <div className="flex justify-between items-center">
            <div className='text-sm font-semibold'>
              <p>{registered[4 - 2]} september | {time}pm</p>
            </div>

            <div className="flex space-x-2 ">
              <div><BsHeart size={13}  /></div>
              <div><GoCopy size={13} /></div>
              <div><BsShare size={13} /></div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default BlogPageMainCard
