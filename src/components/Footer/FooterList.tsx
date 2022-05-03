import classNames from 'classnames';
import { NavLink } from '../NavLink/index';
import { useResponsive } from '../../hooks/useResponsive';

export interface FooterLinkProps {
    title: string,
    links: Array<{name: string, path: string}>,
    className?: string,
    hideTitle?: boolean,
    kind?: 'dark' | 'light'
}

export const FooterList: React.FC<FooterLinkProps> = (props) => {
    const { title, links, className, hideTitle, kind = 'light' } = props;
    const baseClass = classNames('md:w-1/2 text-left', className);
    const titleClass = classNames('font-bold text-gray-primary mb-2 text-base md:text-lg', {'text-white-normal': kind === 'dark'});

    return (
        <div className={baseClass}>
            {!hideTitle && <h3 className={titleClass} style={{ wordBreak: 'keep-all'}}>{title}</h3>}
            <ul className='text-gray-secondary text-[.9rem] md:text-base'>
                {links.map((link, i) => <li className='text-left' key={link.name + i} style={{ wordBreak: 'break-all'}}>
                    <NavLink className='px-0' hideProgress>
                        {link.name}
                    </NavLink>
                </li>)}
            </ul>
        </div>
    )
}
