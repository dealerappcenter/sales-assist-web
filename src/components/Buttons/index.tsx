import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';

interface Props
    extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > {
    className?: HTMLAttributes<HTMLButtonElement>['className'];
    badge?: string,
    badgeClassName?: HTMLAttributes<HTMLButtonElement>['className'];
}


export const Button = forwardRef<HTMLButtonElement, Props>(
    (props, ref) => {
        const { className, badge, badgeClassName, ...attributes } = props;
        const baseClass = classNames('bg-orange-normal px-6 py-2 rounded-lg text-white-normal shadow-sm active:opacity-90 duration-300 transition-all w-fit relative', className);
        const badgeClass = classNames('absolute top-0 left-0 rounded-md text-sm text-white-normal', badgeClassName);

        return (
            <button
                {...attributes}
                ref={ref}
                data-testid='button-test'
                className={baseClass}>
                <div className={badgeClass}>{badge}</div>
                {props.children}
            </button>
        );
    }
);

Button.displayName = 'Button';
