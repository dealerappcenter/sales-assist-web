import Image from 'next/image';
import { SalesExample } from '@src/assets';

export const WhySalesAssistSimplifySales = () => {
    return (
        <section className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='container mx-auto text-white-normal flex flex-col gap-6 md:gap-12'>
                <div className="">
                    <h1 className="mb-4">Simplify Sales With Sales Actions</h1>
                    <h4 className="text-gray-secondary">(placeholder description) e.g. in 3 easy steps, you can create actions and .....</h4>
                </div>
                <div className="flex-grow gap-6 md:gap-12 flex flex-col">
                    <div className="p-2 flex w-full justify-between items-center gap-4">
                        <button className="w-fit md:w-1/5 h-10 flex p-4 rounded-full bg-orange-normal justify-center items-center">1 <span className="hidden md:block">. Chose a template</span></button>
                        <span className="w-1/5 h-1 rounded-full bg-orange-link"></span>
                        <button className="w-fit md:w-1/5 h-10 flex p-4 rounded-full bg-white-normal/25 justify-center items-center">2 <span className="hidden md:block">. Customize</span></button>
                        <span className="w-1/5 h-1 rounded-full bg-white-normal/25"></span>
                        <button className="w-fit md:w-1/5 h-10 flex p-4 rounded-full bg-white-normal/25 justify-center items-center">3 <span className="hidden md:block">. Add to action panel</span></button>
                    </div>

                    {/* todo this should be animated */}
                    <div className="flex items-center">
                        <div className='w-full md:w-1/2 px-6'>
                            {/* TODO: Place a computer here, probably an image or video. */}
                            <Image src={SalesExample} alt='example'/>
                        </div>

                        <div className="text-white-normal w-1/2 hidden md:block">
                            <h3>Choose off-the-shelf Sales Actions</h3>
                            <p className='text-gray-secondary'>description Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
