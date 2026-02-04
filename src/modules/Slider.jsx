import { useContext } from 'react';
import { GoogleIcon, GoogleLineIcon } from '../assets/icons';

import CommunityItem from '../components/CommunityItem';
import { Context } from '../Context/Context';

function Slider() {

const {googleList} = useContext(Context)
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
   <CommunityItem item={item} key={item.id}/>
  ))}
</ul>
      </div>
    </div>
  )
}

export default Slider