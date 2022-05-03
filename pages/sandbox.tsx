import { useMemo, useState } from "react"
import { useProgress } from '@hooks/useProgress';
import { DashedAnimation } from '@components/AnimatedTriangle/index';

const Sandbox = () => {
  const [step, setStep] = useState(0)
  const {count, startCount, stopCount } = useProgress();

  const current = useMemo(() => {
    if (count) {
      return count
    }
    return step
  }, [count, step])

  return (
    <div className="h-screen w-full flex gap-12 px-12 bg-gray-primary">
      <svg  viewBox="0 0 150 150" className="bg-red-50">
          <line className="stroke-[#ffaa00] path" strokeDasharray={10} strokeWidth={2} x1="0" y1="150" x2="75" y2="0"/>
          <line className="stroke-[#ffaa00] path" strokeDasharray={10} strokeWidth={2} x1="75" y1="0" x2="150" y2="150"/>
          <line className="stroke-[#ffaa00] r-path" strokeDasharray={10} strokeWidth={2} x1="0" y1="150" x2="150" y2="150"/>
      </svg>

      {/* <div className="relative w-1/2 h-full">
        <DashedAnimation progress={current} />
      </div> */}

      <div className="controller text-white-normal">
        <h4>count: <b>{count}</b></h4>
        <h4>Current: <b>{current}</b></h4>
        <h4>Step: <b>{step}</b></h4>
        <button className="mr-2 my-2 px-4 border border-[#ffaa00] rounded" onClick={() => startCount({ count: 590, startAt: step })}>Start</button>
        <button className="mr-2 px-4 border border-[#ffaa00] rounded" onClick={stopCount}>Stop</button>

        <div className="flex gap-3">
          <button 
            className="mr-2 my-2 px-4 border border-[#ffaa00] rounded"
            onClick={() => {
              setStep(Math.floor(590 / 3.5))
              startCount({ count: 590, startAt: Math.floor(590 / 3.5) })
            }}>step 1</button>
          <button
            className="mr-2 my-2 px-4 border border-[#ffaa00] rounded" 
           onClick={() => {
              setStep(Math.floor(590 / 1.58))
              startCount({ count: 590, startAt: Math.floor(590 / 1.58) })
            }}>step 2</button>
          <button className="mr-2 my-2 px-4 border border-[#ffaa00] rounded" onClick={() => {
            setStep(1)
            startCount({ count: 590, startAt: 1 })
          }}>step 0</button>
        </div>
      </div>
    </div>
  )
}

export default Sandbox
