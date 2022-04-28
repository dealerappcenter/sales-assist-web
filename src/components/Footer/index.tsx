import classNames from 'classnames';
interface FooterProps {
    className?: string,
    kind?: 'dark' | 'light'
}
export const Footer: React.FC<FooterProps> = (props) => {
    const { className, kind = 'light' } = props;
    const baseClasses = classNames(
        'lg:h-[60vh] py-12',
        { 'bg-white-soft': kind === 'light' },
        { 'bg-gray-primary': kind === 'dark' },
        { 'text-white-normal': kind === 'dark' },
        className
    );

    return (
        <footer className={baseClasses}>
            <div className="h-full container mx-auto flex-grow flex gap-6 md:gap-2 flex-row md:flex-col md:px-12">
                <div className='h-1/2 w-full'>
                </div>
                <div className='flex-grow border-t-2 w-full'>
                </div>
            </div>
        </footer>
    )
}
