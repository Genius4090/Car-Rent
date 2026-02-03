import { useState } from "react"
import {Car1,Car2,Car3,Car4,Car5,Car6,Car7,Car8,Car9,Car10,Car11,Car12,Car13,Car14,Car15,Car16} from "../assets/images"
import { Button, CarItem, Modal } from "../components"
import { CloseIcon } from "../assets/icons"




const carsSortList = [
  {
    id: 1,
    title: "Compact"
  },
  {
    id: 2,
    title: "Sports cars"
  },
  {
    id: 3,
    title: "Vans"
  }
]

const carsModelList = [
  {
    id: 1,
    title: "Economy Car"
  },
  {
    id: 2,
    title: "Compact Car"
  },
  {
    id: 3,
    title: "Mid-size Car"
  },
  {
    id: 4,
    title: "Full-size Car"
  },
  {
    id: 5,
    title: "Mid-size SUV"
  },
  {
    id: 6,
    title: "Full-size SUV"
  },

]


const carManageList = [
  {
    id: 1,
    title: "Automatic"
  },
  {
    id: 2,
    title: "Manual"
  },
]

const carsTodoList = [
  {
    id: 1,
    title: "Ford Fiesta",
    img: Car1,
    seats: "5",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "21+ Years",
    consumption: "1-lit / 2.5 km",
    carModel: "Economy Car",
    carModelId: 1,
    carTypeId: 1
  },
  {
    id: 2,
    title: "Nissan Versa",
    img: Car2,
    seats: "5",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "18+ Years",
    consumption: "2-lit / 2.5 km",
    carModel: "Compact Car",
    carModelId: 2,
    carTypeId: 1
  },
  {
    id: 3,
    title: "Toyota Corolla",
    img: Car3,
    seats: "5",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "18+ Years",
    consumption: "2-lit / 2.5 km",
    carModel: "Mid-size Car",
    carModelId: 3,
    carTypeId: 1
  },
  {
    id: 4,
    title: "Nissan Rogue",
    img: Car4,
    seats: "6",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "18+ Years",
    consumption: "2-lit / 2.5 km",
    carModel: "Mid-size SUV",
    carModelId: 5,
    carTypeId: 1
  },
  {
    id: 5,
    title: "Chevy Traverse",
    img: Car5,
    seats: "7",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "24+ Years",
    consumption: "3-lit / 5 km",
    carModel: "Full-size SUV",
    carModelId: 6,
    carTypeId: 1
  },
  {
    id: 6,
    title: "Nissan Altima",
    img: Car6,
    seats: "4",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "17+ Years",
    consumption: "2-lit / 4 km",
    carModel: "Full-size Car",
    carModelId: 4,
    carTypeId: 1
  },
  {
    id: 7,
    title: "Royce rolls ghost",
    img: Car7,
    seats: "4",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "30+ Years",
    consumption: "1-lit / 2.5 km",
    carModel: "Full-size Car",
    carModelId: 4,
    carTypeId: 2
  },
  {
    id: 8,
    title: "Mercedes s class",
    img: Car8,
    seats: "4",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "18+ Years",
    consumption: "1-lit / 2.5 km",
    carModel: "Full-size Car",
    carModelId: 4,
    carTypeId: 2
  },
  {
    id: 9,
    title: "Lamborghini urus",
    img: Car9,
    seats: "5",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "18+ Years",
    consumption: "2-lit / 2.5 km",
    carModel: "Mid-size Car",
    carModelId: 3,
    carTypeId: 2
  },
  {
    id: 10,
    title: "Mercedes g63 amg",
    img: Car10,
    seats: "8",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "24+ Years",
    consumption: "1.5-lit / 2.5 km",
    carModel: "Mid-size SUV",
    carModelId: 5,
    carTypeId: 2
  },
{
    id: 11,
    title: "15-Passenger Ford Transit ",
    img: Car11,
    seats: "15",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "28+ Years",
    consumption: "1-lit / 3.5 km",
    carModel: "Full-size Car",
    carModelId: 4,
    carTypeId: 3
  },
  {
    id: 12,
    title: "Chrysler Pacifica",
    img: Car12,
    seats: "8",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "18+ Years",
    consumption: "2-lit / 2.7 km",
    carModel: "Full-size Car",
    carModelId: 4,
    carTypeId: 3
  },
  {
    id: 13,
    title: "Chevy Silverado 4500HD",
    img: Car13,
    seats: "5",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "14+ Years",
    consumption: "2-lit / 3 km",
    carModel: "Mid-size Car",
    carModelId: 3,
    carTypeId: 3
  },
  {
    id: 14,
    title: "12-Passenger Ford Transit",
    img: Car14,
    seats: "2",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "14+ Years",
    consumption: "2-lit / 2.5 km",
    carModel: "Mid-size SUV",
    carModelId: 5,
    carTypeId: 3
  },
  {
    id: 15,
    title: "15-Passenger Ford Transit ",
    img: Car15,
    seats: "18",
    manageType: "Manual",
    manageId: 2,
    yearlyMade: "24+ Years",
    consumption: "3-lit / 5 km",
    carModel: "Mid-size SUV",
    carModelId: 5,
    carTypeId: 3
  },
  {
    id: 16,
    title: "Mercedes-Benz Sprinter",
    img: Car16,
    seats: "4",
    manageType: "Automatic",
    manageId: 1,
    yearlyMade: "21+ Years",
    consumption: "2-lit / 6 km",
    carModel: "Mid-size SUV",
    carModelId: 5,
    carTypeId: 3
  },
]



