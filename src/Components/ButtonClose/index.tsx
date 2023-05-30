import { SVGx } from "@/svg/x"
import { ReactNode } from "react"

type ButtonCloseType = "ButtonClose"

interface ButtonCloseProps {
    type?: ButtonCloseType
    children?: ReactNode
    onClick?: () => void
    className?: string

}

export const ButtonClose = ({ type = "ButtonClose", children, onClick, className = "" }: ButtonCloseProps) => {
    return (
        <button className={`ButtonClose ${type} ${className}`}
            onClick={onClick}>

        <SVGx/>
        </button>

    )
}