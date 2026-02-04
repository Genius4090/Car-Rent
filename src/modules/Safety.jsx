import { useContext } from "react"
import { Context } from "../Context/Context"
import SafetyItem from "../components/SafetyItem"
import { SafetyGuy } from "../assets/images"

function Safety() {

    const {safetyList} = useContext(Context)
  return (
    <div className="pb-[160px] container px-40">
        <div className=" border border-[#E5E7EA] rounded-[20px] h-[500px] flex items-end justify-between px-[32px] ">
            <div className="flex flex-col justify-center gap-[94px] h-full">
      <div>
      <h2 className="font-semibold text-4xl">Car rental keeps you safe</h2>
      <p className="text-[#555555] w-[590px] mt-2">The safety of our employees and renters is our number one priority. In addition to being confident your vehicle is cleaned and sanitized every time you rent, you can also feel confident that we will take every opportunity to enhance the health and safety measures currently practiced in our operations.</p>
      </div>
      <ul className="flex gap-2.5 cl">
   {safetyList.map(item=> <SafetyItem key={item.title} item={item}/>)}
      </ul>
            </div>
            <div className="relative w-full h-full ">
            <div className="absolute bottom-45 right-20 w-[300px] h-[300px] rounded-full bg-[#299764]">
            </div>
            <img src={SafetyGuy} alt="safety__img"  className="absolute bottom-0 right-10"/>
            </div>
  
        </div>
    </div>
  )
}

export default Safety