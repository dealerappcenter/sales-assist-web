import { Button } from "@src/components"
import { BsBarChartFill } from 'react-icons/bs'
import { buildIcon } from '@src/utils/icons';
import { simplifySales } from '@src/assets/'
import { calendlyLink } from "@src/utils/routes";

export const WhySalesAssistCompletingSalesIsPainless: React.FC<Section<WhySalesAssistCompleteSalesPainlessSection>> = ({ data }) => {
    return (
        <section className='py-12 px-4 flex flex-col relative bg-gray-primary text-white-normal'>
            <div className='container gap-6 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-full md:w-fit'>
                    <h1>{data.title}</h1>

                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                        <Button className='px-2 mt-4 md:px-3'>
                            {data.cta}
                        </Button>
                    </a>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center md:items-end justify-center w-fit flex-col gap-12'>
                    {
                        data.bullet_points.map((k) => {
                            return <div key={k.code} className='flex flex-col w-full md:w-2/3 gap-4'>
                                <div>
                                    {buildIcon({ data: simplifySales, code: k.code, fallback: <BsBarChartFill />, size: { width: 56, height: 56 } })}
                                </div>
                                <div>
                                    <h3 className="font-medium">{k.title}</h3>
                                    <p className="">{k.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

