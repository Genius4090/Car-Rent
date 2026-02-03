import { DownIcon } from "../assets/icons"

function NavItem({content}) {
  return (
  <>
  {   !content.children.length > 0 ? ( <a className="font-medium text-lg" href={content.href}>{content.title}</a>) : (
  <div className="group relative">
   <p className="cursor-pointer flex items-center gap-1 font-medium text-lg">{content.title} {<DownIcon/>}</p>
   <div className="opacity-0 group-hover:opacity-100 duration-200  absolute shadow-md bg-white p-5 border border-gray-200 flex flex-col gap-4 rounded-[20px]">
    {content.children.map(item=> <a href={item.href} className=" font-medium text-md hover:underline" key={item.id}>{item.title}</a>)}
    </div>
 </div>
)}
  </>
  
  )
}

export default NavItem