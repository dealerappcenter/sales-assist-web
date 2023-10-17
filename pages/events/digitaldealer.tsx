import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Hero, Sales, Automated, CompletionTools, CompletionProcess, InstantChanges } from '@src/sections/home-page/';
import { getHomePageSections } from '@src/mocks/Home/index';
import { GA } from '@src/components/Analitiycs';
import { WhySalesAssistIteration } from '@src/sections/WhySalesAssist';
import Image from 'next/image';
import { DigitalDealerBanner } from '@src/assets';
import classNames from 'classnames';
import NextLink from 'next/link';
import Logo from '@src/assets/logo.png';

const Home: NextPage<HomePageSections> = (props) => {
  const { hero, simplifySales, actions, automated } = props;
  const classes = classNames('py-10 container max-w-[1200px] mx-auto lg:mb-12 flex-col lg:flex-row flex justify-between relative px-4 xl:px-0 text-[1.0625rem]');

  return (
    <>
      <Head>
        <title>SalesAssist</title>
        <meta name="description" content={hero.meta} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GA />

      <nav className={classes}>
        <div className='flex items-center justify-between w-full'>
          <ul className='flex items-center gap-[3.188rem]'>
            {/* logo */}
            <li className='flex items-center justify-center mr-[0.313rem]'>
              <NextLink href='/'>
                <a className='mt-2 lg:mt-0 w-44 md:w-[10.25rem] md:h-[2.875rem]'>
                  <Image
                    src={Logo}
                    alt="logo"
                  />
                </a>
              </NextLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className='flex flex-col bg-white-soft h-full mx-auto container px-4 lg:px-0 mb-12'>
        <Image alt='Completion Tools' src={DigitalDealerBanner} />
      </div>
      <Hero {...{ heroData: hero }} />
      <CompletionTools />
      <WhySalesAssistIteration {...{ data: actions }} id='actions' />
      <Automated {...{ data: automated }} className='bg-white-soft' />
      <CompletionProcess />
      <InstantChanges className='bg-white-soft' />
      <Sales {...{ data: simplifySales }} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = getHomePageSections();
  return {
    props: {
      ...data
    }
  }
}
