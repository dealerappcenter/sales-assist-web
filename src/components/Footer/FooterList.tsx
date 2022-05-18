import classNames from 'classnames';
import { NavLink } from '../NavLink/index';
import { useResponsive } from '../../hooks/useResponsive';
import Link from 'next/link';

export interface FooterLinkProps {
    title: string,
    links: Array<{ name: string, path: string }>,
    className?: string,
    hideTitle?: boolean,
    kind?: 'dark' | 'light',
    isContact?: boolean
}

export const FooterList: React.FC<FooterLinkProps> = (props) => {
    const { title, links, className, hideTitle, kind = 'light', isContact } = props;
    const baseClass = classNames('md:w-1/2 text-left', className);
    const titleClass = classNames('font-bold text-gray-primary mb-2 text-base md:text-lg', { 'text-[#fff]': kind === 'dark' });

    return (
        <div className={baseClass}>
            {!hideTitle && <h3 className={titleClass} style={{ wordBreak: 'keep-all' }}>{title}</h3>}
            <ul className='text-gray-secondary text-[.9rem] md:text-base '>
                {links.map((link, i) => <li className='text-left' key={link.name + i} style={{ wordBreak: 'break-all' }}>
                    <Link passHref href={link.path}>
                        <NavLink className='px-0' hideProgress>
                            {link.name}
                        </NavLink>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}
