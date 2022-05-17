import { Footer } from "@src/components"
import { AboutUsHero, AboutUsOurTeam } from "@src/sections/AboutUs"

export const AboutUs = () => {
  return (
    <>
        <AboutUsHero />
        <AboutUsOurTeam />
        <Footer kind="dark"/>
    </>
  )
}

export default AboutUs