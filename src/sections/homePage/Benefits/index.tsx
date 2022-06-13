import { IconBox } from "@src/components/IconBox"
import { Insight } from "@src/components/Insight";
import { useResponsive, useProgress } from "@src/hooks";
import { useRef, useEffect } from "react";
import { Icons } from 'src/assets'
import { useInView } from 'react-intersection-observer'
import { DashedAnimation } from "@src/animations/AnimatedTriangle";
import { motion } from 'framer-motion';
import { fade } from '@src/utils/animations';


export const Benefits: React.FC<Section<BenefitsSection>> = ({ id, data }) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const currentCard = useRef(0);
  const currentStatus = useRef<'one' | 'two' | 'tree' | 'idle'>('idle');

  const [ref, inView] = useInView();

  const { count, startCount, stopCount } = useProgress();


  useEffect(() => {
    if (isDesktop && inView) {
      currentCard.current = 0
      startCount({ count: 590, startAt: 0 })
    } else {
      stopCount()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    // brake points
    if (count === 168) {
      currentCard.current = 1
    } else if (count === 373) {
      currentCard.current = 2
    } else if (count === 590) {
      currentCard.current = 0
      startCount({ count: 590, startAt: 1 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, currentCard])

  useEffect(() => {
    // brake points
    if (count >= 160 && count <= 200) {
      currentStatus.current = 'one'
    } else if (count >= 370 && count <= 410) {
      currentStatus.current = 'two'
    } else if (count >= 550 && count <= 590 || count >= 1 && count <= 40) {
      currentStatus.current = 'tree'
    } else {
      currentStatus.current = 'idle'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, currentCard])

  function clickOnIcon(card: number, startAt: number) {
    return () => {
      currentCard.current = card

      startCount({ count: 590, startAt })
    }
  }

  const isActive = (at: number) => currentCard.current === at;

  return (
    <section id={id} ref={ref} className='px-4 py-6 lg:px-12 bg-gray-primary'>
      <div className='container mx-auto text-white-normal'>
        <h1 className="mb-4">{data.title}</h1>
      </div>
      <div className="text-white-normal container mx-auto flex-grow flex gap-6 md:gap-2 flex-col md:flex-row md:px-12">
        <div className="md:w-1/2 w-full md:h-full  pt-12 relative flex items-center justify-center">
          <div className="flex-col gap-6 md:gap-0 items-center justify-center flex max-w-sm relative w-full">
            <DashedAnimation active={currentStatus.current} />
            <div className="flex items-center h-fit w-full justify-center md:px-16 md:justify-start">
              <IconBox
                text="Business"
                icon={Icons.Business}
                isActive={isActive(0)}
                onClick={clickOnIcon(0, 1)}
              />
            </div>

            <div className="flex items-center h-fit w-full justify-between px-12 md:justify-end">
              <IconBox
                text="Salespeople"
                icon={Icons.Sales}
                isActive={isActive(1)}
                onClick={clickOnIcon(1, 168)}
                className='order-2 md:order-1'
              />

              {isTablet || isDesktop || isMobile && <IconBox
                text="Customer"
                icon={Icons.Costumer}
                isActive={isActive(2)}
                onClick={clickOnIcon(2, 373)}
              />}
            </div>
            {(isDesktop || isTablet) && <div className="w-full flex items-center">
              <IconBox
                text="Customer"
                icon={Icons.Costumer}
                isActive={isActive(2)}
                onClick={clickOnIcon(2, 373)}
              />
            </div>}
          </div>
        </div>

        <div className="md:w-1/2 w-full py-12 flex-col flex gap-12 md:h-[30rem]">
          {data.benefits[currentCard.current]?.bullet_points.map(point => {
            return <motion.div key={point.title} initial='start' animate='stop' variants={fade}>
              <Insight text={point.title} isActive>
                {point.desc}
              </Insight>
            </motion.div>
          })}
        </div>
      </div>
    </section>
  )
}
