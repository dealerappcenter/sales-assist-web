import { AnimatedBackGround } from "@src/animations/AnimatedBackground"
import { AnimatedWorldMap } from "@src/animations/WorldMap"

const Sandbox = () => {
  return (
    <div className="bg-gray-primary w-full flex gap-12 px-12">
      <AnimatedWorldMap />
    </div>
  )
}

export default Sandbox
