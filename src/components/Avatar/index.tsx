import classNames from "classnames";
import Image from 'next/image';

export interface AvatarProps {
    className?: string,
    image?: string,
    title: string,
    subTitle: string,
}
export const Avatar: React.FC<AvatarProps> = (props) => {
    const { className, title, subTitle, image } = props;
    const baseClass = classNames('flex items-center justify-center py-6', className);

    return (
        <div className={baseClass}>
            <div className='flex items-center w-fit'>
                <div className=''>
                    <div className='h-10 w-10 md:h-20 md:w-20 rounded-full bg-white-normal/25 overflow-hidden relative'>
                        {image && <Image src={image} alt='' layout="fill" objectFit="contain"/>}
                    </div>
                </div>
                <div className='py-2 ml-4 flex justify-center flex-col'>
                    <h1 className='text-sm md:text-lg'>{title}</h1>
                    <p className='text-gray-secondary text-xs md:text-md'>{subTitle}</p>
                </div>
            </div>
        </div>
    )
}
