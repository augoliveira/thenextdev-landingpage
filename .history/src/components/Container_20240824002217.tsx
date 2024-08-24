
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="max-w-full w-screen sm:px-7 px-7 mx-auto"
        >{children}
        </div>
    )
}
export default Container