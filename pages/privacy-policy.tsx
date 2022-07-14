import { Footer, Nav } from "@src/components"
import { NextPage } from "next"
import Head from "next/head"
import PolicyData from '@src/mocks/PrivacyPolicy/policy.json';
import classNames from 'classnames';
import { GA } from "@src/components/Analitiycs";
import { Section } from "@src/components/section";

const PrivacyPolicy: NextPage = () => {
  const lastPayment = PolicyData?.data.payment.description.length - 1 || 0;
  const lastContact = PolicyData?.data.contact.description.length - 1 || 0;

  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="we respect the privacy rights of our users and recognize the importance of protecting the personal information we collect about you. Our Privacy Policy is designed to help you understand what information we collect and how we use and share that information." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GA />
      <header className="lg:px-12">
        <Nav />
      </header>
      <section id='policy'>
        <Section className="container mx-auto py-12 flex flex-col gap-6 text-gray-primary">
          {/*  */}
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="font-bold text-4xl">{PolicyData.data.policy.name}</h1>
            </div>
            {PolicyData?.data.policy.description.map(paragraph => <a className="" key={paragraph}>{paragraph}</a>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData?.data.information.name}</h1>
            {PolicyData?.data.information.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData?.data.how.name}</h1>
            {PolicyData?.data.how.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
            <ul className="list-disc pl-6 md:pl-12 flex flex-col gap-4">
              {PolicyData?.data.how.options.map(option => {
                return <li key={option.desc}>
                  {option.desc}
                  {option.options && (
                    <ul className="list-disc pl-6 md:pl-12 flex flex-col gap-4 mt-4">
                      {option.options.map(opt => {
                        return <li key={opt}>{opt}</li>
                      })}
                    </ul>
                  )}
                </li>
              })}
            </ul>
            {PolicyData?.data.how.more}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.payment.name}</h1>
            {PolicyData?.data.payment.description.map((paragraph, i) => <p className="" key={paragraph}>{paragraph} {i === lastPayment &&
              PolicyData?.data.payment.links.map((link) => <a href={link} target='_blank' rel="noreferrer" className="text-orange-link" key={link}>{link}</a>)
            }</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.control.name}</h1>
            {PolicyData?.data.control.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.personal.name}</h1>
            {PolicyData?.data.personal.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.personal.name}</h1>
            {PolicyData?.data.personal.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.changes.name}</h1>
            {PolicyData?.data.changes.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.under_age.name}</h1>
            {PolicyData?.data.under_age.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.california.name}</h1>
            {PolicyData?.data.california.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.security.name}</h1>
            {PolicyData?.data.security.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.transfer.name}</h1>
            {PolicyData?.data.transfer.description.map(paragraph => <p className="" key={paragraph}>{paragraph}</p>)}
          </div>
          {/*  */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{PolicyData.data.contact.name}</h1>
            {PolicyData?.data.contact.description.map((paragraph, i) => <p className="" key={paragraph}>{paragraph} {i === lastContact &&
              PolicyData?.data.contact.links.map((link) => <a href={'mailto:'+link} className="text-orange-link" key={link}>{link}</a>)
            }</p>)}
          </div>
        </Section>
      </section>
      <Footer kind="dark" />
    </>
  )
}

export default PrivacyPolicy