function Cars() {
  const [cars, setCars] = useState(carsTodoList)
  const [openModal,setOpenModal] = useState(false)
  function handleCreate(e){
    e.preventDefault()
    const findCarModelContent = carsModelList.find(item => item.id == e.target.carModel.value)
    const newCar = {
      id: cars.length + 1,
      title: e.target.title.value,
      img: e.target.image.value,
      seats: e.target.seats.value,
      manageType: "Manual",
      manageId: e.target.carManage.value,
      yearlyMade: e.target.madeFrom.value,
      consumption: e.target.consumption.value,
      carModel:  e.target.carModel.value,
      carModelId: findCarModelContent.title,
      carTypeId: e.target.carSort.value
    }
    console.log(newCar);
    
    setCars([...cars,newCar])    
    setOpenModal(false)
    }
  return (
<section className="h-[1200px]">
  <div className="container flex flex-col items-center gap-4 relative">
  <h2 className="font-semibold text-4xl">Choose the car of your dreams</h2>
  <Button onClick={()=> setOpenModal(true)} title="Create +" extraStyle={"extraStyle"} moreStyle={"border bg-white! py-3! text-purple-600! border-purple-600! absolute top-[151px] right-45  hover:bg-purple-600! hover:text-white! duration-300"}/>
<p className="text-[#555555] text-center leading-6">We provide our customers with the most incredible driving emotions. <br /> That is why there are only world-class cars in our fleet</p>
<div className="flex mt-6 gap-4">
  {carsSortList.map(item => <Button key={item.id} title={item.title} moreStyle={"bg-white border border-gray-400 py-[19px]! px-[40px]!"}/>)}
</div>
<ul className="flex flex-wrap justify-center items-center gap-4 py-6">{cars.map(item => <CarItem key={item.id} item={item}/>)}</ul>
  </div>

  <Modal openModal={openModal} setOpenModal={setOpenModal}>
    <Button onClick={()=> setOpenModal()} icon={<CloseIcon/>} iconPos="right" moreStyle={"p-4.5! absolute right-4 top-4"}/>
    <form onSubmit={handleCreate} className="flex flex-col items-center justify-center gap-4 h-full px-10 ">
      <h2 className="font-semibold text-lg">Create new Car:</h2>
      <input required name="title" type="text" placeholder="title" className="outline-none border w-full py-1 rounded-[6px] px-2"/>
      <input required name="image" type="text" placeholder="image" className="outline-none border w-full py-1 rounded-[6px] px-2"/>
      <input required name="seats" type="number" placeholder="seats" className="outline-none border w-full py-1 rounded-[6px] px-2"/>
      <select  name="carManage" className="outline-none border w-full py-1 rounded-[6px] px-2">
        {carManageList.map(item=>  <option key={item.id} value={item.id}>{item.title}</option>)}
       
      </select>
      <input required name="madeFrom" type="text" placeholder="how long have its been made" className="outline-none border w-full py-1 rounded-[6px] px-2"/>
      <input required name="consumption" type="text" placeholder="fuel/electricity consumption" className="outline-none border w-full py-1 rounded-[6px] px-2"/>
      <select  name="carModel" className="outline-none border w-full py-1 rounded-[6px] px-2">
      {carsModelList.map(item=> <option key={item.id} value={item.id}>{item.title}</option>)}
      </select>
      <select  name="carSort" className="outline-none border w-full py-1 rounded-[6px] px-2">
        {carsSortList.map(item=>    <option key={item.id} value={item.id}>{item.title}</option>)}
     
      </select>
      <Button title={"Create"} extraStyle={"extraStyle"} moreStyle={"px-10! py-2"}/>
    </form>
  </Modal>


</section>
  )
}

export default Cars
