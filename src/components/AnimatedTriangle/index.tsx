import { useResponsive } from '@hooks/useResponsive';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

export const DashedAnimation = ({ progress }: { progress: number}) => {
    const { isMobile } = useResponsive();
    const variant = useMemo(() => {
        if (isMobile) {
            return "M 125,75 250,225 5,225 z"
        }
        return "M 65,50 200,150 20,250 z" // [[x1, x2], [y1,y1], []]
    }, [isMobile]);


    return (<div className="absolute inset-0">
        <svg className="w-full h-4/5" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d={variant}
                strokeWidth="3"
                strokeDasharray={10}
                className='path stroke-white-soft/50'
            />
        </svg>
    </div>

    )
}
