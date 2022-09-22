import { Button } from 'src/components';
import { calendlyLink } from '@src/utils/routes';
import { Section } from '@components/section';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  heroData: Hero
}

export const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const divRef = useRef<HTMLDivElement | null>();
  const words = useRef<string[]>(heroData.modules);

  useEffect(() => {
    const time = setTimeout(() => {
      if (currentModule === (words.current.length - 3)) {
        words.current = [...words.current, ...heroData.modules]
      }
      setCurrentModule(currentModule + 1)
      divRef.current?.scrollTo(0, (divRef.current?.children[currentModule] as any).offsetTop)
    }, 2000);

    return () => {
      clearTimeout(time);
    }
  }, [currentModule, heroData.modules, words]);


  return (
    <header className='flex flex-col bg-white-soft h-full mx-auto pb-12 max-w-4xl'>
      <Section className='px-0'>
        <div className='flex justify-center flex-col gap-6'>
          <div className='flex flex-col pb-6'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl'>{heroData.hero.upper_message}</h1>
            <div className='flex flex-row gap-4'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl text-orange-normal font-normal'>{heroData.hero.lower_message}</h1>
              <div ref={el => divRef.current = el} className='overflow-hidden gap-6 flex flex-col h-[40px] md:h-[65px] lg:h-[80px] slices'>
                {words.current.map((m, i) => <h1 key={m + i} className='text-orange-normal text-4xl md:text-6xl lg:text-7xl slice'>{m}</h1>)}
              </div>
            </div>
          </div>

          <div>
            <h4 className='text-gray-secondary md:text-2xl'>
              {heroData.desc.message}{' '}
              <span className='font-bold underline underline-offset-2 decoration-orange-normal'>
                {heroData.desc.highLight}
              </span>
              {' '}
              {heroData.desc.message_end}
            </h4>
          </div>
          <a href={calendlyLink} target="_blank" rel="noreferrer">
            <Button className='font-light'>{heroData.button}</Button>
          </a>
        </div>
      </Section>
    </header>
  )
}
