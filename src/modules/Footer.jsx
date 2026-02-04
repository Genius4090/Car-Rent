
import { useContext } from "react"
import { SiteLogo } from "../assets/images"
import { Context } from "../Context/Context"
import { Button, FooterItem } from "../components"
import { UpIcon } from "../assets/icons"
function Footer() {
  const { footerList1, footerList2, SocialIcons } = useContext(Context)


  return (
    <div className="border-t-2 border-[#E5E7EA]">
      <div className="container flex gap-[65px] px-40 pt-10 relative">
        <div className="w-[28%] flex flex-col gap-28 items-start ">
          <div className="flex flex-col gap-5 items-start w-[240px] ">
            <img src={SiteLogo} alt="site__logo" />
            <p className="text-xs text-[#555555] leading-5">
              Car rental offers a wide range of cars available for rent in Newark EWR Airport NJ. We pride ourselves in our customer service, and hassle-free renting experience.
            </p>
          </div>
          <p className="font-medium">© 2022 Car rental <br /> Terms & Conditions</p>
        </div>



        <div className="w-[72%]  flex flex-col gap-10 py-5">
          <div className="flex gap-[110px] items-start">
            {footerList1.map(item => <ul className="flex flex-col gap-4" key={item.id}>
              <h2 className="font-medium">{item.heading}</h2>
              {item.children.map(item2 => <FooterItem key={item2.id} item={item2} />)}
            </ul>)}
          </div>
          <div className="border-t-2 border-[#E5E7EA] py-10">
            <div className="flex gap-[110px]">
              {footerList2.map(item => <ul className="flex flex-col gap-4" key={item.id}>
                <h2 className="font-medium">{item.heading}</h2>
                {item.children.map(item2 => <FooterItem key={item2.id} item={item2} />)}


              </ul>)}
              <div className="flex flex-col gap-4">
                <h2 className="font-medium">Social Icons</h2>
                <ul className="flex gap-3.5">
                  {SocialIcons.map(item => <li key={item.id} className="bg-black rounded-full  w-[40px] h-[40px] flex items-center justify-center cursor-pointer">{item.icon}</li>)}
                </ul>
              </div>
            </div>

          </div>
        </div>
        <a href="#"><Button href="#" icon={<UpIcon/>} iconPos="left" extraStyle="extraStyle  " moreStyle="absolute px-7! py-6 bottom-16 right-0"/></a>
      </div>
    </div>
  )
}

export default Footer