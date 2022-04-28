import Image from 'next/image'
import classNames from 'classnames';

interface IconBoxProps {
    text: string,
    icon: string,
    isActive?: boolean,
    className?: string,
    onClick?: () => void,
}
export const IconBox: React.FC<IconBoxProps> = (props) => {
    const { text, icon, isActive, className, onClick } = props;
    const baseClass = classNames('w-fit h-fit text-center duration-700 transition-all bg-gray-primary', 
        { 'opacity-90': !isActive },
        className
    );
    const imageClass = classNames('flex items-center justify-center w-16 h-16 lg:h-24 lg:w-24 rounded-full p-1 border-2 overflow-hidden', {
        'border-orange-link': isActive,
        'border-transparent': !isActive
    });

    const textClass = classNames('my-2 font-medium', {'opacity-50': !isActive})

    return (
        <button className={baseClass} onClick={onClick}>
            <div className={imageClass}>
                <Image className='duration-700 bg-gray-primary' src={icon} alt={text} />
            </div>
            <p className={textClass}>{text}</p>
        </button>
    )
}
