import { createContext, useState } from "react";
import {Car1,Car2,Car3,Car4,Car5,Car6,Car7,Car8,Car9,Car10,Car11,Car12,Car13,Car14,Car15,Car16} from "../assets/images"

const Context = createContext()



const CarContext = ({children}) => {

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
        setCars([...cars,newCar])    
        setOpenModal(false)
        }

    return (
        <Context.Provider value={{carsSortList,carsModelList,carManageList,carsTodoList,cars,setCars,openModal,setOpenModal,handleCreate}}>{children}</Context.Provider>
    )
}


export {Context,CarContext}