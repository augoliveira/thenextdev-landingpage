import Image from 'next/image';
import cortina from '../../assets/images/projects/Cortina-de-vidro.png';
import projectThree from '../../assets/images/projects/esquadria.png';
import guardaCorpo from '../../assets/images/projects/guardacorpo.png';
import projectTwo from '../../assets/images/projects/janela.png';
import projectOne from '../../assets/images/projects/projectOne.png';

interface IcardImageProps {
  image: string;
  title: string;
  subtitle: string;
}

const mock: IcardImageProps[] = [
  {
    image: cortina,
    title: 'zaha hadid', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: projectThree,
    title: 'zaha hadid', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: guardaCorpo,
    title: 'zaha hadid', 
    subtitle: 'centro de arte contemporânea',
  },
  {
    image: projectTwo,
    title: 'zaha hadid', 
    subtitle: 'centro de arte contemporânea',
  },
]


export default function CardImage({ image, title, subtitle}: IcardImagePro) {
  return (
    <div className="flex my-12 w-full h-[40rem] overflow-hidden">
      {mock.map((item, index) => (
        <div
          key={index}
          className="group group/item cursor-pointer flex-1 hover:flex-[2] overflow-hidden duration-300 relative transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="absolute left-14 top-9 z-50">
              <h1 className="text-4xl font-bold animate-in">{item.title}</h1>
            </div>
            <div className="absolute bottom-6 left-9 z-50 -rotate-90 group-hover/item:rotate-0 translate-all duration-300 origin-top-left">
              <div className="relative px-2">
                <p className="z-20">{item.subtitle}</p>
                <div className="absolute inset-0 rounded -z-10 bg-gradient-to-l from-transparent via-transparent to-black group-hover:from-black/70 opacity-0 group-hover:via-black/60 group-hover/item:opacity-100 delay-300 duration-300"></div>
              </div>
            </div>
            <Image src={item.image} alt="image" className="max-w-none h-full" />
            <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        </div>
      ))}
    </div>
  );
}


