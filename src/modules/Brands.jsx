import { useContext } from "react"
import { Context } from '../Context/Context';
function Brands() {
const {brandsList} = useContext(Context)

  return (
    <div>
        <div className="container py-[160px] flex flex-col gap-[34px]">
        <h2 className="text-2xl font-medium ml-4">More than 50 brands of cars</h2>
       <div className="flex justify-between">
       {brandsList.map(item=> <img key={item.id} src={item.img} alt="brand__img" />)}
       </div>
        </div>

    </div>
  )
}

export default Brands