import { SVGequals } from "@/svg/igual"
import { SVGx } from "@/svg/x"
import { ReactNode } from "react"

type IconToggleType = "IconToggle"

interface IconToggleProps {
    type?: IconToggleType
    children?: ReactNode
    onClick?: () => void
    className?: string

}

export const IconToggle = ({ type = "IconToggle", children, onClick, className = "" }: IconToggleProps) => {
    return (
        <button className={`IconToggle ${type} ${className}`}
            onClick={onClick}>

        <SVGequals/>
        </button>

    )
}