
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="w-full min-w-max"
        >{children}
        </div>
    )
}
export default Container