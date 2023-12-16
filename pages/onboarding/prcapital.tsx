import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Nav, Button } from '@components/index';
import Header from '@components/header';
import { Footer } from '@components/Footer';
import DoubleColumn from '@components/double-column';
import { Griffin } from '@src/assets';
import { Onboarding } from '@utils/routes';

const OnboardingGriffin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Onboarding Capital Auto Group - SalesAssist</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <Header title="SalesAssist Onboarding" subtitle="Capital Auto Group" />
      <DoubleColumn
        content={
          <>
            <h1>
              Install your new eLead CRM Booster
            </h1>
            <h4>
              Once you have installed the CRM Booster, refresh your browser and open your eLead account in a new tab.
              Click on the floating SalesAssist button and login with your same eLead username and this temporary password: capital2023
            </h4>
          </>
        }
        media={
          <a href={Onboarding.Griffin.ChromeExtension} target="_blank" rel="noreferrer" className='my-3'>
            <Button className='text-[1.063rem] font-semibold'>Install CRM Booster Now</Button>
          </a>
        }
      />
      <DoubleColumn
        content={
          <>
            <h1>
              Add SalesAssist to your smartphone
            </h1>
            <h4>
              To add the SalesAssist mobile web app to your smartphone home screen,
              scan this QR code with your smartphone.
            </h4>
          </>
        }
        media={
          <Image alt='' src={Griffin.GriffinWebAppQR} />
        }
        bgClassName='bg-white-soft'
        reverse={true}
      />
      <DoubleColumn
        content={
          <>
            <h1>
              Message SalesAssist Help Desk
            </h1>
            <h4>
              To message SalesAssist Help Desk via Facebook Messenger, scan this QR code with your smartphone.
            </h4>
          </>
        }
        media={
          <Image alt='' src={Griffin.GriffinFacebookQR} />
        }
      />
      <DoubleColumn
        content={
          <>
            <h1>
              Join the Whatsapp Technical Support Group
            </h1>
            <h4>
              To join the SalesAssist Whatsapp tech support group, scan this QR code with your smartphone.
            </h4>
          </>
        }
        media={
          <Image alt='' src={Griffin.GriffinWhatsappQR} />
        }
        bgClassName='bg-white-soft'
        reverse={true}
      />
      <Footer />
    </>
  );
};

export default OnboardingGriffin;