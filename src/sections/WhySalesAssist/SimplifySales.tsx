import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { SalesExample } from '@src/assets';
import { useProgress } from '@hooks/useProgress';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';

export const WhySalesAssistSimplifySales: React.FC<Section<WhySalesAssistSimplifySalesSection>> = ({ id, data }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const { progressLeft, startProgress } = useProgress();
    const currentStep = useRef<number>(0);

    const currentSwiper = useRef<TSwiper | undefined>(undefined);
    const swipeInstance = currentSwiper.current;

    useEffect(() => {
        startProgress()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect(() => {
        if (progressLeft === 0 && swipeInstance) {
            startProgress()
            if (currentStep.current >= 2) {
                currentStep.current = 0
                swipeInstance.slideTo(0)
            } else {
                currentStep.current = currentStep.current + 1;
                swipeInstance.slideNext()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressLeft, currentStep, swipeInstance]);

    const getClasses = (step: number) => {
        return classNames("w-fit h-10 flex p-4 rounded-full justify-center items-center duration-500 transition-all",
            { 'bg-orange-normal': currentStep.current === step },
            { 'bg-gray-aux': currentStep.current !== step },
        )
    }

    function clickOnCard(step: number) {
        return () => {
            currentStep.current = step
            if (swipeInstance) swipeInstance.slideTo(step)
            startProgress();
        }
    }

    return (
        <section id={id} className='overflow-hidden px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='container mx-auto text-white-normal flex flex-col gap-6 md:gap-12'>
                <div className="">
                    <h1 className="mb-4">{data.title}</h1>
                    <h4 className="text-gray-secondary">{data.desc}</h4>
                </div>
                <div className="flex-grow gap-6 md:gap-12 flex flex-col">
                    <div className="p-2 flex w-full justify-between items-center gap-4">
                        <button className={getClasses(0)} onClick={clickOnCard(0)}>1 <span className="hidden md:block">. {data.options.select}</span></button>
                        <div className="w-1/6 h-1 rounded-full bg-white-normal/25 overflow-hidden">
                            {currentStep.current === 0 && <div style={{ transform: `translateX(${-progressLeft}%)` }} className='bg-orange-link w-full h-full rounded-full'></div>}
                        </div>
                        <button className={getClasses(1)} onClick={clickOnCard(1)}>2 <span className="hidden md:block">. {data.options.customize}</span></button>
                        <div className="w-1/6 h-1 rounded-full bg-white-normal/25 overflow-hidden">
                            {currentStep.current === 1 && <div style={{ transform: `translateX(${-progressLeft}%)` }} className='bg-orange-link w-full h-full rounded-full'></div>}
                        </div>
                        <button className={getClasses(2)} onClick={clickOnCard(2)}>3 <span className="hidden md:block">. {data.options.add}</span></button>
                    </div>

                    <div ref={ref} className="flex items-center">
                        <Swiper
                            slidesPerView={1}
                            speed={600}
                            onSwiper={sw => currentSwiper.current = sw}
                            onSlideChange={ev => {
                                if (ev.activeIndex === choose.length + 1) {    
                                    clickOnCard(0)();
                                }
                                clickOnCard(ev.activeIndex)();
                            }}
                        >
                            {choose.map((d) => <SwiperSlide key={d.id}>
                                <div key={d.id} className='w-full flex items-center'>
                                    <div className='w-full md:w-1/2 px-6 relative'>
                                        <Image src={d.image} alt='example' />
                                    </div>

                                    <div className="text-white-normal w-1/2 hidden md:block">
                                        <h3>{d.title}</h3>
                                        <p className='text-gray-secondary'>
                                            {d.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

const choose = [
    { id: '1Choose', image: SalesExample, title: 'Choose off-the-shelf Sales Actions', desc: 'description Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.' },
    { id: '2Choose', image: SalesExample, title: 'Choose off-the-shelf Sales Actions', desc: 'description Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.' },
    { id: '3Choose', image: SalesExample, title: 'Choose off-the-shelf Sales Actions', desc: 'description Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.' }
]
