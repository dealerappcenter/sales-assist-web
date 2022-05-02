import { useResponsive } from '@hooks/useResponsive';
import classNames from 'classnames';
import { useMemo } from 'react';

interface DashedAnimationsProps {
    active: 'one' | 'two' | 'tree' | 'idle';
}

export const DashedAnimation:React.FC<DashedAnimationsProps> = ({ active = 'tree' }) => {
    const { isMobile } = useResponsive();
    const lineOne = classNames('stroke-gray-disabled path', {'s-path': active === 'one'})
    const lineTow = classNames('stroke-gray-disabled path', {'s-path': active === 'two'})
    const lineThree = classNames('stroke-gray-disabled r-path', {'r-s-path': active === 'tree'})

    const variant = useMemo(() => {
        if (isMobile) {
            return "M 125,75 250,225 5,225 z"
        }
        return "M 65,50 200,150 20,250 z" // [[x1, x2], [y1,y1], []]
    }, [isMobile]);

    return (<div className="absolute inset-0">
        {/* {!isMobile && <svg version="1.1" className="w-full h-4/5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 250 250" enableBackground="new 0 0 250 250" xmlSpace="preserve">
            <path className="fill-[none] stroke-white-normal/50" strokeLinecap="round" strokeWidth={3} strokeLinejoin='miter' strokeMiterlimit={4} d={variant} strokeDasharray={10} />
            <path className="fill-[none] stroke-gray-primary" strokeLinecap="round" strokeWidth={4} strokeLinejoin='miter' strokeMiterlimit={4} d={variant} strokeDasharray={655} strokeDashoffset={-progress} />
        </svg>}

        {isMobile && <svg version="1.1" className="w-full h-4/5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 250 250" enableBackground="new 0 0 250 250" xmlSpace="preserve">
            <path className="fill-[none] stroke-white-normal/50" strokeLinecap="round" strokeWidth={3} strokeLinejoin='miter' strokeMiterlimit={4} d={variant} strokeDasharray={10} />
        </svg>} */}

        <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={10} strokeWidth={2} x1="55" y1="35" x2="115" y2="65" />
            <line className={lineTow} strokeDasharray={10} strokeWidth={2} x1="15" y1="120" x2="35" y2="45" />
            <line className={lineThree} strokeDasharray={10} strokeWidth={2} x1="35" y1="120" x2="115" y2="65" />
        </svg>
    </div>

    )
}
