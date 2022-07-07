import { Testimonial } from '@src/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useProgress } from '@src/hooks';

export const SalesTeams: React.FC<Section<SalesTeamSection>> = ({ data }) => {
  const currentSwiper = useRef<TSwiper | undefined>(undefined);
  const swipeInstance = currentSwiper.current;
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const { progressLeft, startProgress } = useProgress();
  const currentStep = useRef<number>(0);

  useEffect(() => {
    startProgress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (progressLeft === 0 && swipeInstance) {
      startProgress()
      if (swipeInstance.activeIndex === data.quotes.length - 1) {
        swipeInstance.slideTo(0)
      } else {
        swipeInstance.slideNext()
        setActive(swipeInstance.activeIndex);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressLeft, swipeInstance]);

  function to(idx: number) {
    return () => {
      if (swipeInstance) swipeInstance.slideTo(idx);
      currentStep.current = idx;
    }
  }

  function dots(idx: number) {
    return classNames('p-[.35rem] rounded-full bg-white-normal duration-500 transition-all',
      { 'opacity-50': idx !== active }
    )
  }

  return (
    <section ref={ref} className='flex flex-col relative text-white-normal py-32'>
      <div className='inset-0 bg-gray-primary clip absolute -z-[1]'></div>
      <div className='inset-0 bg-white-normal absolute -z-[2]'></div>
      <div className='container py-6 mx-auto px-4 lg:py-20 h-full flex flex-col gap-6'>
        <h1 className='mb-6'>{data.title}</h1>
        <div className='relative flex items-center justify-center gap-6 w-full select-none'>
          <Swiper
            slidesPerView={1}
            speed={600}
            onSwiper={sw => currentSwiper.current = sw}
            onSlideChange={ev => setActive(ev.activeIndex)}
          >
            {data.quotes?.map(quote => {
              return <SwiperSlide key={quote.thoughts}>
                <Testimonial
                  className='w-full'
                  title={quote.author}
                  subTitle={quote.position}
                  image={quote.url}
                >
                  {quote.thoughts}
                </Testimonial>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
        <div className='flex items-center justify-center gap-2'>
          {data.quotes?.map((quote, i) => {
            return <button key={quote.thoughts} onClick={to(i)} className={dots(i)}></button>
          })}
        </div>
      </div>
    </section>
  )
}
