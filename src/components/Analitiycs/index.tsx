import Script from 'next/script';

export const GA = () => {
    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-YXW1Y5B8CM' strategy="afterInteractive"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YXW1Y5B8CM');
        `}
            </Script>
        <Script id="linked-in-setup" type="text/javascript">
          {`
            _linkedin_partner_id = "5388436";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linked-in" type="text/javascript">
          {`
            (function(l) {
            if (!l){window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=5388436&fmt=gif" />
        </noscript>
        </>
    )
}
