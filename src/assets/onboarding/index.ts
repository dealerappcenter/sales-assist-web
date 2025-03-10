import GriffinWebAppQR from './griffin/web-app-qr.png';
import GriffinWhatsappQR from './griffin/whatsapp-support-qr.png';
import GriffinFacebookQR from './griffin/facebook-support-qr.png';

import TomGibbsWhatsappQR from './tomgibbs/whatsapp-support-qr.jpeg';

import ManlyWhatsappQR from './manly/whatsapp-manly-qr.png';

import TenaflyWhatsappQR from './tenafly/whatsapp-tenafly-qr.png';

import GooglePlayQR from './google-play-qr.png';
import AppStoreQR from './app-store-qr.png';
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

export const Store = {
  GooglePlayQR,
  AppStoreQR,
}