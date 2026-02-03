import "./Hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {Slider1,Slider2,Slider3, SliderShadow} from "../../assets/images"
import Button from "../../components/Button";
import { SearchIcon } from "../../assets/icons";

const imgList = [
    {id:1, img:Slider2},
    {id:2, img:Slider3},
    {id:3, img:Slider1}
]

function Hero() {
  return (
   <div className=" flex items-center py-[140px]">
    <div className="container relative">
   
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper z-30 relative  rounded-[20px]">
        <img src={SliderShadow} alt="slider__shadow" className="absolute top-0 left-0 z-8"/>
        <div className="w-full absolute top-15 z-10">
            <h2 className="text-4xl text-white font-semibold text-center">Compact cars</h2>
            <p className="text-white text-center font-light mt-3">Rent cars as you are comfortable and where you are <br /> comfortable.</p>
        </div>
        {imgList.map(item=> <SwiperSlide key={item.id}><img src={item.img} alt="slider__img" /></SwiperSlide>)}
        
      </Swiper>
      <form className="w-[600px] shadow-xl bg-white  rounded-[100px] absolute z-9 -bottom-8 left-0 right-0 mx-auto flex py-1 px-1 justify-between">
        <input type="text" placeholder="Find the car of your dreams" className="w-full px-8 outline-none text-[#555555] text-lg font-semibold placeholder:text-[#555555]" />
        <Button  icon={<SearchIcon/>} iconPos="right"  moreStyle={"bg-[#299764]!"}/> 
      </form>
    </div>
   </div>
  )
}

export default Hero