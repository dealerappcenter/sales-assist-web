import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'swiper/css';
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script src='https://www.googletagmanager.com/gtag/js?id=G-YXW1Y5B8CM' strategy="afterInteractive"></Script>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YXW1Y5B8CM');
        `}
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
