import { buildIcon } from '@src/utils/icons';
import { easySteps } from '@src/assets';

export const WhySalesAssistCompleteSalesFaster: React.FC<Section<WhySalesAssistCompleteSalesFaster>> = ({ data, id }) => {
    return (
        <section id={id} className='py-12 px-4 flex flex-col relative'>
            <div className='container gap-6 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:py-12 h-full flex'>
                <div className='w-full md:w-1/2'>
                    <h1>{data.title}</h1>
                </div>

                <div className='md:w-1/2 flex-grow-0 relative flex items-center md:items-start justify-center w-fit flex-col gap-12'>
                    {
                        data.reasons.map((k) => {
                            return <div key={k.code} className='flex flex-col w-full md:w-2/3 gap-4'>
                                <div>
                                    {buildIcon({ data: easySteps, code: k.code, fallback: <div className='w-full h-full '></div>, size: { width: 56, height: 56 } })}
                                </div>
                                <div>
                                    <h3 className="">{k.title}</h3>
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
