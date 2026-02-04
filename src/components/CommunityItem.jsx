import { BigGoogleIcon, StarIcon } from '../assets/icons';

function CommunityItem({item}) {
  return (
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
  )
}

export default CommunityItem