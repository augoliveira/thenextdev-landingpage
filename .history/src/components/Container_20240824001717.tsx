
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="w-full max-w-[1440px] xl:px- md:px-0 sm:px-7 px-7 mx-auto"
        >{children}
        </div>
    )
}
export default Container