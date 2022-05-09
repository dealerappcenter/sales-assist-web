import { Button } from "@src/components"

export const WhySalesAssistCompletingSalesIsPainless = () => {
    return (
        <section className='py-12 px-4 flex flex-col relative bg-gray-primary text-white-normal'>
            <div className='container gap-6 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-fit '>
                    <h1>Start simplifying your sales</h1>
                    <Button className='px-2 mt-4 md:px-3'>
                        Book Demo
                    </Button>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center justify-center  w-fit'></div>
            </div>
        </section>
    )
}
