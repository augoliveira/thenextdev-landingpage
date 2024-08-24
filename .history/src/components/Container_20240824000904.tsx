
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="w-full mi"
        >{children}
        </div>
    )
}
export default Container