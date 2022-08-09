import { Section } from "@src/components/section"
import Image from "next/image"
import { AnimatedFlow } from '@src/animations/AnimatedFlow';
import classNames from "classnames";

export const Automated: React.FC<Section<Automated>> = ({ id, data, className }) => {
  const classes = classNames('section', className);
  return (
    <section id={id} className={classes}>
      <Section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className=" text-gray-primary">{data.title} <span className="decoration-orange-normal underline">{data.highlight}</span></h1>
          <h4 className="text-gray-secondary">{data.desc}</h4>
        </div>

        <div className="relative w-full">
          <AnimatedFlow />
        </div>
      </Section>
    </section>
  )
}
