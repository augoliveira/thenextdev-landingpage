
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="max-w-screen-2xl mx-auto text-white flex items-center justify-between w-h-full overflow-hidden"
        >{children}
        </div>
    )
}
export default Container