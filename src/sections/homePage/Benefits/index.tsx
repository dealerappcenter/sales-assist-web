import { IconBox } from "@src/components/IconBox"
import { Insight } from "@src/components/Insight";
import { useResponsive, useProgress } from "@src/hooks";
import { useRef, useEffect } from "react";
import { Icons } from 'src/assets'
import { useInView } from 'react-intersection-observer'
import { DashedAnimation } from "@src/components/AnimatedTriangle";

export const Benefits = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const currentCard = useRef(0);
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

  function clickOnIcon(card: number, startAt: number) {
    return () => {
      currentCard.current = card

      startCount({ count: 590, startAt })
    }
  }

  const isActive = (at: number) => currentCard.current === at && isDesktop;

  return (
    <section ref={ref} className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
      <div className='container mx-auto text-white-normal'>
        <h1 className="mb-4">Here’s how everyone involved benefits</h1>
        <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4>
      </div>
      <div className="text-white-normal container mx-auto flex-grow flex gap-6 md:gap-2 flex-col md:flex-row md:px-12">
        <div className="md:w-1/2 w-full md:h-full  pt-12 relative flex items-center justify-center">
          <div className="flex-col gap-6 md:gap-0 items-center justify-center flex max-w-sm relative w-full">
           <DashedAnimation progress={count}/>
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

        <div className="md:w-1/2 w-full py-12 flex-col flex gap-12">
          <Insight
            text="Less Work"
            isActive={currentCard.current === 0}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque maiores numquam illum eveniet labore voluptatibus repellendus saepe quis adipisci impedit vel nesciunt commodi minima, facere quam aut, eligendi sit.

          </Insight>

          <Insight
            text="Reduce Errors"
            isActive={currentCard.current === 1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque maiores numquam illum eveniet labore voluptatibus repellendus saepe quis adipisci impedit vel nesciunt commodi minima, facere quam aut, eligendi sit.

          </Insight>
          <Insight
            text="Complete sales faster"
            isActive={currentCard.current === 2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque maiores numquam illum eveniet labore voluptatibus repellendus saepe quis adipisci impedit vel nesciunt commodi minima, facere quam aut, eligendi sit.

          </Insight>
        </div>
      </div>
    </section>
  )
}

