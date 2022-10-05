import { PropsWithChildren, FC, Children } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface CounterProps {
    enable?: {
        add?: boolean,
        remove?: boolean
    },
    add: () => void,
    remove: () => void,
}

export const Counter: FC<PropsWithChildren<CounterProps>> = ({ children, enable = { remove: true, add: false }, add, remove }) => {
    return (
        <div className="flex mt-3 gap-4 items-center h-[2rem]">
            <button onClick={remove} disabled={enable.remove} className='p-2 rounded-full disabled:bg-gray-disabled/20 bg-orange-normal/20'>
                <MdRemove />
            </button>
            <p className="text-sm">
                {children}
            </p>
            <button onClick={add} disabled={enable.add} className='p-2 rounded-full disabled:bg-gray-disabled/20 bg-orange-normal/20'>
                <MdAdd />
            </button>
        </div>
    )
}