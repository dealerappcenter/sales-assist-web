import { Button } from "@src/components"
import { BsBarChartFill } from 'react-icons/bs'
export const WhySalesAssistCompletingSalesIsPainless = () => {
    return (
        <section className='py-12 px-4 flex flex-col relative bg-gray-primary text-white-normal'>
            <div className='container gap-6 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-full md:w-fit'>
                    <h1>Start simplifying your sales</h1>
                    <Button className='px-2 mt-4 md:px-3'>
                        Book Demo
                    </Button>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center md:items-end justify-center w-fit flex-col gap-12'>
                    {
                        benefitsData.map((data) => {
                            return <div key={data.title} className='flex flex-col w-full md:w-2/3 gap-4'>
                                <div>
                                 <BsBarChartFill />
                                </div>
                                <div>
                                    <h3 className="font-medium">{data.title}</h3>
                                    <p className="text-gray-secondary">{data.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const benefitsData = [
    { title: 'Frictionless Interaction', desc: 'Give customers what they have come to expect, a seamless end-to-end journey.'},
    { title: 'Real-time Notification', desc: 'Have your salespeople take action at the precise moment, when customers are engaging.'},
    { title: 'Complete Integration', desc: 'Let SalesAssist do all the heavy lifting and give back valuable time to your salespeople.'} 
]