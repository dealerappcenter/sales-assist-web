import { motion } from 'framer-motion'
import { MdInsights, MdKeyboardArrowDown } from "react-icons/md"
import { useState, useRef } from 'react';
import classNames from "classnames";

import { useClickOutside } from '@hooks/useClickOutside';
import { useResponsive } from '@hooks/useResponsive';
import Image from 'next/image';

export const WhySalesAssistIteration:React.FC<Section<WhySalesAssistActionsSection>> = ({ id, data }) => {
    const [isActive, setIsActive] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const optionContainer = useRef<HTMLDivElement | null>(null);
    const { isDesktop, isMobile, isTablet } = useResponsive();

    useClickOutside(optionContainer, () => setIsOpen(false));

    const handleIsActive = (active: number) => () => setIsActive(active);
    const handleIsOpen = () => setIsOpen(!isOpen);

    const handleOperation = (active: number) => {
        return () => {
            setIsActive(active);
            handleIsOpen()
        }
    } 

    const getClasses = (i: number) => {
        return classNames(
            "border border-transparent rounded-lg px-4 py-3 w-full flex items-center justify-start text-left gap-2 transition-all duration-500 select-none",
            { 'bg-white-normal/10': i !== isActive },
            { 'border-orange-normal': i === isActive },
            { 'text-orange-normal': i === isActive },
        )
    }

    return (
        <section id={id} className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='container mx-auto text-white-normal flex flex-col gap-12'>
                <div>
                    <h1 className="mb-4">{data.title}</h1>
                    <h4 className="text-white-normal">{data.desc}</h4>
                </div>

                <div className="flex-grow flex lg:gap-12 flex-col md:flex-row">
                    {isDesktop && <div className="w-1/4 md:flex flex-col gap-6 hidden">
                        {data.actions.map((t, i) => <motion.button initial={{ translateX: -300, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, ease: 'linear', delay: t.delay}}onClick={handleIsActive(i)} key={t.code} className={getClasses(i)}>
                            <MdInsights className="md:text-2xl" />
                            <span className="text-left font-medium text-sm"> {t.code}</span>
                        </motion.button>)}
                    </div>}

                    {(isMobile || isTablet) && <div ref={optionContainer}  className="md:hidden flex gap-4 flex-col">
                        <h4 className="font-medium text-sm">Select an option</h4>
                        <button onClick={handleIsOpen} className='relative border border-gray-disabled rounded-lg px-4 py-3 w-full flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <MdInsights className="text-2xl" />
                                {data.actions[isActive].name}
                            </div>
                            <MdKeyboardArrowDown />
                            {isOpen && <div className="rounded-lg bg-[#2a2a2a] shadow-md absolute top-14 left-0 w-full z-10">
                                {data.actions.map((t, i) => <button onClick={handleOperation(i)} key={t.code} className='p-4 w-full text-white-normal flex items-center gap-2 '>
                                    <MdInsights className="md:text-2xl" />
                                    <span className="text-left font-medium text-sm"> {t.name}</span>
                                </button>)}
                            </div>}
                        </button>
                    </div>}

                    <div className="flex-grow flex flex-col gap-6">
                        {data.actions[isActive] && (
                            <>
                                <div className="h-[30rem] md:h-auto flex-grow flex items-center justify-center relative px-10">
                                    {data.actions[isActive].url && <div className='relative h-full overflow-hidden flex items-center'>
                                        <Image src={data.actions[isActive].url || ''} width={229} height={460} alt={data.actions[isActive].name}/>
                                    </div>}
                                </div>
                                <div className="flex items-center flex-col justify-center gap-2">
                                    <h3 className="font-bold">{data.actions[isActive].title}</h3>
                                    <p className="text-sm max-w-2xl w-fit text-center ">{data.actions[isActive].desc}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
