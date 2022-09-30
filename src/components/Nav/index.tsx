import Image from 'next/image';
import NextLink from 'next/link';
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { calendlyLink, routes } from '@src/utils/routes';
import { NavLink } from '@components/NavLink';
import { Button } from '@components/Buttons';
import Logo from '@src/assets/logo.png';
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
  const classes = classNames('py-10 container max-w-[1200px] mx-auto lg:mb-24 flex-col lg:flex-row flex justify-between relative px-4 lg:px-0 text-[1.0625rem]', className);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSideBar = () => setIsOpen(!isOpen);

  return (
    <>
      <SideBar isOpen={isOpen && !isDesktop} onClose={handleSideBar} />
      <nav className={classes}>
        <div className='flex items-center justify-between w-full'>
          <ul className='flex items-center gap-[3.188rem]'>
            {/* logo */}
            <li className='flex items-center justify-center mr-[0.313rem]'>
              <NextLink href='/'>
                <a className='mt-2 lg:mt-0 w-44 md:w-[10.25rem] md:h-[2.875rem]'>
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
                  <NavLink isActive={route.path === router.asPath} className='font-semibold leading-5'>
                    {route.name}
                  </NavLink>
                </NextLink>
              </li>
            })}
          </ul>

          <ul className='flex items-center gap-6 text-[1.0625rem] font-semibold'>
            {/* if desktop else destroy it */}
            {isDesktop && <>
              <li>
                <a href="https://app.salesassist.io/">
                  <p className='text-[1.0625rem]'>
                    Login
                  </p>
                </a>
              </li>

              <li>
                <a href={calendlyLink} target="_blank" rel="noreferrer">
                  <Button className='px-3 font-semibold'>
                    Book Demo
                  </Button>
                </a>
              </li>
            </>}

            {/* if tablet or mobile else destroy it */}
            {!isDesktop && !isOpen &&
              <li className='flex items-center justify-center lg:hidden'>
                <button onClick={handleSideBar}>
                  <MdMenu className='text-4xl' />
                </button>
              </li>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}
