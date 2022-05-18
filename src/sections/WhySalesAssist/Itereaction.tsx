import { MdInsights, MdKeyboardArrowDown } from "react-icons/md"
import { useState } from 'react';
import classNames from "classnames";

export const WhySalesAssistIteration = () => {
    const [isActive, setIsActive] = useState<number>(0);
    const handleIsActive = (active: number) => () => setIsActive(active);

    const getClasses = (i: number) => {
        return classNames(
            "border border-transparent rounded-lg px-4 py-3 w-full flex items-center justify-start text-left gap-2 transition-all duration-500 select-none",
            { 'bg-white-normal/10': i !== isActive },
            { 'border-orange-normal': i === isActive },
            { 'text-orange-normal': i === isActive },
        )
    }

    return (
        <section className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='container mx-auto text-white-normal flex flex-col gap-12'>
                <div>
                    <h1 className="mb-4">A Sales Action for every Interaction</h1>
                    <h4 className="text-gray-secondary">No matter your sales process, SalesAssist has a Sales Action to streamline your customer facing interactions, from eSignatures to document collection to e-forms.</h4>
                </div>

                <div className="flex-grow flex lg:gap-12 flex-col md:flex-row">
                    <div className="w-1/4 md:flex flex-col gap-6 hidden">
                        {types.map((t, i) => <button onClick={handleIsActive(i)} key={t} className={getClasses(i)}>
                            <MdInsights className="md:text-2xl" />
                            <span className="text-left font-medium text-sm"> {t}</span>
                        </button>)}
                    </div>

                    <div className="md:hidden flex gap-4 flex-col">
                        <h4 className="font-medium text-sm">Select an option</h4>
                        <button className='border border-gray-disabled rounded-lg px-4 py-3 w-full flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <MdInsights className="text-2xl" />
                                {types[0]}
                            </div>
                            <MdKeyboardArrowDown />
                        </button>
                    </div>

                    <div className="flex-grow flex flex-col gap-6">
                        {data[isActive] && (
                            <>
                                <div className="flex-grow flex items-center justify-center">
                                    {data[isActive].code}
                                </div>
                                <div className="flex items-center flex-col justify-center gap-2">
                                    <h3 className="font-bold">{data[isActive].title}</h3>
                                    <p className="text-sm max-w-2xl w-fit text-center text-gray-secondary">{data[isActive].desc}</p>
                                </div>
                            </>
                        )}
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

const data = [
    { code: "e-Signature", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Get Docs", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "e-Form", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Product Sharing", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Content Sharing", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Secure Payments", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Request Referrals", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Request Referrals", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
    { code: "Get Reviews", title: 'Make e-Signatures fast, easy, mobile', desc: 'Send customers agreements for eSignatures that are designed for mobile completion. Complete sales agreements in real time, with much higher completion rates than legacy eSign.', path: '' },
]
