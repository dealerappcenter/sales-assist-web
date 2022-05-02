import { useState, useEffect } from 'react';


let timer: NodeJS.Timer;
let local: NodeJS.Timer;

export function useProgress() {
    const [progressLeft, setProgress] = useState(1);
    const [count, setCount] = useState(1);


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

    function startCount({ count, startAt = 0 }: {count: number, startAt: number}) {
        clearInterval(local);

        let interval = startAt;

        local = setInterval(() => {
            
            interval++
            
            if (interval <= count) {
                setCount(interval)
                return
            }

            clearInterval(local)
            interval = 0;

        }, 50)
    }

    function stopCount() {
        clearInterval(local)
    }


    return { progressLeft, startProgress, count, startCount, stopCount }

}
