import { buildIcon } from '@src/utils/icons';
import { easySteps } from '@src/assets';

export const WhySalesAssistCompleteSalesFaster: React.FC<Section<WhySalesAssistCompleteSalesFaster>> = ({ data }) => {
    return (
        <section className="bg-white-normal">
            <div className='container py-6 mx-auto lg:px-12 lg:py-20 overflow-x-auto'>
                <div className='px-4 md-px-0 mb-2'>
                    <h1 className="mb-4 text-gray-primary">{data.title}</h1>
                    {/* <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4> */}
                </div>

                <div className='relative overflow-x-auto overflow-y-hidden w-full flex gap-4 lg:gap-12 md:items-start md:justify-center px-4'>
                    { data.reasons.map(data => {
                        return <div key={data.code} className='block md:w-1/3 border md:border-none p-4 rounded-xl'>
                         <div key={data.title} className='w-[16rem] md:w-full flex flex-col gap-6 items-start'>
                            <div className="h-56 w-full rounded-xl flex items-end justify-center bg-[#ECECEC] border-b">
                                {buildIcon({ data: easySteps, code: data.code, fallback: <div className='w-full h-full '></div>, size: { width: 800, height: 400 }})}
                            </div>
                            <div className="text-gray-primary">
                                <h3 className="font-bold mb-2">{data.title}</h3>
                                <p className="text-gray-secondary text-sm">{data.desc}</p>
                            </div>
                        </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
