import { useContext } from "react"
import { Context } from "../Context/Context"
import { ServiceItem } from "../components"


function Services() {

  const {servicesList} = useContext(Context)
  return (
    <div className="container flex flex-col items-center pt-[40px] pb-[140px]">
        <h2 className="text-4xl font-semibold">Unparalleled service</h2>
        <p className="text-[#555555] w-[684px] text-center leading-6 mt-2.5">Whether you are looking for Newark Airport car rental, an insurance replacement vehicle or minivan to take on vacation Car rental has it all.</p>
        <ul className="flex flex-wrap gap-5 justify-center mt-10">
{servicesList.map(item=> <ServiceItem key={item.title} item={item}/>)}
        </ul>
    </div>
  )
}

export default Services