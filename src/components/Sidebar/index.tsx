import { motion } from 'framer-motion';
import Logo from '@src/assets/logo.svg';
import Image from 'next/image'
import { routes } from '@src/utils/routes';
import { NavLink } from '../NavLink';
import { useRouter } from 'next/router';
import { Route } from '../../utils/routes';

interface SideBarProps {
    isOpen: boolean,
    onClose: () => void
}
const variants = {
    closed: { opacity: 0, x: "-100%", transition: { duration: .3, ease: 'linear' } },
    open: { opacity: 1, x: 0, transition: { duration: .3, ease: 'linear' } },
}
export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    const closeSideBar = () => onClose()
    const router = useRouter();

    const navigateTo = (route: string) => {
        return () => {
            onClose();
            router.push(route)
        }
    }

    return <>
        {isOpen ? <div onClick={closeSideBar} className='bg-black/30 fixed inset-0 z-50'>
            <motion.div initial={{ opacity: 0, translateX: '-100%' }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: .3, ease: 'linear' }} className='fixed inset-0  z-[60] p-6 bg-white-normal w-3/4 h-full flex-col flex gap-6'>
                <div className='w-full flex items-center justify-center'>
                    <button onClick={navigateTo('/')}>
                        <a className='mt-2 lg:mt-0'>
                            <Image
                                src={Logo}
                                alt="logo"
                            />
                        </a>
                    </button>
                </div>
                {/* menu */}
                <ul className='w-full flex flex-col gap-3'>
                    {routes.map((route, i) => {
                        return <li key={route.path + route.name + i}>
                            <button onClick={navigateTo(route.path)} className='w-full text-left'>
                                <NavLink className='text-xl'>
                                    {route.name}
                                </NavLink>
                            </button>
                        </li>
                    })}
                    <hr />
                    <li>
                        <button onClick={closeSideBar} className='text-left w-full'>
                            <a href="https://app.salesassist.io/">
                                <NavLink className='text-xl'>
                                    Login
                                </NavLink>
                            </a>
                        </button>
                    </li>
                    <hr />
                    <li>
                        <button onClick={closeSideBar} className='text-left w-full'>
                            <a href="https://calendly.com/salesasssit?primary_color=f1621a" target="_blank" rel="noreferrer">
                                <NavLink className='text-xl'>
                                    Book Demo
                                </NavLink>
                            </a>
                        </button>
                    </li>
                    <hr />
                </ul>
            </motion.div>
        </div> : null}
    </>

}
