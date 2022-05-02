import { AnimatedHero } from "@src/components/AnimatedHero"
import { InteractAnimation } from "@src/components/HowitWorksAnimations/Interact"
import { CustomerAnimation } from "@src/components/HowitWorksAnimations/Customer"
import { SalesAnimation } from "@src/components/HowitWorksAnimations/Sales"

const Sandbox = () => {
  return (
    <div className="h-screen w-full flex gap-12 px-12">
        {/* <AnimatedHero /> */}
        {/* <InteractAnimation /> */}
        {/* <CustomerAnimation /> */}
        <SalesAnimation />
    </div>
  )
}

export default Sandbox
