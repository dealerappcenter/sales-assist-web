import GriffinWebAppQR from './griffin/web-app-qr.png';
import GriffinWhatsappQR from './griffin/whatsapp-support-qr.png';
import GriffinFacebookQR from './griffin/facebook-support-qr.png';

import TomGibbsWhatsappQR from './tomgibbs/whatsapp-support-qr.jpeg';

import ManlyWhatsappQR from './manly/whatsapp-manly-qr.png';

import TenaflyWhatsappQR from './tenafly/whatsapp-tenafly-qr.png';

import GooglePlayQR from './google-play-qr.png';
import AppStoreQR from './app-store-qr.png';

import NewAppStoreQR from './new-app/app-store-qr.png'
import NewGooglePlayQR from './new-app/android-store-qr.png'

import BmwschWhatappQR from './bmwsch/whatapp.png'

import MagicGmcWhatsappQR from './magicgmc/whatsapp-support-qr.png'

import SSLJLRWhatappQR from './ssjlr/whatsapp.png'

import FfsubaruWhatsappQR from './ffsubaru/whatsapp-support-qr.jpg'

import { StaticImageData } from 'next/image';

export type SocialMediaImages = {
  WebAppQR: StaticImageData;
  WhatsappQR: StaticImageData;
  FacebookQR: StaticImageData;
}

export const Griffin: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: GriffinWhatsappQR,
  FacebookQR: GriffinFacebookQR,
};

export const TomGibbsChevy: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: TomGibbsWhatsappQR,
  FacebookQR: GriffinFacebookQR,
}

export const ManlyImages: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: ManlyWhatsappQR,
  FacebookQR: GriffinFacebookQR,
}

export const TenaflyImages: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: TenaflyWhatsappQR,
  FacebookQR: GriffinFacebookQR,
}

export const Bmwsch: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: BmwschWhatappQR,
  FacebookQR: GriffinFacebookQR,
}

export const Magicgmc: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: MagicGmcWhatsappQR,
  FacebookQR: GriffinFacebookQR,
}

export const Ssjrl: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: SSLJLRWhatappQR,
  FacebookQR: GriffinFacebookQR,
}

export const Ffsubaru: SocialMediaImages = {
  WebAppQR: GriffinWebAppQR,
  WhatsappQR: FfsubaruWhatsappQR,
  FacebookQR: GriffinFacebookQR,
}

export const Store = {
  GooglePlayQR,
  AppStoreQR,
}

export const NewAppStore = {
  GooglePlayQR: NewGooglePlayQR,
  AppStoreQR: NewAppStoreQR,
}