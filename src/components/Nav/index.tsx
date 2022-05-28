import Image from 'next/image';
import NextLink from 'next/link';
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md';


import { calendlyLink, routes } from '@src/utils/routes';
import { NavLink } from '@components/NavLink';
import { Button } from '@components/Buttons';
import Logo from '@src/assets/logo.svg';

import { useResponsive } from '@hooks/useResponsive';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { SideBar } from '@src/components/Sidebar';
import { useState } from 'react';


interface NavProps {
    className?: string
}

export const Nav: React.FC<NavProps> = ({ className }) => {
    const { isDesktop } = useResponsive();
    const router = useRouter();
    const classes = classNames('py-6 px-4 container mx-auto lg:mb-[3em] flex-col lg:flex-row flex justify-between relative', className)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleSideBar = () => setIsOpen(!isOpen);

    return (
        <>
            <SideBar isOpen={isOpen && !isDesktop} onClose={handleSideBar} />
            <nav className={classes}>
                <div className='flex items-center justify-between w-full'>
                    <ul className='flex items-center gap-6'>
                        {/* logo */}
                        <li className='flex items-center justify-center'>
                            <NextLink href='/'>
                                <a className='mt-2 lg:mt-0'>
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                    />
                                </a>
                            </NextLink>
                        </li>

                        {/* if desktop else destroy it */}
                        {isDesktop && routes.map(route => {
                            return <li key={route.path}>
                                <NextLink passHref href={route.path}>
                                    <NavLink isActive={route.path === router.asPath}>
                                        {route.name}
                                    </NavLink>
                                </NextLink>
                            </li>
                        })}
                    </ul>

                    <ul className='flex items-center gap-6'>
                        {/* if desktop else destroy it */}
                        {/* {isDesktop && <>
                            <li>
                                <a href="https://app.salesassist.io/">
                                    <p>
                                        Login
                                    </p>
                                </a>
                            </li>

                            <li>
                                <a href={calendlyLink} target="_blank" rel="noreferrer">
                                    <Button className='px-3'>
                                        Book Demo
                                    </Button>
                                </a>
                            </li>
                        </>} */}

                        {/* if tablet or mobile else destroy it */}
                        {/* {!isDesktop && !isOpen &&
                            <li className='flex items-center justify-center'>
                                <button onClick={handleSideBar}>
                                    <MdMenu className='text-4xl' />
                                </button>
                            </li>
                        }  */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
