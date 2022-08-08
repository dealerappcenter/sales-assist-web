import { Section } from "@src/components/section"
import Image from "next/image"

export const Automated: React.FC<Section<Automated>> = ({ id, data }) => {
  return (
    <section id={id} className='section bg-white-normal'>
      <Section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className=" text-gray-primary">{data.title} <span className="decoration-orange-normal underline">{data.highlight}</span></h1>
          <h4 className="text-gray-secondary">{data.desc}</h4>
        </div>

        <div className="relative w-full h-[15rem] md:h-[25rem]">
          <Image src={data.asset} alt="automated" layout='fill' />
        </div>
      </Section>
    </section>
  )
}
