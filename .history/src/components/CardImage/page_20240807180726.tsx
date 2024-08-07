import Image, { StaticImageData } from 'next/image';
import cortina from '../../assets/images/projects/Cortina-de-vidro.png';
import projectThree from '../../assets/images/projects/esquadria.png';
import guardaCorpo from '../../assets/images/projects/guardacorpo.png';
import projectTwo from '../../assets/images/projects/projectOne.png';

interface IcardImageProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
}

const mock: IcardImageProps[] = [
  {
    image: cortina,
    title: 'CORTINA DE VIDRO', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: projectThree,
    title: 'ESQUADRIA DE ALUMINIO', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: guardaCorpo,
    title: 'GUARDA CORPO', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: projectTwo,
    title: 'COBERTURA DE VIDRO', 
    subtitle: 'centro de arte contemporânea',
  },
]


export default function CardImage() {
  return (
    <div className="flex my-12 w-full h-[40rem] overflow-hidden">
      {mock.map((item, index) => (
        <div
          key={index}
          className="group group/item cursor-pointer flex-1 hover:flex-[2] overflow-hidden duration-300 relative transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="absolute left-14 top-9 z-50">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight animate-in">{item.title}</h1>
            </div>
            <div className="absolute bottom-6 left-9 z-50 -rotate-90 group-hover/item:rotate-0 translate-all duration-300 origin-top-left">
              <div className="relative px-2">
                <p className="z-20">{item.subtitle}</p>
                <div className="absolute inset-0 rounded -z-10 bg-gradient-to-l from-transparent via-transparent to-black group-hover:from-black/70 opacity-0 group-hover:via-black/60 group-hover/item:opacity-100 delay-300 duration-300"></div>
              </div>
            </div>
            <Image 
            src={item.image} 
            className="image-layer lazyload"
            placeholder='blur'
            blurDataURL='data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-lime-700/70"></div>
        </div>
      ))}
    </div>
  );
}


