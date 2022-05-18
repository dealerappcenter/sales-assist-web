import { RiLinkedinBoxFill } from 'react-icons/ri';
import Image from 'next/image';

interface TeamIconProps {
    src?: string,
    title: string,
    name: string,
    link: string
}

export const TeamIcon: React.FC<TeamIconProps> = ({ src, title, name, link  }) => {
  return (
    <div  className='w-fit md:w-1/6 flex items-center justify-center flex-col mx-auto md:mx-0'>
    <div className='h-20 w-20'>
    { src && <Image  src={src} width={64} height={64} alt='name'/>}
    </div>
    <div className='flex items-center gap-2'>
        <h3 className='font-medium'>{name}</h3>
        <a href={link}>
            <RiLinkedinBoxFill />
        </a>
    </div>
    <p className='text-gray-secondary'>{title}</p>
</div>
  )
}
