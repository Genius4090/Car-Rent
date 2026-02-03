import { useContext } from "react"
import { CarModeIcon, CarOilIcon, CarUserIcon, CarYearIcon } from "../assets/icons"
import Button from "./Button"
import { Context } from "../Context/Context"
function CarItem({item}) {
  const {handleDelete} = useContext(Context)
  return (
    <li className="w-[387px]  bg-[#F5F5F5] rounded-3xl px-6 py-[20px] flex flex-col justify-center gap-4">
    <div>
    <h2 className="font-semibold text-2xl">{item.title}</h2>
    <h3 className="text-[#555555] mt-2">{item.carModel}</h3>
    </div>
      <img src={item.img} alt={item.title} className="my-2" />
      <ul className="grid grid-cols-2 gap-4 ">
       <li className="flex items-center gap-3 font-semibold"><CarUserIcon/>{item.seats} Seats</li>
       <li className="flex items-center gap-3 font-semibold"><CarModeIcon/>{item.manageType}</li>
       <li className="flex items-center gap-3 font-semibold"><CarYearIcon/>{item.yearlyMade}</li>
       <li className="flex items-center gap-3 font-semibold"><CarOilIcon/> {item.consumption}</li>
      
      </ul>
      <Button title={"delete"} moreStyle={"bg-red-500 text-white py-2"} onClick={()=> handleDelete(item.id)}/>
    </li>
  )
}

export default CarItem