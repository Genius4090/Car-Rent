import { createContext, useState } from "react";
import { Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8, Car9, Car10, Car11, Car12, Car13, Car14, Car15, Car16, GoogleUser1, GoogleUser2, GoogleUser3, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6 } from "../assets/images"
import { SafeIcon1, SafeIcon2, SafeIcon3, ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4 } from "../assets/icons";
import { SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4 } from "../assets/icons"
const Context = createContext()



const CarContext = ({ children }) => {

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



  const googleList = [
    {
      id: 1,
      avatar: GoogleUser1,
      userName: "Savannah Nguyen",
      userEmail: "savannahnguyen@gmail.com",
      desc: "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
      rating: "5"
    },
    {
      id: 2,
      avatar: GoogleUser2,
      userName: "Ronald Richards",
      userEmail: "ronaldrichards@gmail.com",
      desc: "Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. ",
      rating: "5"
    },
    {
      id: 3,
      avatar: GoogleUser3,
      userName: "Savannah Nguyen",
      userEmail: "savannahnguyen@gmail.com",
      desc: "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
      rating: "5"
    }
  ]

  const brandsList = [
    {
      id: 1,
      img: Brand1
    },
    {
      id: 2,
      img: Brand2
    },
    {
      id: 3,
      img: Brand3
    },
    {
      id: 4,
      img: Brand4
    },
    {
      id: 5,
      img: Brand5
    },
    {
      id: 6,
      img: Brand6
    }
  ]

  const servicesList = [
    {
      title: "Book online,pay online",
      icon: <ServiceIcon1 />,
      desc: "Complete the booking process A-Z, with our easy online system"
    },
    {
      title: "Guaranteed car reservation",
      icon: <ServiceIcon2 />,
      desc: "When you book with Car rental, you can be confident your car will be waiting for you"
    },
    {
      title: "Unparalleled customer service",
      icon: <ServiceIcon3 />,
      desc: "We're here to help. We pride ourselves in our customer service"
    },
    {
      title: "No reservation or booking fees",
      icon: <ServiceIcon4 />,
      desc: "No cancellation fees if cancelled 24 hours prior to booking time"
    }
  ]

  const safetyList = [
    {
      icon: <SafeIcon1 />,
      title: "Every car is thoroughly sanitized and cleaned"
    },
    {
      icon: <SafeIcon2 />,
      title: "All of our employees wear masks"
    },
    {
      icon: <SafeIcon3 />,
      title: "We stay up to date with all protocol from the CDC"
    }
  ]
  const footerList1 = [
    {
      id: 1,
      heading: "Main",
      children: [
        {
          id: 2,
          title: "My Bookings",
        },
        {
          id: 3,
          title: "Reservation",
        }
      ]
    },

    {
      id: 4,
      heading: "Categories",
      children: [
        {
          id: 5,
          title: "Compact",
        },
        {
          id: 6,
          title: "Sports cars",
        },
        {
          id: 7,
          title: "Vans",
        }
      ]
    },

    {
      id: 8,
      heading: "Company",
      children: [
        {
          id: 9,
          title: "About us",
        },
        {
          id: 10,
          title: "Careers",
        },
        {
          id: 11,
          title: "News",
        },
        {
          id: 12,
          title: "Contact us",
        }
      ]
    },

    {
      id: 13,
      heading: "Our Locations",
      children: [
        {
          id: 14,
          title: "2118 Thornridge Cir. Syracuse",
        },
        {
          id: 15,
          title: "4140 Parker Rd. Allentown",
        },
        {
          id: 16,
          title: "4517 Washington Ave.",
        }
      ]
    }
  ]
  const footerList2 = [
    {
      id: 1,
      heading: "Contact",
      children: [
        {
          id: 2,
          title: "+1 855 420 0000",
        },
        {
          id: 3,
          title: "carrental@gmail.com",
        }
      ]
    },
    {
      id: 4,
      heading: "Hours of operation",
      children: [
        {
          id: 5,
          title: "8:00 - 21:00 Mon-Sat",
        },
        {
          id: 6,
          title: "9:00 - 15:00 Sundays",
        }
      ]
    },

  ]

const SocialIcons = [
      {
        id: 1,
        icon: <SocialIcon1 />
      },
      {
        id: 2,
        icon: <SocialIcon2 />
      },
      {
        id: 3,
        icon: <SocialIcon3 />
      },
      {
        id: 4,
        icon: <SocialIcon4 />
      }

]
  const [cars, setCars] = useState(carsTodoList)
  const [openModal, setOpenModal] = useState(false)
  function handleCreate(e) {
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
      carModel: e.target.carModel.value,
      carModelId: findCarModelContent.title,
      carTypeId: e.target.carSort.value
    }
    setCars([...cars, newCar])
    setOpenModal(false)
  }
  function handleDelete(id) {
    const ItemIndex = cars.findIndex(item => item.id == id)
    cars.splice(ItemIndex, 1)
    setCars([...cars])
  }
  return (
    <Context.Provider value={{ carsSortList, carsModelList, carManageList, carsTodoList, cars, setCars, openModal, setOpenModal, handleCreate, handleDelete, googleList, brandsList, servicesList, safetyList, footerList1, footerList2,SocialIcons}}>{children}</Context.Provider>
  )
}


export { Context, CarContext }