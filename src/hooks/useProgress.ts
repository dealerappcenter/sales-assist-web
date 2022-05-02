import { useState, useEffect } from 'react';


let timer: NodeJS.Timer;

export function useProgress() {
    const [progressLeft, setProgress] = useState(1);


    function startProgress() {
        clearInterval(timer);

        let interval = 100;

        timer = setInterval(() => {

            interval--

            if (interval >= 0) {
                setProgress(interval)
                return
            }

            clearInterval(timer)
            interval = 100;

        }, 100)
    }


    return { progressLeft, startProgress }

}
