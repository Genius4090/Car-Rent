import { BigGoogleIcon, GoogleIcon, GoogleLineIcon, StarIcon } from '../assets/icons';
import { GoogleUser1, GoogleUser2, GoogleUser3 } from '../assets/images';
import {Button} from "../components"

const googleList = [
  {
    id:1,
    avatar: GoogleUser1,
    userName: "Savannah Nguyen",
    userEmail: "savannahnguyen@gmail.com",
    desc: "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
    rating: "5"
  },
  {
    id:2,
    avatar: GoogleUser2,
    userName: "Ronald Richards",
    userEmail: "ronaldrichards@gmail.com",
    desc: "Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. ",
    rating: "5"
  },
  {
    id:3,
    avatar: GoogleUser3,
    userName: "Savannah Nguyen",
    userEmail: "savannahnguyen@gmail.com",
    desc: "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
    rating: "5"
  }
]

function Slider() {
  return (
    <div className='bg-[#F5F5F5] w-full py-[100px]'>
      <div className="container flex justify-between items-center bg-white h-[497px] rounded-[20px] overflow-hidden">
     <div className='w-[330px] flex flex-col gap-[30px] items-start ml-[70px] '>
      <div>
      <div className='flex items-center gap-2'>
       <GoogleIcon/>
       <p className='text-[#4285F4] font-medium'>From Google</p>
       </div>
       <h3 className='font-medium text-[38px] mt-4'>Hear what the community is saying</h3>
      </div>
       <GoogleLineIcon/>
      <div>
      <p className='text-[#555555] text-sm'>More interesting reviews on Instagram</p>
       <button className="cursor-pointer relative mt-4 inline-flex rounded-full p-[2px] bg-linear-to-r from-pink-500 via-purple-500 to-orange-400">
  <span className="flex items-center justify-center rounded-full bg-white px-10 py-3 text-lg font-medium text-pink-500">
    Instagram
  </span>
</button>
      </div>

     </div>


     <ul className='bg-[#299764] h-full w-[58%] flex items-center overflow-x-auto scroll-smooth custom-scrollbar px-10'>
  {googleList.map(item => (
    <li 
      key={item.id} 
      className='w-[420px] h-[333px] bg-white rounded-3xl shrink-0 mx-4'
    >
      <div className='p-6 h-full flex flex-col'>
        <div className='flex items-center mb-4'>
          <img 
            src={item.avatar} 
            alt="user__avatar" 
            className='w-12 h-12 rounded-full mr-4'
          />
          <span className='flex-1'>
            <h4 className='font-semibold text-lg'>{item.userName}</h4>
            <p className='text-gray-500 text-sm'>{item.userEmail}</p>
          </span>
          <BigGoogleIcon className='text-blue-500'/>
        </div>
        <p className='flex-1 text-sm mb-4 border-b-2 border-[#E5E7EA]'>{item.desc}</p>
        <div className='flex items-center'>
          <span className='mr-2 font-medium'>Star rating:</span>
          <ul className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className='w-5 h-5 text-yellow-500'/>
            ))}
          </ul>
        </div>
      </div>
    </li>
  ))}
</ul>
      </div>
    </div>
  )
}

export default Slider