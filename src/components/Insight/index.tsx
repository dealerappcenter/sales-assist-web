import { MdInsights } from "react-icons/md"
import classNames from 'classnames';

interface InsightProp {
    text: string,
    className?: string
}

export const Insight: React.FC<React.PropsWithChildren<InsightProp>> = ({ text, children, className }) => {
    const baseClass = classNames('', className);
    return (
        <div className={baseClass}>
            <div className="flex items-center mb-4">
                <MdInsights className="text-2xl" />
                <h4 className="ml-3 font-bold">{text}</h4>
            </div>
            <div>
                <p>{children}</p>
            </div>
        </div>
    )
}
