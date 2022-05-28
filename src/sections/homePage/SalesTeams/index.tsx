import { Testimonial } from '@src/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';
import { useRef, useState } from 'react';
import classNames from 'classnames';

export const SalesTeams: React.FC<Section<SalesTeamSection>> = ({ data }) => {
  const currentSwiper = useRef<TSwiper | undefined>(undefined);
  const swipeInstance = currentSwiper.current;
  const [active, setActive] = useState(0);

  function to(idx: number) {
    return () => {
      if (swipeInstance) swipeInstance.slideTo(idx);
    }
  }

  function dots(idx: number) {
      return classNames('p-1 rounded-full bg-white-normal', 
        {'opacity-50': idx !== active}
      )
  }

  return (
    <section  className='md:h-[70vh] flex flex-col relative text-white-normal pb-24'>
      <div className='inset-0 bg-gray-primary clip absolute -z-[1]'></div>
      <div className='inset-0 bg-white-normal absolute -z-[2]'></div>
      <div className='container py-6 mx-auto px-4 lg:px-12 lg:py-20 h-full flex flex-col gap-6'>
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
