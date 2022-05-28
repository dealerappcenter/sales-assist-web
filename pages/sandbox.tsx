import { v4 as uuid } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';
import { useRef } from 'react';

const Sandbox = () => {
  const currentSwiper = useRef<TSwiper | undefined>(undefined);
  const swipeInstance = currentSwiper.current

  const elements = [
    <SwiperSlide key={uuid()}>
      <div className='w-full h-[30rem] bg-red-400' />
    </SwiperSlide>,
    <SwiperSlide key={uuid()}>
      <div className='w-full h-[30rem] bg-green-400' />
    </SwiperSlide>,
    <SwiperSlide key={uuid()}>
      <div className='w-full h-[30rem] bg-blue-400' />
    </SwiperSlide>,
  ];

  return (
    <>
      <Swiper
        loop
        slidesPerView={1}
        speed={500}
        onSwiper={sw => currentSwiper.current = sw}
      >
        {elements.map(el => el)}
        {/* <SlideController control={ev => ref.current = ev} /> */}
      </Swiper>
      <button className='p-6 mx-4 border' onClick={() => swipeInstance && swipeInstance.slideNext()}>
        next
      </button>
      <button className='p-6 mx-4 border' onClick={() => swipeInstance && swipeInstance.slidePrev()}>
        prev
      </button>
      {elements.map((_, i) => <button key={uuid()} className='p-6 mx-4 border' onClick={() => swipeInstance && swipeInstance.slideTo(i)}>
        {i + 1}
      </button>)}
    </>
  )
}

export default Sandbox
