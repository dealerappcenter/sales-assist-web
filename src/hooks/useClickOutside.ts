import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(ref: React.MutableRefObject<T | null>, callback: () => void) {

    const handleClick = (e: MouseEvent) => {
        const { target } = e;
        if (ref.current && !ref.current.contains(target as Node | null)) {
            callback();
        }
    };

    useEffect(() => {
        if (typeof document === 'undefined') return;
        
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};
