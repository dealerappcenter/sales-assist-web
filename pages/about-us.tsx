import { Footer } from "@src/components"
import { getAboutUsSections } from "@src/mocks/aboutUs";
import { AboutUsHero, AboutUsOurTeam, AboutUsTeam } from "@src/sections/AboutUs"
import { GetStaticProps, NextPage } from 'next';
import Head from "next/head";

export const AboutUs: NextPage<AboutUsSections> = (props) => {
  const { hero, ourTeam, team } = props;
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content={hero.desc} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AboutUsHero {...{ data: hero }}/>
      <AboutUsOurTeam {...{ data: ourTeam }}/>
      <AboutUsTeam  {...{ data: team }} />
      <Footer kind="dark" />
    </>
  )
}

export default AboutUs

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getAboutUsSections();
  return {
    props: {
      ...data
    }
  }
}