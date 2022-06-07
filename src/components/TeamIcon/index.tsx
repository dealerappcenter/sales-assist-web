import { RiLinkedinBoxFill } from 'react-icons/ri';
import Image from 'next/image';
import { buildIcon } from '../../utils/icons';
import { team } from '@src/assets';

interface TeamIconProps {
  src?: string,
  title: string,
  name: string,
  link: string,
  code?: string
}

export const TeamIcon: React.FC<TeamIconProps> = ({ src, title, name, link, code }) => {
  if (code && src) throw new Error(`you cannot use src and code at the same time`)
  return (
    <div className='w-1/3 gap-4 md:w-1/3 lg:w-1/6 flex items-center justify-center flex-col mx-auto md:mx-0 mb-6 p-4'>
      <div className='relative h-20 w-20 rounded-full overflow-hidden flex items-center justify-center'>
        {src && <Image src={src} width={64} height={64} alt='name' />}
        {code && buildIcon({
          data: team,
          code,
          fallback: <></>,
          objectFit: 'cover',
          layout: 'fill'
        })
        }
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div className='flex items-center gap-2'>
          <h3 className='font-medium text-sm lg:text-base'>{name}</h3>
          <a href={link}>
            <RiLinkedinBoxFill />
          </a>
        </div>
        <p className='text-gray-secondary text-sm text-center'>{title}</p>
      </div>
    </div>
  )
}
