import { useEffect, useState, useRef } from 'react';

export interface UseProgressProps {
    start: boolean,
}

let timer: NodeJS.Timer;

export function useProgress(props: UseProgressProps) {
    let { start } = props;
    const [progress, setProgress] = useState(1);


    function startProgress() {
        clearInterval(timer);

        let interval = 0;

        timer = setInterval(() => {

            interval++;

            if (interval <= 100) {
                setProgress(interval)
                return
            }

            clearInterval(timer)
            interval = 0;

        }, 40)
    }


    useEffect(() => {
        if (start) {
            clearInterval(timer);

            let interval = 0;
            timer = setInterval(() => {
                interval++;

                if (interval <= 100) {
                    setProgress(interval)
                    return
                }

                clearInterval(timer);

                interval = 0;

            }, 100)
        }
    }, [start])


    return { progress, startProgress }

}