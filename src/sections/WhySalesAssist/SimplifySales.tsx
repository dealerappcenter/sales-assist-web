import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { SalesExample } from '@src/assets';
import { useProgress } from '@hooks/useProgress';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';

export const WhySalesAssistSimplifySales: React.FC<Section<WhySalesAssistSimplifySalesSection>> = ({ id, data }) => {
    const [ref, inView] = useInView({ initialInView: true });
    const { progressLeft, startProgress } = useProgress();
    const currentStep = useRef<number>(0);

    const currentSwiper = useRef<TSwiper | undefined>(undefined);
    const swipeInstance = currentSwiper.current;

    useEffect(() => {
            if (inView && swipeInstance) {
                swipeInstance.slideTo(0);
                startProgress()
            }            
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
        return classNames("w-fit h-fit flex py-2 px-4 rounded-full justify-center items-center duration-500 transition-all",
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
        <section id={id} className='overflow-hidden px-4 py-12 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='container mx-auto text-white-normal flex flex-col gap-6 md:gap-12'>
                <div className="">
                    <h1 className="mb-4">{data.title}</h1>
                    <h4 className="">{data.desc}</h4>
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
                                if (ev.activeIndex === data.show_case.length + 1) {    
                                    clickOnCard(0)();
                                }
                                clickOnCard(ev.activeIndex)();
                            }}
                        >
                            {data.show_case.map((d, i) => <SwiperSlide key={d.url}>
                                <div key={d.url} className='w-full flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-6'>
                                    <div className="md:hidden block w-[80%]">{i + 1}. {d.option}</div>
                                    <div className='w-[80%] md:w-full md:px-6 relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[29rem] rounded-xl md:rounded-3xl overflow-hidden flex items-center'>
                                        <Image src={d.url} layout='fill' alt='example' />
                                    </div>

                                    <div className="text-white-normal w-[80%]">
                                        <h2 className='mb-2'>{d.title}</h2>
                                        <p className='text-sm'>
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

