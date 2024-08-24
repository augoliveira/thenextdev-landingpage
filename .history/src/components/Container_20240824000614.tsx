
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="w-full xl:px-10 md:px-8 sm:px-2 px-2 mx-auto"
        >{children}
        </div>
    )
}
export default Container