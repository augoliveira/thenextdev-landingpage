
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="max-w-full mx-auto text-white flex items-center justify-between overflow-hidden"
        >{children}
        </div>
    )
}
export default Container