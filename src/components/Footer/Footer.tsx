import classNames from 'classnames';
import { logoVariants } from '@src/assets'
import { useMemo } from 'react';
import Image from 'next/image';
import { FooterList } from './FooterList';
import { footerLinks } from '../../utils/routes';
import { NavLink } from '@components/NavLink';

interface FooterProps {
    className?: string,
    kind?: 'dark' | 'light'
}

export const Footer: React.FC<FooterProps> = (props) => {
    const { className, kind = 'light' } = props;
    const baseClasses = classNames(
        'md:py-12 duration-300',
        { 'bg-white-soft': kind === 'light' },
        { 'bg-gray-primary': kind === 'dark' },
        { 'text-white-normal': kind === 'dark' },
        className
    );
    const logo = useMemo(() => kind === 'dark' ? logoVariants.white : logoVariants.dark, [kind]);

    return (
        <footer className={baseClasses}>
            <div className="h-full container mx-auto flex-grow flex gap-6 flex-col md:px-12 py-6 px-4">
                {/* footer left panel */}
                <div className='h-1/2 w-full flex justify-between md:gap-4 md:items-center'>
                    <div className='w-full md:w-fit lg:w-1/2 h-full px-2 md:py-2 relative mb-auto'>
                        <Image src={logo} alt='logo' />
                        <h4 className='hidden md:block text-xs text-gray-secondary'>© Shiplove Inc. {new Date().getFullYear()} All Rights Reserved</h4>
                        <FooterList
                            kind={kind}
                            hideTitle
                            className='block md:hidden'
                            title={footerLinks.salesAssist.title}
                            links={footerLinks.salesAssist.links}
                        />
                    </div>
                    {/* links */}
                    <div className='flex-grow lg:w-1/2 h-full flex justify-between gap-4 px-2 md:py-2 flex-wrap md:flex-nowrap'>
                        <FooterList
                            kind={kind}
                            className='hidden md:block'
                            title={footerLinks.salesAssist.title}
                            links={footerLinks.salesAssist.links}
                        />
                        <FooterList
                            kind={kind}
                            title={footerLinks.company.title}
                            links={footerLinks.company.links}
                        />
                        <FooterList
                            kind={kind}
                            title={footerLinks.contact.title}
                            links={footerLinks.contact.links}
                        />
                    </div>
                </div>
                {/* more about */}
                <div className='flex-col md:flex-row flex-grow md:border-t w-full flex md:items-start md:justify-between gap-6 px-2 md:px-0 md:py-2'>
                    {/* useful links */}
                    <div className='w-1/6 border block md:hidden'></div>
                    <div className='md:w-1/2 h-full flex items-start md:gap-6 md:justify-start flex-col md:flex-row text-gray-secondary'>
                        {['Privacy Policy'].map((link) => <NavLink hideProgress key={link} className='px-0'>
                            {link}
                        </NavLink>)}
                    </div>

                    {/* social media */}
                    <div className='md:w-1/2 h-full flex justify-end gap-2 md:gap-6 flex-col md:flex-row w-full md:pb-12'>
                        <h4 className='block md:hidden text-xs text-gray-secondary'>© Shiplove Inc. {new Date().getFullYear()} All Rights Reserved</h4>
                        <div className='flex gap-6 w-full flex-wrap md:justify-end'>
                            {[1, 2, 3, 4].map((_, i) => <span key={i} className='p-2 h-10 w-10 bg-gray-secondary/40 rounded' />)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
