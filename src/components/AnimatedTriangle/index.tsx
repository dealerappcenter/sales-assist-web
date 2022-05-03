import { useResponsive } from '@hooks/useResponsive';
import classNames from 'classnames';
import { useMemo } from 'react';

interface DashedAnimationsProps {
    active: 'one' | 'two' | 'tree' | 'idle';
}

export const DashedAnimation: React.FC<DashedAnimationsProps> = ({ active = 'idle' }) => {
    const { isMobile } = useResponsive();
    const lineOne = classNames('stroke-gray-disabled', { 'path': active === 'one' })
    const lineTow = classNames('stroke-gray-disabled', { 'r-path': active === 'two' })
    const lineThree = classNames('stroke-gray-disabled', { 'path': active === 'tree' })

    const variant = useMemo(() => {
        if (isMobile) {
            return "M 125,75 250,225 5,225 z"
        }
        return "M 65,50 200,150 20,250 z" // [[x1, x2], [y1,y1], []]
    }, [isMobile]);

    return (<div className="absolute inset-0">
       {!isMobile && <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={10} strokeWidth={2} x1="55" y1="25" x2="115" y2="70" />
            <line className={lineTow} strokeDasharray={10} strokeWidth={2} x1="35" y1="120" x2="115" y2="65" />
            <line className={lineThree} strokeDasharray={10} strokeWidth={2} x1="15" y1="120" x2="35" y2="45" />
        </svg>}

        {isMobile && <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={10} strokeWidth={2} x1="55" y1="25" x2="115" y2="70" />
            <line className={lineTow} strokeDasharray={10} strokeWidth={2} x1="35" y1="120" x2="115" y2="65" />
            <line className={lineThree} strokeDasharray={10} strokeWidth={2} x1="15" y1="120" x2="35" y2="45" />
        </svg>}
    </div>

    )
}
