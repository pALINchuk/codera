import { Link } from "react-router-dom"
import codera from '../../assets/codera.svg'
import menuClose from '../../assets/menu_close.svg'
import Button from "../Button/Button"
import {useState} from "react"

const links = [
    {
        name: 'cases',
        link: '/cases',
        id: 0
    },
    {
        name: 'about us',
        link: '/about',
        id: 1
    },
    {
        name: 'services',
        link: '/services',
        id: 2
    },
    {
        name: 'careers',
        link: '/careers',
        id: 3
    },
    {
        name: 'products',
        link: '/products',
        id: 4
    }
]

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="relative">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 md:px-16 xl:px-0 py-5">
                <Link to="/">
                    <img src={codera} alt="codera logo" className="h-14 w-auto"/>
                </Link>

                {/*desktop*/}
                <div className="hidden lg:flex items-center justify-center gap-7">
                    <nav className="flex gap-7">
                        {
                            links.map(item => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="text-[24px] text-blackColor hover:text-orangeColor transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </nav>
                    <Button text='Get in touch'/>
                </div>

                {/*mobile burger menu*/}
                <button
                    className="lg:hidden flex flex-col gap-[4.5px]"
                    onClick={() => setOpen(!open)}
                >
                    {
                        Array.from({length: 3}).map(_ => (
                            <span className="w-7 h-[3px] bg-blackColor rounded-3xl"></span>
                        ))
                    }
                </button>
            </div>

            {/*mobile*/}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-blueColor z-40 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                >
                    <img src={menuClose} alt="close" className="h-14 w-auto"/>
                </button>
                <nav className="flex flex-col items-center justify-center h-full gap-6">
                    {links.map(item => (
                        <div className="border-b text-lightBlueTextColor">
                            <Link
                                key={item.id}
                                to={item.link}
                                onClick={() => setOpen(false)}
                                className="text-3xl text-lightBlueTextColor"
                            >
                                {item.name}
                            </Link>
                        </div>

                    ))}

                    <Link
                        to={'#'}
                        onClick={() => setOpen(false)}
                        className="text-3xl text-orangeColor font-semibold border-b"
                    >
                        Get In Touch
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header