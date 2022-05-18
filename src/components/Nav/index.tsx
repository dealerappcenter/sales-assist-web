import Link from 'next/link';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';


import { routes } from '@src/utils/routes';
import { NavLink } from '@components/NavLink';
import { Button } from '@components/Buttons';
import Logo from '@src/assets/logo.svg';

import { useResponsive } from '@hooks/useResponsive';
import { useRouter } from 'next/router';
import classNames from 'classnames';


interface NavProps {
    className?: string
}

export const Nav: React.FC<NavProps> = ({ className }) => {
    const { isDesktop } = useResponsive();
    const router = useRouter();
    const classes = classNames('py-6 px-4 container mx-auto lg:mb-[3em] flex-col lg:flex-row flex justify-between relative', className)
    return (
        <>
            <nav className={classes}>
                <div className='flex items-center justify-between w-full'>
                    <ul className='flex items-center gap-6'>
                        {/* logo */}
                        <li className='flex items-center justify-center'>
                            <Link href='/'>
                                <a className='mt-2 lg:mt-0'>
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </li>

                        {/* if desktop else destroy it */}
                        {isDesktop && routes.map(route => {
                            return <li key={route.path}>
                                <Link passHref href={route.path}>
                                    <NavLink isActive={route.path === router.asPath}>
                                        {route.name}
                                    </NavLink>
                                </Link>
                            </li>
                        })}
                    </ul>

                    <ul className='flex items-center'>
                        {/* if desktop else destroy it */}
                        {isDesktop && <>
                            <li>
                                <a href="https://app.salesassist.io/">
                                    <NavLink>
                                        Login
                                    </NavLink>
                                </a>
                            </li>

                            <li>
                                <a href="https://calendly.com/salesasssit?primary_color=f1621a" target="_blank" rel="noreferrer">
                                    <Button className='px-3'>
                                        Book Demo
                                    </Button>
                                </a>
                            </li>
                        </>}

                        {/* if tablet or mobile else destroy it */}
                        {!isDesktop &&
                            <li className='flex items-center justify-center'>
                                <button>
                                    <MdKeyboardArrowDown className='text-4xl' />
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}
