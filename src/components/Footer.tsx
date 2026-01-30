import { Link } from "react-router-dom";
import codera from "../assets/codera_light.svg";
import tiktok from "../assets/tiktok_codera.svg"
import facebook from "../assets/facebook_codera.svg"
import insta from "../assets/insta_codera.svg"
import linkedin from "../assets/linkedin_codera.svg"

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

const socials = [
    {
        name: 'tiktok',
        image: tiktok,
        id: 1
    },
    {
        name: 'facebook',
        image: facebook,
        id: 2
    },
    {
        name: 'insta',
        image: insta,
        id: 3
    },
    {
        name: 'linkedin',
        image: linkedin,
        id: 4
    }
]

const Footer = () => {
    return (
        <footer className="w-full bg-blueColor pb-16 text-lightBlueTextColor px-8 md:px-16 xl:px-0">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row py-5 border-b border-t border-lightBlueTextColor w-full">
                    <div className="flex flex-col gap-3">
                        <h3
                            className="text-lightBlueTextColor text-3xl underline font-semibold"
                        >
                            Sections
                        </h3>

                        <nav className="flex flex-col md:items-start items-center md:mb-0 mb-8 md:gap-0 gap-3">
                            {
                                links.map(item => (
                                    <Link
                                        key={item.id}
                                        to={item.link}
                                        className="
                                            text-[24px]
                                            text-lightBlueTextColor
                                            hover:text-orangeColor
                                            transition-colors
                                        "
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>

                    <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-5 md:gap-10">
                        <Link to="/">
                            <img src={codera} alt="codera logo" className="h-14 w-auto"/>
                        </Link>

                        <div className="text-xl md:text-start text-center">
                            <p>contact@codera.com</p>
                            <p>+70 555 555 555 </p>
                        </div>

                        <div className="flex gap-3">
                            {
                                socials.map(social => (
                                    <Link to={'#'}>
                                        <img
                                            key={social.id}
                                            src={social.image}
                                            alt={social.name}
                                            className="h-8 w-auto hover:opacity-70"
                                        />
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="flex gap-5 mb-2">
                        <Link
                            to={'#'}
                            className="text-xl md:text-[24px] text-lightBlueTextColor hover:text-orangeColor transition-colors"
                        >
                            impressum
                        </Link>

                        <Link
                            to={'#'}
                            className="text-xl md:text-[24px] text-lightBlueTextColor hover:text-orangeColor transition-colors"
                        >
                            privacy policy
                        </Link>
                    </div>

                    <p>© 2026 Codera. All Rights Reserved.</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer