import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { motion, AnimatePresence } from 'framer-motion';

import { routes } from '@src/utils/routes';
import { NavLink } from '@components/NavLink';
import { Button } from '@components/Buttons';
import Logo from '@src/assets/logo.svg';

import { useResponsive } from '@hooks/useResponsive';

export const Nav: React.FC = () => {
    const { isDesktop } = useResponsive();
    return (
        <>
            <nav className="py-6  container mx-auto lg:mb-[3em] flex-col lg:flex-row flex justify-between relative">
                <div className='flex items-center justify-between w-full'>
                    <ul className='flex items-center'>
                        {/* logo */}
                        <li className='mb-2'>

                            <Link href='/'>
                                <a>
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
                                    <NavLink>
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
                        </>}

                        {/* if tablet or mobile else destroy it */}
                        {!isDesktop &&
                            <li>
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
