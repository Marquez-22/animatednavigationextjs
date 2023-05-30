import { ReactNode, useState } from "react"
import { Text } from "../Text"
import { ButtonClose } from "../ButtonClose"
import Link from "next/link"
import { IconToggle } from "../IconToggle"


type BoxType = "Box"

interface BoxProps {
    type?: BoxType
    children?: ReactNode
}

export const Box = ({ children, type = "Box" }: BoxProps) => {
    const [active, setactive] = useState(false)
    const ocultarMostrar = () => {
        // if (active == true) {
        //     setactive(false)
        // }
        // if (active == false) {
        //     setactive(true)
        // }

        setactive(!active)
    }

    return (<>
        <div className="contentbox">
            <div className={`Box ${type} ${active ? "active" : "inactive"}`}>
                <Link href={"/home"} className="linkBox">
                    <Text>
                        Home
                    </Text>
                </Link>
                <Link href={"/Works"} className="linkBox">

                    <Text>
                        Works
                    </Text>
                </Link>
                <Link href={"/About"} className="linkBox">

                    <Text>
                        About
                    </Text>
                </Link>
                <Link href={"/Contact"} className="linkBox">
                    <Text>
                        Contact
                    </Text>
                </Link>
                <ButtonClose
                    onClick={ocultarMostrar}
                >
                </ButtonClose>
                <IconToggle
                    onClick={ocultarMostrar}

                ></IconToggle>
            </div>


        </div>
    </>)
}