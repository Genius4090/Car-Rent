import { useContext, useState } from "react"

import { Button, CarItem, CreateForm, Modal } from "../components"
import { CloseIcon } from "../assets/icons"
import { Context } from "../Context/Context"








function Cars() {
  const {carsSortList,cars,openModal,setOpenModal} = useContext(Context)

  
  return (
<section className="">
  <div className="container flex flex-col items-center gap-4 py-10 relative">
  <h2 className="font-semibold text-4xl">Choose the car of your dreams</h2>
  <Button onClick={()=> setOpenModal(true)} title="Create +" extraStyle={"extraStyle"} moreStyle={"border bg-white! py-3! text-purple-600! border-purple-600! absolute top-[191px] right-45 hover:bg-purple-600! hover:text-white! duration-300"}/>
<p className="text-[#555555] text-center leading-6">We provide our customers with the most incredible driving emotions. <br /> That is why there are only world-class cars in our fleet</p>
<div className="flex mt-6 gap-4">
  {carsSortList.map(item => <Button key={item.id} title={item.title} moreStyle={"bg-white border border-gray-400 py-[19px]! px-[40px]!"}/>)}
</div>
<ul className="flex flex-wrap justify-center items-center gap-4 py-6">{cars.length > 0 ? (cars.map(item => <CarItem key={item.id} item={item}/>)) : (<p className="font-semibold text-lg">No cars...</p>)}</ul>
 <Button title="View all cars" extraStyle={"extraStyle"}/>
  </div>

  <Modal openModal={openModal} setOpenModal={setOpenModal}>
    <Button onClick={()=> setOpenModal()} icon={<CloseIcon/>} iconPos="right" moreStyle={"p-4.5! absolute right-2 top-2"}/>
     <CreateForm />

  </Modal>


</section>
  )
}

export default Cars
