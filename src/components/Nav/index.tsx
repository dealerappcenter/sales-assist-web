import Link from 'next/link';
import { routes } from '@src/utils/routes';
import { NavLink } from '@src/components/NavLink';
import { Button } from '../Buttons';

export const Nav: React.FC = () => {
    return (
        <nav className="py-6 container mx-auto mb-[3em] flex justify-between">
            <ul className='flex'>
                <li>
                    <h1>Logo</h1>
                </li>
                {routes.map(route => {
                    return <li key={route.path}>
                        <Link passHref href={route.path}>
                            <NavLink>
                                {route.name}
                            </NavLink>
                        </Link>
                    </li>
                })}
            </ul>

            <ul className='flex'>
                <li>
                    <a href="/some-where">
                        <NavLink>
                            Login
                        </NavLink>
                    </a>
                </li>

                <li>
                    <Button className='px-3'>
                        Book Demo
                    </Button>
                </li>
            </ul>
        </nav>
    )
}
