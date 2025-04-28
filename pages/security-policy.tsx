import { Footer, Nav } from "@src/components";
import Head from "next/head";

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


      <Footer kind="dark" />
    </>
  )
}