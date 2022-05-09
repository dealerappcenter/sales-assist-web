import { MdInsights } from "react-icons/md"

export const WhySalesAssistIteration = () => {
    return (
        <section className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary '>
            <div className='container mx-auto text-white-normal flex flex-col gap-12'>
                <div>

                    <h1 className="mb-4">A Sales Action for every Interaction</h1>
                    <h4 className="text-gray-secondary">No matter your sales process, SalesAssist has a Sales Action to streamline your customer facing interactions, from eSignatures to document collection to e-forms.</h4>
                </div>

                <div className="flex-grow flex gap-6">
                    <div className="w-1/5 flex flex-col gap-6">
                        {types.map(t => <button key={t} className='bg-white-normal/10 border border-orange-normal rounded-lg px-4 py-3 w-full flex items-center gap-2'>
                            <MdInsights className="text-2xl"/>
                            {t}
                        </button>)}
                    </div>
                    <div className="flex-grow flex flex-col gap-6">
                        <div className="flex-grow"></div>
                        <div className="flex items-center flex-col justify-center gap-2">
                            <h3 className="font-bold">Make e-Signatures fast, easy, mobile</h3>
                            <p className="text-sm max-w-2xl w-fit text-center text-gray-secondary">Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const types = [
    "e-Signature",
    "Get Docs",
    "e-Form",
    "Product Sharing",
    "Content Sharing",
    "Secure Payments",
    "Request Referrals",
    "Get Reviews"
]
