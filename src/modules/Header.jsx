import { LoginIcon, MoonIcon } from "../assets/icons"
import { SiteLogo } from "../assets/images"
import Button from "../components/Button"
import {NavItem} from "../components/index"

const navList = [
    {
        id:1,
        title:"Categories",
        children: [],
        href: "#"
    },
    {
        id:2,
        title: "About Us",
        children: [
            { 
                id:3,
                title: "News",
                href: "#"
            },{
                id:4,
                title: "Careers",
                href: "#"
            },{
                id:5,
                title: "Locations",
                href: "#"
            }
        ]
    },
    {
        id:6,
        title: "Help Center",
        children:[
            {
                id:7,
                title: "FAQ",
                href: "#"
            },{
                id:8,
                title: "Contact us",
                href: "#"
            }
        ]
    }
]


function Header() {
  return (
    <header className="shadow-sm fixed w-full z-100 bg-white">
        <nav className="container  flex items-center justify-between py-[27px]">
            <div className="flex items-center gap-10">
            <img src={SiteLogo} alt="site__logo" />
            <ul className="flex gap-10 items-center">
                {
                    navList.map(item=> <NavItem key={item.id} content={item}/>)
                }
            </ul>
            </div>
            <div className="flex items-center gap-5">
                <p className="font-semibold text-lg mr-1">+1 855 420 0000</p>
                <Button  icon={<MoonIcon/>} iconPos="right"/>
               <Button title="Login" icon={<LoginIcon/>} iconPos="right" extraStyle="extraStyle"/>
            </div>
        </nav>
    </header>
  )
}

export default Header