import "./Hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Slider1, Slider2, Slider3, SliderShadow } from "../../assets/images"
import Button from "../../components/Button";
import { PlayerLeftIcon, PlayerRightIcon, SearchIcon } from "../../assets/icons";

const imgList = [
    { id: 1, img: Slider2 },
    { id: 2, img: Slider3 },
    { id: 3, img: Slider1 }
]

function Hero() {
    return (
        <div className="flex items-center py-[140px]">
            
            <div className="container relative">
                <Swiper
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper relative rounded-[20px]"
                >
                    <img src={SliderShadow} alt="slider__shadow" className="absolute top-0 left-0 z-10" />
                    <div className="w-full absolute top-15 z-10 px-8">
                        <h2 className="text-4xl text-white font-semibold text-center">Compact cars</h2>
                        <p className="text-white font-light mt-3 text-center ">
                            Rent cars as you are comfortable and where you are <br /> comfortable.
                        </p>
                    </div>
                    {imgList.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.img} alt="slider__img" />
                        </SwiperSlide>
                    ))}

                    <div className="custom-navigation absolute bottom-10 right-10 z-20 flex gap-2">
                        <button className="custom-prev cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
                            <PlayerLeftIcon />
                        </button>
                        <button className="custom-next cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
                            <PlayerRightIcon />
                        </button>
                    </div>
                </Swiper>

                <form className="w-[600px] shadow-xl bg-white rounded-[100px] absolute z-30 -bottom-8 left-0 right-0 mx-auto flex py-1 px-1 justify-between">
                    <input
                        type="text"
                        placeholder="Find the car of your dreams"
                        className="w-full px-8 outline-none text-[#555555] text-lg font-semibold placeholder:text-[#555555]"
                    />
                    <Button icon={<SearchIcon />} iconPos="right" moreStyle={"bg-[#299764]!"} />
                </form>
            </div>
        </div>
    )
}

export default Hero 