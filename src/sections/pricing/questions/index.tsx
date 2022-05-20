import Questions from '@src/mocks/pricing/questions.json';
import { calendlyLink } from '@src/utils/routes';

export const PricingQuestions: React.FC<Section> = ({ id }) => {
    return (
        <section id={id} className='bg-white-normal'>
            <div className='container mx-auto py-12 flex flex-col gap-6 lg:px-12 md:px-6 px-4'>
                <h1>{Questions.title}</h1>

                <div className='flex flex-col gap-6 mb-6'>
                    {Questions.questions.map(question => {
                        return <div key={question.question}>
                            <h4 className='text-gray-primary font-semibold'>{question.question}</h4>
                            <p className='text-sm text-gray-secondary'>{question.answer}</p>
                        </div>
                    })}
                </div>

                <div className='w-full px-6 flex-wrap md:px-12 py-8 flex items-center justify-between rounded-lg bg-gradient-to-br from-[#F87129] via-[#F87129] to-[#FFA742] text-white-normal'>
                    <h1 className='text-xl font-semibold'>{Questions.banner.text}</h1>
                    <div className='my-6 border-2 border-transparent'></div>
                    
                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                        <button className='p-2 px-3 font-medium rounded-md bg-white-normal text-orange-link'>
                            {Questions.banner.button}
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}
