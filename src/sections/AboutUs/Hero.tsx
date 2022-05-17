import { Nav } from "@src/components"
import AboutUsData from "src/mocks/aboutUs/hero.json";


export const AboutUsHero: React.FC = () => {
    return (
        <header className='h-full flex flex-col bg-white-soft pb-12'>
            <Nav/>
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto flex items-center justify-start flex-col gap-12'>
                <div className='text-left bold w-full'>
                    <h2 className='text-gray-primary md:text-4xl font-semibold mb-4'>{AboutUsData.title}</h2>
                    <p className='text-gray-secondary max-w-5xl'>{AboutUsData.description}</p>
                </div>

                <div className="py-2 w-full">
                    <h2 className="text-gray-primary md:text-4xl font-semibold mb-4">{AboutUsData.our_values.name}</h2>
                    <div className="flex items-center flex-wrap gap-4 w-full ">
                        {AboutUsData.our_values.values.map(value => {
                            return <div className="p-4 flex bg-white-normal items-start justify-center w-[32%] gap-4 h-28 rounded-lg" key={value.code}>
                                <div className="w-1/5  h-16">
                                   
                                </div>
                                <div className="flex-grow w-[80%]">
                                    <h4 className="font-medium">{value.title}</h4>
                                    <p className="text-gray-secondary text-sm">{value.description}</p>
                                </div>
                            </div> 
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}
