import { Footer, Nav } from "@src/components";
import Head from "next/head";

import policy from '@src/mocks/security/policy.json'

export default function SecurityPolicy() {

  return(
    <>
      <Head>
        <title>SalesAssist Security Policy</title>
        <meta name="description" content="Complete sales faster with SalesAssist - the Sales Completion Platform that unifies all the sales completion tools into a single panel within your CRM, integrates them with workflow automation and assists your sales team with smart suggestions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <header>
        <Nav />
      </header>

      <section id="terms-of-service">
        <div className="container mx-auto py-12 flex flex-col gap-6 lg:px-12 md:px-6 px-4 text-gray-primary">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="font-bold text-4xl">{policy.title}</h1>
            </div>
            {/* <p className="text-base">{policy.effectiveDate}</p> */}
            {policy.introduction.map((paragraph, index) => <p key={`introduction-${index}`} className="text-base">{paragraph}</p>)}
          </div>

          {
            policy.data.map(function (item, i) {
              const key = item.title.toLowerCase().split(' ').join('-')
              return (
                <div className="flex flex-col gap-6" key={key}>
                  <h1 className="font-bold text-xl">{item.title}</h1>

                  <div className="flex flex-col gap-4">
                    {item.text.map(function (text, index) {
                      return <p key={`${key}-text-${index}`} className="text-base">{text}</p>
                    })}
                  </div> 

                  <ul className="list-disc pl-6 md:pl-12 flex flex-col gap-4">
                    {item.bullets?.map(function (text, index) {
                      return <li key={`${key}-text-${index}`}>{text}</li>
                    })}
                  </ul>
                  
                </div>
              )
            })
          }
          
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{policy.footer.title}</h1>
            <p className="text-base">{policy.footer.text} <a href={`mailto:${policy.footer.email}`} className="text-orange-600">{policy.footer.email}</a> </p>
          </div>
        </div>
      </section>
      <Footer kind="dark" />
    </>
  )
}