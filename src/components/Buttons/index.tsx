import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';

interface Props
    extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > {
    className?: HTMLAttributes<HTMLButtonElement>['className'];
}


export const Button = forwardRef<HTMLButtonElement, Props>(
    (props, ref) => {
        const { className, ...attributes } = props;
        const baseClass = classNames('bg-orange-normal px-6 py-2 rounded-lg text-white-normal shadow-sm active:opacity-90 duration-300 transition-all w-fit', className);
        return (
            <button
                {...attributes}
                ref={ref}
                data-testid='button-test'
                className={baseClass}>
                {props.children}
            </button>
        );
    }
);

Button.displayName = 'Button';
