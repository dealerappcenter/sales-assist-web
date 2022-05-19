import classNames from 'classnames';
import { NavLink } from '../NavLink/index';
import { useResponsive } from '../../hooks/useResponsive';
import Link from 'next/link';
import { RouteNames, Paths } from '../../utils/routes';

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

    const renderBookDemo = (name: string, path: string) => (
        <a key={path} href={path} target='_blank' rel='noreferrer'>
            <NavLink className='px-0' hideProgress>
                {name}
            </NavLink>
        </a>
    );

    const renderLink = (name: string, path: string) => (
        <Link passHref href={path}>
            <NavLink className='px-0' hideProgress>
                {name}
            </NavLink>
        </Link>
    );

    return (
        <div className={baseClass}>
            {!hideTitle && <h3 className={titleClass} style={{ wordBreak: 'keep-all' }}>{title}</h3>}
            <ul className='text-gray-secondary text-[.9rem] md:text-base '>
                {links.map((link, i) => <li className='text-left' key={link.name + i} style={{ wordBreak: 'break-all' }}>
                    {link.name === RouteNames.bookADemo ? renderBookDemo(link.name, link.path) : renderLink(link.name, link.path)}
                </li>)}
            </ul>
        </div>
    )
}
