import Image from 'next/image';
import { QuoteMark } from '@src/assets';
import classNames from 'classnames';

interface QuoteProps {
    className?: string,
};

export const Quote: React.FC<React.PropsWithChildren<QuoteProps>> = (props) => {
    const { children, className } = props;
    const baseClass = classNames('flex flex-col', className);

    return (<div className={baseClass}>
        <div className='flex h-full'>
            <div className='flex h-full items-start w-14 relative'>
                <Image src={QuoteMark} alt='' />
            </div>
            <p className='px-4 text-xs md:text-xl h-full text-center'>{children}</p>
            <div className='flex h-full items-end w-14 mt-auto relative'>
                <Image className='transform rotate-180' src={QuoteMark} alt='' />
            </div>
        </div>
    </div>
    )
}
