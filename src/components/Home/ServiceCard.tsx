import React from "react"
import coderaShape from '../../assets/codera_shape.svg'

type ServiceCardProps = {
    title: string | React.ReactNode
    content: string
}

const ServiceCard = ({title, content}: ServiceCardProps) => {
    return (
        <div
            className="
                group
                p-8 h-full
                bg-blueColor
                text-lightBlueTextColor
                transition-colors duration-300
                hover:bg-bgColor
                hover:text-blackColor
                flex
                flex-col
                items-start
                justify-start
              "
        >
            <div className="flex items-start justify-between w-full">
                <h3
                    className="
                          text-2xl lg:text-3xl font-semibold mb-3
                          transition-colors
                          group-hover:text-blueColor
                        "
                >
                    {title}
                </h3>

                <img
                    src={coderaShape}
                    alt="codera"
                    className="w-auto opacity-0 transition group-hover:opacity-100"
                />
            </div>


            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                {content}
            </p>

            <button
                className="
                  hidden lg:block
                  mt-6 text-xl underline
                  opacity-0
                  transition
                  group-hover:opacity-100
                  text-blueColor
                "
            >
                click to learn more...
            </button>

            <button
                className="
                  lg:hidden
                  mt-6 text-xl underline
                  text-orangeColor
                "
            >
                click to learn more...
            </button>
        </div>
    )
}

export default ServiceCard