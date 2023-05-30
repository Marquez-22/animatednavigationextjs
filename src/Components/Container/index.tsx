import { ReactNode } from "react"

type ContainerType = "Container1"
interface ContainerProps {
    type?: ContainerType
    children: ReactNode
}

export const Container = ({ children, type = "Container1" }: ContainerProps) => {
    return (<>
        <div className={`Container ${type}`}>
            {children}
        </div>
    </>)
}