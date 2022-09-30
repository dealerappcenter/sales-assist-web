import { Button } from 'src/components';
import { calendlyLink } from '@src/utils/routes';
import { Section } from '@components/section';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  heroData: Hero
}

export const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const [currentModule, setCurrentModule] = useState<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>();
  const [words, setWords] = useState<string[]>(heroData.modules);

  useEffect(() => {
    const time = setInterval(() => {
      const wordsEl = document.querySelector('#words') as HTMLDivElement;
      wordsEl.scrollTo(0, (wordsEl.children[1] as any).offsetTop);
      const wordsTimeout = setTimeout(() => {
        wordsEl.appendChild(wordsEl.children[0].cloneNode(true));
        wordsEl.removeChild(wordsEl.children[0]);
        clearTimeout(wordsTimeout);
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(time);
    }
  }, []);

  return (
    <header className='flex flex-col bg-white-soft h-full mx-auto pb-20 max-w-4xl'>
      <Section className='md:px-0'>
        <div className='flex justify-center flex-col gap-6'>
          <div className='flex flex-col pb-12'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl lg:tracking-wide lg:leading-[5.375rem] lg:mb-1.5'>{heroData.hero.upper_message}</h1>
            <div className='flex flex-row gap-2 md:gap-4 lg:tracking-wide lg:leading-[5.375rem]'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl text-orange-normal font-normal'>{heroData.hero.lower_message}</h1>
              <div id='words' ref={el => divRef.current = el} className='overflow-hidden relative gap-6 flex flex-col h-[40px] md:h-[65px] lg:h-[80px] slices'>
                {words.map((m, i) => <h1 key={m + i} className='text-orange-normal text-4xl md:text-6xl lg:text-7xl slice'>{m}</h1>)}
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
            <Button className='text-[1.063rem] font-semibold'>{heroData.button}</Button>
          </a>
        </div>
      </Section>
    </header>
  )
}
