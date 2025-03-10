import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Nav, Button } from '@components/index';
import Header from '@components/header';
import { Footer } from '@components/Footer';
import DoubleColumn from '@components/double-column';
import { Griffin, TomGibbsChevy, SocialMediaImages, Store, ManlyImages, TenaflyImages } from '@src/assets';
import { Onboarding as OB } from '@utils/routes';
import { useMemo } from 'react';

type Props = {
  title: string;
  tempPassword: string;
  crm: 'eLead' | 'Vinsolutions';
  images?: SocialMediaImages;
}

const crmData: Record<string, Props> = {
  'capital': {
    title: 'Capital Auto Group',
    tempPassword: 'capital2023',
    crm: 'eLead',
  },
  'griffin': {
    title: 'The Griffin Auto Group',
    tempPassword: 'griffin2022',
    crm: 'eLead',
  },
  'hiline': {
    title: 'Hi-Line Auto Group',
    tempPassword: 'hiline2023',
    crm: 'Vinsolutions',
  },
  'manly': {
    title: 'Manly Auto Group',
    tempPassword: 'manly2024',
    crm: 'Vinsolutions',
    images: ManlyImages,
  },
  'darien': {
    title: 'BMW Mini Darien',
    tempPassword: 'darien2024',
    crm: 'Vinsolutions',
  },
  'tomgibbs': {
    title: 'Tom Gibbs',
    tempPassword: 'tomgibbs2024',
    crm: 'Vinsolutions',
    images: TomGibbsChevy,
  },
  'tenafly': {
    title: 'Honda of Tenafly',
    tempPassword: 'tenafly2024',
    crm: 'Vinsolutions',
    images: TenaflyImages,
  },
};

export default function Onboarding(props: Props) {
  const { title, tempPassword, crm, images } = props;

  const currentImages = useMemo(() => {
    if (images) return images;
    return Griffin;
  }, [images])

  return (
    <>
      <Head>
        <title>Onboarding {title} - SalesAssist</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <Header title="SalesAssist Onboarding" subtitle={title} />
      <DoubleColumn
        content={
          <>
            <h1>
              Install your new CRM Booster
            </h1>
            <h4>
              Once you have installed the CRM Booster, refresh your browser and open your {crm} account in a new tab.
              Click on the floating SalesAssist button and login with your same {crm} username and this temporary password: {tempPassword}
            </h4>
          </>
        }
        media={
          <a href={OB.Griffin.ChromeExtension} target="_blank" rel="noreferrer" className='my-3'>
            <Button className='text-[1.063rem] font-semibold'>Install CRM Booster Now</Button>
          </a>
        }
      />
      <DoubleColumn
        content={
          <>
            <h1>
              Add SalesAssist mobile app to your iphone or ipad
            </h1>
            <h4>
              To add the SalesAssist mobile web app to your smartphone home screen,
              scan this QR code with your iphone.
            </h4>
          </>
        }
        media={
          <Image alt='' src={Store.AppStoreQR} />
        }
        bgClassName='bg-white-soft'
        reverse={true}
      />
      <DoubleColumn
        content={
          <>
            <h1>
              Add SalesAssist mobile app to your Android phone
            </h1>
            <h4>
              To add the SalesAssist mobile web app to your smartphone home screen,
              scan this QR code with your Android phone.
            </h4>
          </>
        }
        media={
          <Image alt='' src={Store.GooglePlayQR} />
        }
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
          <Image alt='' src={currentImages.FacebookQR} />
        }
        bgClassName='bg-white-soft'
        reverse
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
          <Image alt='' src={currentImages.WhatsappQR} />
        }
      />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const props = crmData[context.params?.slug as string];
  return {
    props
  }
}