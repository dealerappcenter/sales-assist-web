import { Button, Nav } from 'src/components';

export const Hero = () => {
    return (
        <header className='px-4 flex flex-col bg-white-soft pb-12'>
            <Nav />
            <div className='flex-grow container mx-auto flex w-full h-[65%]'>
                <div className='w-[40%] p-12 flex flex-col justify-center h-full'>
                    <h1 className='text-5xl font-bold mx-auto text-gray-primary mb-6'>The Sales Completion Platform</h1>
                    <p className='text-gray-secondary mb-6 w-[80%]'>An easier, faster way to complete the entire sales process with mobile-first eSignatures, document collection, ID verification, e-forms, payment and much more.</p>
                    <Button className='text-lg'>See what we’re building - Book Demo!</Button>
                </div>
                <div className='w-[60%] flex items-center justify-center'>
                    <div className='bg-gray-placeholder/10 p-36'></div>
                </div>
            </div>
            <div className='h-[35%] container mx-auto flex flex-col items-center py-12'>
                <h2 className='mb-[3rem]'>Trusted by</h2>
                <div className='flex justify-evenly w-full'>
                    {new Array(4).fill(2).map(e => <div key={Date.now()} className="p-12 w-[10rem] bg-gray-placeholder/20"></div>)}
                </div>
            </div>
        </header>
    )
}
