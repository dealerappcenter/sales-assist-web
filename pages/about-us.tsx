import { Footer } from "@src/components"
import { AboutUsHero, AboutUsOurTeam, AboutUsTeam } from "@src/sections/AboutUs"

export const AboutUs = () => {
  return (
    <>
        <AboutUsHero />
        <AboutUsOurTeam />
        <AboutUsTeam />
        <Footer kind="dark"/>
    </>
  )
}

export default AboutUs